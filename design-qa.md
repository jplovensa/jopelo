# Portfolio design QA

final result: passed

## Target and evidence

- Source: `/workspace/generated_images/exec-6cc8dce4-aa94-4d71-b9b0-e37dc19919eb.png` (1487 × 1058).
- Browser implementation: `/tmp/jopelo-desktop.png` (1487 × 1058, CSS viewport 1487 × 1058, deviceScaleFactor 1).
- Combined source/implementation evidence: `/tmp/jopelo-comparison-final.jpg`. No density normalization required.
- Mobile: `/tmp/jopelo-mobile.png`, 390 CSS px wide, full document. Layout also exercised at 768 and 1440 CSS px.
- State: default landing screen, no open menu or selected input.

## Findings and intentional changes

No unresolved P0/P1/P2 findings in the implemented scope.

- Typography: Inter replaces all condensed display and serif text as explicitly requested. Its wider letterforms change the headline and masthead proportions. Body text, labels, controls, credentials and navigation also use self-hosted Inter. No external font dependency.
- Spacing/layout: centered portrait, oversized red backdrop, left headline/CTA and right experience rows retain the selected composition. Smaller breakpoints stack the content and use a collapsible menu. No horizontal overflow at tested widths.
- Color: near-black, ivory, scarlet and muted gray. Red portrait lighting and backdrop gradients deliberately removed to keep hair jet black and the visual treatment restrained.
- Imagery: a separate edited portrait derived from the supplied photo, with black hair and black jacket. Face remains unobscured. The original uploaded file was unavailable as a local asset; this is an edited/generated rendition rather than the original file.
- Content: Fjall Group / Chief Business Officer added from the user's reply; SECHA and LingoTalk follow. No missing dates or role descriptions invented. Recognition retained separately. User's project website URLs and preview media are still needed for the requested work showcase; that feature is outside this QA pass.
- Icons: one locally stored Tabler arrow, consistent sizing, no decorative pictograms.

## Comparison history

1. Initial browser capture: portrait too small relative to the hero. Increased its size.
2. Second capture: increased height clipped the top of the hair (P2). Reduced desktop portrait height to 98% of hero.
3. Final capture and combined comparison: full hair silhouette visible below header; face and CTA unobstructed. Inter-driven geometry and updated experience content are intentional deviations. No further visual fixes made after final comparison.

Focused checks: full-resolution desktop hero was opened separately to inspect portrait boundaries, text wrapping and credentials. The full mobile document was opened to inspect section hierarchy, form layout and navigation. No rasterized UI is used.

## Functional validation

Chromium: mobile menu opens and closes after navigation; service selection preselects inquiry service; contact form validates required fields and generates the correct introduction; copy action executes; LinkedIn links are explicit external links. No page errors or failed HTTP responses. JavaScript syntax check passes. Reduced-motion styles and visible keyboard focus provided. Browser clipboard permissions can require manual copy; the UI provides that fallback.

## Implementation checklist

- [x] Static HTML/CSS/JavaScript, no Vite or build dependencies.
- [x] Local fonts, portrait and arrow with font/icon licenses.
- [x] Desktop/mobile functional and visual checks.
- [ ] Add project URLs and preview videos once supplied by the user.

## Experience and work follow-up

User supplied Fjall Group and SECHA website URLs and requested expanded copy. Added linked text-based project rows and edited experience/principal copy without inventing dates, numeric results, or additional credentials. New section evidence: `/tmp/jopelo-work.png` (1440 CSS px desktop). Its editorial rows extend the existing divider/type system; no source mock existed for this additional section. Browser validation repeated: service selection, contact introduction/copy action, mobile menu, zero page errors, no overflow at 390/768/1440. Verified both project anchor destinations. External site capture is blocked by HTTP proxy 403; video previews remain unimplemented. Earlier chat history is not available through the enabled tools. These content/access limitations are distinct from passing checks of the implemented site.

## Close-up hero and opening film

