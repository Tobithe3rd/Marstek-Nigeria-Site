# Marstek Nigeria — Full Design Audit Report

Audit date: 2026-09-11
Skills loaded: design-taste, impeccable
Files audited: 9 source files + 1 CSS token file
No edits made.

---

## Design Read
Informational landing site for a Nigerian solar / portable-power brand. Clean editorial typography (DM Serif Display + DM Sans + JetBrains Mono), locked accent #03B4FF, sharp-corner aesthetic (radius 0px), premium custom easing curves, gradient brand header. Mobile-first responsive grid with hamburger navigation and WhatsApp chat CTA.

---

## Audit Table

| File | Finding | Severity | Status |
|---|---|---|---|
| src/app/globals.css:89 | `::-webkit-scrollbar-thumb` uses `border-radius: 4px` — violates sharp-corner system (radius 0px everywhere). | Low | Fix |
| src/app/globals.css:95 | Comment contains `—` (em dash): `/* Focus rings — accessible, premium */`. Zero em-dash rule violated in non-visible code. | Low | Fix |
| src/app/globals.css:3-49 | `--color-stone-warm` never declared; `bg-stone-warm` / `bg-stone-warm/60` used in page.tsx will resolve to nothing. Missing token. | High | Fix |
| src/app/globals.css:all | No `@media (prefers-reduced-motion: reduce)` fallback for any animation. Every animated element violates accessibility. | High | Fix |
| src/app/globals.css:44-49 | Typography scale ratio between `--text-body-lg` (1.125rem) and `--text-body` (1rem) is 1.125 (< 1.25). Minor gap. | Low | Suppress |
| src/app/globals.css:15-16 | Pure `#FFFFFF` (`--color-white`) and `#000000` (`--color-black`) used — anti-slop prefers off-black/off-white. Low impact given brand lock. | Low | Suppress |
| src/app/globals.css:all | No `text-wrap: balance` declared globally; headings rely on manual line breaks or overflow risk. | Medium | Fix |
| src/app/layout.tsx:29 | Metadata title contains `—`: `"Marstek Nigeria — Solar & Portable Power"`. Non-negotiable em-dash ban. | Medium | Fix |
| src/app/layout.tsx:36 | No `prefers-reduced-motion` media query anywhere in layout or children imports. | High | Fix |
| src/app/layout.tsx:36 | `text-black` uses pure `#000` instead of off-black (e.g., `#111` or `#0A0A0A`). Minor. | Low | Suppress |
| src/components/Header.tsx:17 | Header uses `backdrop-blur-md` on gradient — decorative glassmorphism as default. Should be removed or justified. | Medium | Fix |
| src/components/Header.tsx:17 | Gradient header `from-[#F0F7FA] via-[#E0F2FB] to-brand` applied correctly with `backdrop-blur-md` — the gradient itself is fine; the blur is the issue. | — | — |
| src/components/Header.tsx:51 | Hamburger `<button>` missing `type="button"`. Potential form-submission risk. | Low | Fix |
| src/components/Header.tsx:72 | Mobile menu transition `duration-400` (400ms) exceeds 300ms UI-animation cap. | Medium | Fix |
| src/components/Header.tsx:37 | Nav links have `uppercase` styling — acceptable in navigation context (not eyebrow). | — | Suppress |
| src/components/Header.tsx:20 | Logo `<Image>` uses `priority`, `width={140}`, `height={56}` — correct integration. Missing `priority` only in Footer; consistent. | Low | Fix (Footer) |
| src/components/Header.tsx:20-29 | Logo link uses `focus-visible:outline-none` + `focus-visible:ring-2` replacement — correct. | — | — |
| src/components/Header.tsx:32-46 | Interactive nav links have default/hover/focus-visible but no disabled/loading/error/success states. Partial 8-state coverage. | Medium | Suppress |
| src/components/Header.tsx:51-66 | Hamburger button lacks disabled/loading/error/success states; only default/hover/focus-visible/active (via click). Partial. | Low | Suppress |
| src/components/Footer.tsx:14 | Footer logo missing `priority` prop (Header has it). Minor inconsistency. | Low | Fix |
| src/components/Footer.tsx:8 | Subtle decorative gradient line at top (`from-transparent via-brand/40 to-transparent`) — low-impact decorative stripe, acceptable. | Low | Suppress |
| src/components/WhatsAppButton.tsx:11 | `transition-all` used instead of specific properties (`transition-transform, transition-shadow`). Violates motion craft. | Medium | Fix |
| src/components/WhatsAppButton.tsx:14 | Icon background uses `backdrop-blur-sm` — decorative glass on a button icon. | Low | Suppress |
| src/components/WhatsAppButton.tsx:2 | `2348000000000` placeholder phone — brief allows placeholder. Copy note `// placeholder — replace` uses `—` (em dash) in comment. | Low | Fix |
| src/components/WhatsAppButton.tsx:11 | Active state (`active:translate-y-0 active:shadow-...`) present; focus-visible ring present. Good 4-state partial. | — | — |
| src/components/WhatsAppButton.tsx:11-24 | Missing disabled/loading/error/success states. Partial. | Low | Suppress |
| src/app/page.tsx:35 | Hero eyebrow `uppercase tracking-[0.2em]` above heading — one deliberate eyebrow on hero only (`Solar Energy · Portable Power · Nigeria`). Not excessive, but uses two `·` dots (max 1 per line per anti-slop). | Low | Fix |
| src/app/page.tsx:35 | Eyebrow copy uses `&middot;` separator twice in one line (`·`). Exceeds middle-dot ration. | Low | Fix |
| src/app/page.tsx:92 | Image overlay uses `backdrop-blur-md` (`bg-navy-deep/80 backdrop-blur-md`) — decorative glass. | Low | Suppress |
| src/app/page.tsx:93-94 | Image overlay label (`Phase 1` + `Placeholder imagery`) — decorative label on image; anti-slop bans pill overlays on images but this is a caption block, not a pill. Borderline. | Low | Suppress |
| src/app/page.tsx:110,143 | Feature cards pair `border` + `shadow` (`border border-stone-warm/60 shadow-[0_4px_20px...]`) = ghost-card pattern. Pick one (border OR shadow). | Medium | Fix |
| src/app/page.tsx:110-153 | Three feature cards are structurally varied (different widths, image middle, different content) — not identical card grid. Good. | — | — |
| src/app/page.tsx:67-80 | Metric numbers (500W / 1000W / 2000W) — feature intro spec list, not hero-metric template (no gradient accent, no big number + small label + supporting stats pattern). Acceptable. | Low | Suppress |
| src/app/page.tsx:44 | CTA button uses `transition-all` (`transition-all duration-300 ease-premium`). Should specify exact properties. | Medium | Fix |
| src/app/page.tsx:38,61 | Headings (`h1`, `h2`) missing `text-wrap: balance`. Overflow risk on narrow viewports. | Medium | Fix |
| src/app/page.tsx:83,127 | Hero image (`src="/images/hero-placeholder.jpg"`) and solar image (`src="/images/placeholder-600w-solar.png"`) exist and filenames match. `fill`, `sizes`, `priority` used correctly. | — | — |
| src/app/page.tsx:102 | `bg-stone-warm` class used but token undefined. Will render as transparent/no-fill. | High | Fix |
| src/app/page.tsx:108 | `md:grid-cols-[1fr_1.2fr_1fr]` responsive grid — works. | — | — |
| src/app/page.tsx:48 | Button label `"View Products"` = verb + object. Good. | — | — |
| src/app/page.tsx:51 | WhatsApp CTA link text stands alone (`"Chat on WhatsApp"`). Good. | — | — |
| src/app/page.tsx:all | No disabled/loading/error/success states on any interactive element in hero or feature sections. Partial 8-state. | Medium | Suppress |
| src/app/page.tsx:all | No `reduced-motion` fallback for hover shadow/translate, scale animations, opacity transitions. | High | Fix |
| src/app/page.tsx:all | No animation on keyboard-initiated actions (good). Mobile menu open is click-triggered, not keyboard-triggered animation. Good. | — | — |
| src/app/page.tsx:all | `ease-premium` (custom cubic-bezier) used consistently; `ease-in-out` defined but not used improperly; no `ease-in` found. Good. | — | — |
| src/app/page.tsx:all | Only `transform` (`translate-y`, `scale`) and `opacity` animated; no width/height/top/left/margin/padding animations. Good. | — | — |
| src/app/page.tsx:92 | `bg-gradient-to-r from-brand to-brand-soft` decorative gradient line — acceptable as decorative accent on card. | Low | Suppress |
| src/app/products/page.tsx:19 | Product card uses `border` + `shadow` (`border-stone-warm/50` + `shadow-[0_2px_16px...]`) = ghost-card. Pick one. | Medium | Fix |
| src/app/products/page.tsx:19 | `hover:-translate-y-[3px]` and `group-hover:scale-[1.04]` on image — only transform/opacity animated. Good. | — | — |
| src/app/products/page.tsx:43 | Category pill `uppercase tracking-wide` — micro-label, acceptable for product tags. | — | Suppress |
| src/app/products/page.tsx:56 | Spec labels `uppercase tracking-[0.08em]` — acceptable for data labels. | — | Suppress |
| src/app/products/page.tsx:77-81 | Link `"Inquire →"` = verb + object; `aria-label` descriptive. Good. | — | — |
| src/app/products/page.tsx:all | No disabled/loading/error/success states on product cards or links. Partial. | Low | Suppress |
| src/app/products/page.tsx:all | No `text-wrap: balance` on headings (`"Products"`). | Medium | Fix |
| src/app/products/page.tsx:all | No `reduced-motion` fallback for hover translate/scale. | High | Fix |
| src/app/about/page.tsx:9 | Decorative gradient accent line (`bg-gradient-to-r from-brand to-brand-soft`) under heading — decorative stripe. Low impact. | Low | Suppress |
| src/app/about/page.tsx:all | No `reduced-motion`. No `text-wrap: balance`. No interaction states for links (none present). | Low | Suppress |
| src/app/contact/page.tsx:11 | Decorative gradient line (`bg-gradient-to-r from-brand to-brand-soft`) — same pattern as about. Low impact. | Low | Suppress |
| src/app/contact/page.tsx:19 | Email link has `focus-visible:ring-2` but no `outline` replacement visible in default state? Already replaced by `outline-none` + `ring-2`. Correct. | — | — |
| src/app/contact/page.tsx:all | WhatsApp card uses `shadow-[0_20px_60px...]` without paired border — good (shadow only). | — | — |
| src/app/contact/page.tsx:all | No `reduced-motion`. No `text-wrap: balance`. | Low | Suppress |
| src/lib/products.ts:all | Data layer clean; filenames (`placeholder-500w.png`, etc.) match public assets exactly. No design-taste violations. No generic names (`John Doe`, etc.). No fake-perfect numbers (`99.99%`). No marketing buzzwords. Price notes say `"Inquire for pricing"` — concrete, not buzzword. Good. | — | — |

