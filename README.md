# JOPELO portfolio

A responsive, accessible static portfolio for Josephine Petra Lovensa. Plain HTML, CSS and JavaScript; no Vite, npm dependencies or build step. Fonts and imagery are served locally.

## Develop

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the local server in your browser. The existing `.nojekyll` supports deployment from the repository root on GitHub Pages.

## Contact flow

The inquiry form prepares an introduction for the visitor to copy and send on LinkedIn. It does not submit to a server or store personal data. Update the LinkedIn destination in `index.html` if needed.

## Content and assets

Fjall Group / Chief Business Officer comes from the user; SECHA and LingoTalk descriptions come from the previous portfolio. No dates or additional roles have been invented. Update the experience rows when new verified details are available. The hero portrait is an edited asset based on the supplied photo. Inter is self-hosted under the SIL Open Font License (see `assets/Inter-LICENSE.txt`). The single arrow is from Tabler Icons (MIT).

## Cinematic studio presentation

The studio offer and selected work lead the page. A fixed editorial headshot introduces the principal. Motion is restricted to typography; the headshot has no animation, pointer parallax, zoom or transform.

The opening sequence uses three hard-cut typographic frames: THINK / BUILD / JOPELO. It runs once per tab session, ends after 2.8 seconds, and supports Skip and Escape. Reduced-motion users bypass it. The motion control disables text animation. Content stays available without JavaScript.

Project panels link to Fjall Group and SECHA. Screenshots and video previews require access to the project websites or supplied media; no preview imagery has been fabricated.