User-requested scoped revision: close-up headshot, subtle motion and an opening video preloader. New evidence: `/tmp/jopelo-closeup.png` (1487×1058), `/tmp/jopelo-closeup-mobile.png` (390×844), `/tmp/jopelo-intro.png` (1487×1058). Portrait now uses a face-led crop rather than the earlier torso composition; Inter, palette, content and supporting layout remain. The local MP4 is a three-second animated portrait treatment, not newly filmed footage (140,157 bytes).

Initial mobile review found the global image max-width prevented centering the wider portrait. Set `.hero .portrait { max-width: none; }` and recaptured; face is now centered. Motion toggle pauses only continuous portrait animation; entrance text remains readable. Intro supports Skip, Escape, automatic completion, autoplay error dismissal and a four-second hard limit. It runs once per tab session and is bypassed for reduced motion. No-JS leaves the intro hidden and the portfolio readable.

Chromium verified actual MP4 playback (three-second duration, advancing currentTime), skip, automatic completion, per-session suppression, portrait pause, reduced-motion bypass and no horizontal overflow on mobile. Repeated existing menu/service/inquiry tests: passed, zero browser errors. Final mobile crop and desktop screenshot opened and inspected. No outstanding P0/P1/P2 issue in this scoped revision.

final result: passed

## Cinematic studio revision (current)

final result: passed

Scope: the user requested a studio-led cinematic portfolio, brutalist preloader, still headshot and text-only motion. These changes intentionally supersede the earlier centered portrait composition and animated MP4 intro.

Evidence opened: `/tmp/cinematic-desktop.png` (1440×1000), `/tmp/cinematic-intro.png` (1440×1000), `/tmp/cinematic-mobile.png` (390 CSS px full page). Final mobile reveal review: `/tmp/cinematic-mobile-reviewed.png`. Device scale factor 1. The current source is the existing site plus the user's explicit revision brief; layout changes are intentional, not fidelity defects against the prior mock.

- Typography: Inter retained, solid red/ivory hierarchy. Hard-cut intro and staggered headline motion replace photo movement. Section headings reveal once on entry.
- Layout: hero copy and static portrait occupy separate grid columns; mobile stacks them. Work moves immediately after hero. Project panels precede biography and commercial capabilities.
- Imagery: existing close-up portrait stays inside a defined editorial frame with caption. No transforms, animation or pointer listeners affect it. Verified identical bounding boxes before and after mouse movement and elapsed time.
- Palette: near-black, scarlet, ivory; project surfaces use restrained dark hues. No invented project photography, artwork or screenshots.
- Content: studio positioning, website links, service choices and inquiry path preserved. No invented awards or client outcomes.

Iteration: first intro code made delayed words visible before their start due to backwards fill. Set the first two words to zero base opacity with no fill, and only the final word to forwards fill. Captured intro shows a single clean THINK frame. No P0/P1/P2 findings remain for implemented scope.

Browser checks passed: intro skip, automatic completion, reduced-motion bypass, text-motion pause, immobile portrait, no-JS content access, every scroll heading becomes visible, 390/768/1440 no overflow, mobile navigation, service preselection, inquiry generation and copy action. No browser errors. External project screenshots/videos remain blocked by network policy, as already documented.

## Streaming-style opening, embedded title sequences and capabilities (current)

final result: passed

The user's revision intentionally changes the previous split hero to a full-width JOPELO studio ident. It uses original JOPELO typography; this is a cinematic red-wordmark treatment, not an exact reproduction of Netflix's proprietary opening. The portrait remains still in the principal section.

Evidence inspected: `/tmp/studio-ident.png` (1440×1000, active opening), `/tmp/streaming-hero.png` (1440×1000, settled hero), `/tmp/streaming-work.png` (1440 CSS px, work section), and `/tmp/streaming-mobile.png` (390 CSS px, full page). CSS and screenshot pixels are 1:1. Desktop wordmark and hero-copy positions were inspected at full resolution. First inspection found the eyebrow overlapping the large ident; increased desktop hero top padding to 410px and minimum height to 920px, recaptured and verified separation.

