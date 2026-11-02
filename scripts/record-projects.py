#!/usr/bin/env python3
"""Record real website hero motion. Requires permitted proxy access, Playwright and ffmpeg.

Leaves existing title treatments untouched. Inspect output before integrating it.
"""
import os
import subprocess
import tempfile
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = [('fjall', 'https://www.fjallgroup.com/', 'fjall'),
            ('secha', 'https://www.sechahome.com/', 'secha')]

def main():
    with tempfile.TemporaryDirectory(prefix='jopelo-recording-') as scratch:
        with sync_playwright() as playwright:
            launch = dict(executable_path='/usr/bin/chromium', headless=True,
                          args=['--no-sandbox'])
            proxy = os.environ.get('HTTPS_PROXY')
            if proxy:
                launch['proxy'] = {'server': proxy}
            browser = playwright.chromium.launch(**launch)
            try:
                for name, url, expected in PROJECTS:
                    context = browser.new_context(viewport={'width': 1440, 'height': 900},
                        record_video_dir=scratch, record_video_size={'width': 1440, 'height': 900})
                    page = context.new_page()
                    started = time.monotonic()
                    try:
                        response = page.goto(url, wait_until='load', timeout=45000)
                        if not response or response.status != 200:
                            raise RuntimeError(f'{url}: unexpected response')
                        page.evaluate('document.fonts.ready')
                        page.wait_for_timeout(3500)
                        body = page.locator('body').inner_text().lower()
                        if expected not in body or any(message in body for message in
                            ['access denied', 'verify you are human', 'checking your browser']):
                            raise RuntimeError(f'{url}: source page not verified; refusing capture')
                        page.screenshot(path=f'{scratch}/{name}.png')
                        offset = time.monotonic() - started
                        page.wait_for_timeout(10000)
                        video = page.video
                        context.close()
                        raw = str(video.path())
                        target = Path(scratch) / f'{name}-hero.mp4'
                        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', str(offset),
                            '-i', raw, '-t', '10', '-an', '-c:v', 'libx264', '-crf', '23',
                            '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(target)], check=True)
                        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', '1', '-i',
                            str(target), '-frames:v', '1', str(ROOT/'assets'/f'{name}-hero.jpg')], check=True)
                        (ROOT/'assets'/f'{name}-hero.mp4').write_bytes(target.read_bytes())
                        print(f'Captured {url}: assets/{name}-hero.mp4; inspect before integrating.')
                    finally:
                        context.close()
            finally:
                browser.close()

if __name__ == '__main__':
    main()