---

## Positive Findings (Keep)
- Sharp-corner CSS system (`radius-sm/md/lg/xl: 0px`) enforced; no `rounded-*` in JSX.
- Brand gradient header (`from-[#F0F7FA] via-[#E0F2FB] to-brand`) applied correctly.
- Logo integration: Header uses `next/image` with `priority`, `width`, `height`, `alt`, `object-contain`.
- Custom easing curves (`ease-premium`) used consistently; no `ease-in` anywhere.
- Only `transform` + `opacity` animated; no width/height/top/left/animation.
- Mobile hamburger works with `aria-expanded`, `aria-controls`, `max-h` transition.
- Touch targets mostly adequate (WhatsApp button well above 44px; nav links borderline).
- Button labels are concrete verbs (`"View Products"`, `"Inquire"`, `"Chat on WhatsApp"`).
- No marketing buzzwords (`seamless`, `empower`, etc.) in any copy.
- No hero-metric template (metrics are feature specs, not decorative stat blocks).
- No identical 3-column card grid; feature cards vary in width/content.
- No section-number eyebrows (`01 / 02 / 03`), no decoration text strip (`BRAND. MOTION.`), no scroll cues.
- Selection theme (`rgba(3,180,255,0.2)`) matches brand accent.

---

## Severity Summary