Typography: Inter throughout, wordmark focus/zoom and text entrances. Spacing: full-width studio title, work immediately below, still principal portrait separated from hero, editorial capability rows. Tokens: near-black, red and ivory, restrained project surface hues. Assets: two local five-second MP4s and JPEG posters, genuine motion title sequences clearly labelled as studio title treatments, not website recordings. Content: Forbes India and APAC Insider recognition names supplied directly by the user. No unverified award dates, categories or titles added; LinkedIn fetching is blocked. Antler and UNHCR kept under background. Fixed-price packages replaced by strategy/storytelling, web experiences, brand worlds and venture/real-estate advisory, all linked to matching inquiry choices.

Chromium validation: both videos advance currentTime and report duration=5 with no media errors; pause control pauses both; intro skip and replay/Escape work; revised capability selection correctly populates service and inquiry; mobile menu works; no overflow at 390/768/1440; reduced motion bypasses opening and prevents video autoplay; no page errors or HTTP failures for local assets. No actionable P0/P1/P2 finding remains in implemented scope. Website footage and independent LinkedIn credential verification remain access-limited.

## Reference portrait hero and restored brutalist opening (current)

final result: passed

Source: latest user-attached Renando hero screenshot (wide desktop reference). Intentional adaptations retain Inter, the user's jet-black-haired portrait, JOPELO copy and confirmed recognition instead of the reference's condensed font, male portrait and unverified numerical claims.

Evidence inspected: `/tmp/streaming-hero.png` (1440×1000 desktop, settled hero), `/tmp/streaming-mobile.png` (390 CSS px full document), `/tmp/studio-ident.png` (1440×1000 restored red opening, BUILD frame). CSS pixels and image pixels are 1:1.

Composition now follows the screenshot: oversized tall red PORTFOLIO backdrop, centered static portrait, left studio introduction and CTA, right recognition, bottom discovery strip. The previous red THINK / BUILD / JOPELO preloader is restored with a three-step counter, 2.8-second completion, Skip/Escape/replay and session suppression. Project films and capability content are preserved.

Visual iteration: initial enlarged red lettering reduced right-column contrast. Faded the lower background text and switched credential names to ivory, then recaptured and inspected the desktop hero. Body copy and CTA remain unobscured; mobile stacks the face-led portrait, introduction and recognition. The original script smoke test initially targeted the old replay accessible name; updated it to the new visible label and repeated checks.

Final Chromium checks passed: opening skip/replay/Escape; native project video playback (duration=5, advancing time, no errors); pause control; capabilities/inquiry selection and generation; mobile menu; no overflow at 390/768/1440; reduced-motion opening bypass and video pause; zero browser page errors or failed local asset responses. Syntax and diff whitespace checks passed. No remaining P0/P1/P2 findings in scope.

## Full identity-card redesign (current)

final result: passed

Visual target: latest user-supplied identification-card image. User requested the style and barcode for JOPELO, not SECHA branding. Intentional adaptation: the two physical badges become a responsive digital hero with an identity portrait panel and dark studio statement, rather than literal lanyard cutouts. Inter and the existing user's identity are retained.

Evidence opened: `/tmp/streaming-hero.png` (1440×1000), `/tmp/streaming-mobile.png` (390 CSS px full document), `/tmp/studio-ident.png` (1440×1000 BUILD intro frame). Post-scroll heading evidence: `/tmp/identity-mobile-reviewed.png`. Density is 1:1 CSS to raster pixels.

- Fonts/type: oversized Inter, tightly set headline, legible small metadata and service labels. Text entrance/reveal animation only.
- Layout: square split identity/statement hero; clean portrait, caption and barcode; dark project collection; ivory experience and capability rows; warm contact surface; dark barcode footer. Mobile stacks both hero panels without overlap.
- Colors/tokens: ivory, charcoal, muted warm rules, small ochre punctuation. Photograph has left grayscale/right natural color split matching the reference treatment.
- Assets: existing portrait reused without subject modification. Code 128 barcode generated by ReportLab, encoding JOPELO-001. No SECHA branding on the identity card. No unverified trademark registration symbol used. Existing self-hosted title videos retained and clearly labelled.
- Content: studio headline, metadata, project links, credentials and inquiry content checked. Duplicate portrait removed from the principal section to keep the identity hero as the visual anchor.

Browser checks: no horizontal overflow at 390/768/1440, menu, intro skip/replay/Escape, videos advancing (5s duration, no media errors), motion/video pause, service preselection, generated inquiry, reduced-motion intro bypass/video pause; no browser errors or failed local assets. Each scroll heading verified visible after reveal. Portrait bounding box unchanged over time. Syntax and diff checks passed. No unresolved P0/P1/P2 findings in scope. Live website deployment has not been independently verified.

## Precisely framed cinematic close-up (current)

final result: passed

The user requested a centered cinematic close-up, moving JOPELO lettering behind it, and restoration of the red opening. Evidence inspected: `/tmp/streaming-hero.png` (1440×1000), `/tmp/streaming-mobile.png` (390 CSS px full document), `/tmp/closeup-tablet.png` (768×1000, paused motion). Previous ID-card hero is intentionally replaced; lower-page ivory/charcoal styling and project/capability content remain.

Portrait treatment now uses the original 1024×1536 proportions rather than object-fit cover. Desktop width 920px/top -25px; tablet width 780px/top 0; mobile width 600px/top -8px; large desktop width 1080px/top -28px. The overflow frame crops the lower torso, leaving the head, eyes and face centered with deliberate headroom. No image motion, zoom or parallax. Typography moves independently behind the subject. Barcode remains in a supporting credit panel.

Chromium measurements at widths 390/768/1440/1920 verified portrait center within 0.5 CSS px of viewport center. Portrait bounding box unchanged over a one-second interval at every size. Background type transform changes while running and animationPlayState is paused after the motion control. Screenshots visually reviewed for headroom, chin/neck crop and side-text overlap; face remains unobscured. No actionable P0/P1/P2 findings.

Existing regression checks pass: no overflow at 390/768/1440, mobile navigation, local project video playback, motion pause, capability selection and inquiry generation, preloader skip/replay/Escape, reduced-motion bypass and no video autoplay under reduced motion. No page errors or failed local responses. The red THINK / BUILD / JOPELO opening retains a 2.8-second limit and per-session storage with replay. Live deployment unverified.

## Portrait over headline and recognition motion (current)

final result: passed

Implemented UI scope: centered portrait, headline directly underneath, scrolling recognition names. Live website capture is explicitly blocked and is not included in this passing UI result.

Evidence inspected: `/tmp/streaming-hero.png` (1440×1000 centered portrait/heading), `/tmp/centered-headline-mobile.png` (390×1000 final portrait fade and copy), `/tmp/awards-motion.png` (desktop awards track, paused). Latest user instruction is the scoped visual target; previous full-hero composition was intentionally changed. A subtle lower portrait fade removes the hard shoulder cut while preserving face geometry. Typography, palette, barcode and content match the retained studio system.

Measured at 390/768/1440/1920: portrait midpoint differs by less than 0.5px from viewport midpoint; headline block begins below the image frame at each size. Awards transform changes over time; local awards button sets animationPlayState to paused. Duplicated track is aria-hidden; reduced motion hides the duplicate and removes animation. Global pause also stops the track. Existing menu/video/inquiry and reduced-motion regressions passed with no browser errors or local asset failures. No unresolved P0/P1/P2 UI finding.

Recording blocker: curl receives proxy CONNECT 403 for both sites; Chromium receives ERR_TUNNEL_CONNECTION_FAILED. Current runtime allowed hosts omit these sites although the saved draft includes them. No source capture or real website footage was produced; existing title treatments remain labelled. `scripts/record-projects.py` is prepared and syntax-checked only. After network settings apply, record real hero footage, inspect it and replace current title sequences in a separate validation pass.