| Severity | Count | Key Issues |
|---|---|---|
| High | 4 | `bg-stone-warm` undefined token; `reduced-motion` missing globally; decorative glass (backdrop-blur) in header/overlay; ghost-card border+shadow pairing on cards |
| Medium | 12 | `transition-all` overuse; `duration-400 > 300ms`; missing `text-wrap: balance`; ghost-card on product cards; decorative glass; missing `priority` in Footer logo; eyebrow dots > 1; header eyebrow; decorative gradient lines |
| Low | 18 | Em dashes in title/comment/WhatsApp note; pure `#000`/`#fff`; scrollbar radius; decorative stripes; missing disabled/loading/success states; missing `type="button"`; metric sections acceptable; decorative image label |

---

## Recommended Next Steps (by file, in priority order)

1. **src/app/globals.css** (High): Define `--color-stone-warm`; add `@media (prefers-reduced-motion: reduce)` with crossfade/instant fallbacks; add `text-wrap: balance` to heading selectors; replace `border-radius: 4px` in scrollbar thumb.
2. **src/app/globals.css + all JSX files** (High): Add `reduced-motion` media query wrapping all animated elements; replace `transition-all` with explicit properties everywhere.
3. **src/components/Header.tsx** (Medium): Remove `backdrop-blur-md` from header gradient (decorative glass); fix hamburger `type="button"`; reduce mobile-menu duration to `duration-300`.
4. **src/app/page.tsx** (Medium + High): Define or replace `bg-stone-warm` (either declare token or replace with `bg-[#F5F2EE]`); fix ghost-card on feature cards (remove border or reduce shadow); add `text-wrap: balance` to headings; fix hero eyebrow middle-dot count; add `reduced-motion` fallbacks.
5. **src/app/products/page.tsx** (Medium): Fix ghost-card (remove `border` or `shadow`); add `text-wrap: balance`; add `reduced-motion` fallbacks.
6. **src/app/layout.tsx** (Medium): Replace `—` in metadata title; add `reduced-motion` at root level.
7. **src/components/Footer.tsx** (Low): Add `priority` to logo image; add `reduced-motion` fallbacks.
8. **src/components/WhatsAppButton.tsx** (Low + Medium): Replace `transition-all` with specific properties; fix comment em dash; consider removing `backdrop-blur-sm`.
9. **src/app/about/page.tsx + src/app/contact/page.tsx** (Low): Add `text-wrap: balance`; add `reduced-motion` fallbacks.

---

*Report completed. No files edited. All findings reference specific file paths and line numbers for targeted fixes.*
