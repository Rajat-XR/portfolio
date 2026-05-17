# Design System Inspired by Open Design

## 1. Visual Theme & Atmosphere

Open Design's visual language embodies a sophisticated, intellectually-driven aesthetic that bridges classical design heritage with contemporary AI-driven creativity. The system embraces a gallery-like minimalism with warm, earthy undertones, featuring carefully curated collage compositions that blend architectural elements, sculptural forms, and natural imagery. There's a deliberate tension between precision and organic expression—rigorous geometric grids coexist with fluid color overlays and painterly textures. The mood is contemplative yet forward-thinking, suggesting that intelligence and taste can coexist with code. The design celebrates negative space, typography as art, and a restrained color palette that feels editorial and purposeful rather than decorative.

**Key Characteristics**
- Minimalist gallery aesthetic with layered compositional depth
- Warm, earthy palette anchored by deep charcoal and coral accents
- Typography-forward hierarchy mixing bold sans-serif with refined serif italics
- Geometric precision balanced against organic, textured imagery
- Thoughtful use of whitespace and breathing room in layouts
- Editorial sensibility with emphasis on content over ornamentation
- Monochromatic base with strategic warm accent colors

## 2. Color Palette & Roles

### Primary
- **Deep Charcoal** (`#15140F`): Primary text, headings, UI elements, and dominant interactive states. Establishes the foundation for readable, high-contrast content.
- **Coral** (`#ED6F5C`): Primary call-to-action buttons, accent highlights, and emphasis elements that draw attention and create visual momentum.

### Accent Colors
- **Warm Gold** (`#E9B94A`): Warning states, tertiary accents, and supportive emphasis. Used sparingly to signal information hierarchy or secondary actions.
- **Warm Taupe** (`#8B8676`): Supporting accent for secondary typography, dividers, and contextual metadata.

### Interactive
- **Charcoal Secondary** (`#5A5448`): Secondary button states, hover overlays, and reduced-emphasis interactive elements.
- **Dark Charcoal** (`#2A2620`): Deepest text for maximum contrast on light backgrounds; reserved for critical UI or hover/focus states.

### Neutral Scale
- **Cream** (`#F7F1DE`): Primary background surface, light content areas, and elevated cards.
- **Soft Beige** (`#EFE7D2`): Tertiary background, subtle tonal separation.
- **Pale Sand** (`#ECE4CF`): Minimal use; very subtle background differentiation.
- **Off-White** (`#FFFFFF`): Pure white reserved for critical contrast or overlay elements.

### Surface & Borders
- **Cream-Light** (`#F7F1DE`): Card and container backgrounds with subtle elevation.
- **Charcoal Transparent** (`rgba(21, 20, 15, 0.2)`): Subtle borders and dividing lines maintaining visual hierarchy without harshness.
- **Charcoal Inset** (`rgba(21, 20, 15, 0.06)`): Inset shadow detail for depth and refined elevation treatment.

### Shadow Colors
- **Charcoal Shadow** (`rgba(21, 20, 15, 0.18)`): Primary shadow for cards and elevated components, providing depth and visual separation.
- **Coral Glow** (`rgb(237, 111, 92)`): Warm shadow beneath primary action buttons, creating subtle warmth and forward momentum.

## 3. Typography Rules

### Font Family
**Primary: Inter Tight**
Fallback: `Inter Tight, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

**Secondary: Inter**
Fallback: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

**Display/Editorial: Playfair Display**
Fallback: `Playfair Display, Georgia, serif`

**Code: JetBrains Mono**
Fallback: `JetBrains Mono, Menlo, "Courier New", monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|---|---|
| Display / Hero | Inter Tight | 77.76px | 800 | 77.76px | 0px | Maximum impact; use for page titles and hero statements |
| H1 / Primary Heading | Inter Tight | 72px | 800 | 72px | 0px | Primary section headings; bold and commanding |
| H2 / Secondary Heading | Inter Tight | 48px | 800 | 48px | 0px | Subsection and major content divisions |
| H3 / Tertiary Heading | Inter Tight | 22px | 700 | 23.1px | 0px | Card titles and moderate-emphasis headers |
| H4 / Minor Heading | Inter Tight | 18px | 700 | 27.9px | 0px | Subheadings and form labels |
| H5 / Label | Inter Tight | 11px | 700 | 17.05px | 0px | Metadata labels and badge text |
| Body / Paragraph | Inter | 16px | 400 | 24.8px | 0px | Primary reading text; optimized for legibility |
| Button Text | Inter Tight | 13px | 400 | normal | 0px | Action labels; slightly smaller for compact buttons |
| Button Large | Inter Tight | 14px | 500 | 21.7px | 0px | Primary CTA buttons; elevated prominence |
| Caption | Inter Tight | 10px | 600 | 15.5px | 0px | Supplementary metadata and timestamps |
| Link | Inter Tight | 10.5px | 400 | 16.275px | 0px | Inline links and navigation secondary text |
| Code Block | JetBrains Mono | 14px | 400 | 21.7px | 0px | Technical documentation and code snippets |
| Small / Fine Print | Inter Tight | 10px | 400 | 15.5px | 0px | Footer and minor descriptive text |

### Principles
- **Weight Contrast:** Headings use 700–800 weight for authority; body text remains 400 for optimal readability.
- **Scale Progression:** Each level increases by ~1.2–1.4x, creating clear visual hierarchy without jarring jumps.
- **Line Height Balance:** Generous line heights (1.1–1.55x font size) ensure breathing room and reduce cognitive load, especially for body text.
- **Serif Accents:** Display italics in Playfair Display for editorial moments; keep system copy in Inter Tight for clarity.
- **Code Legibility:** Monospace for technical content maintains distinction and scannability.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#ED6F5C`
- Text Color: `#FFFFFF`
- Font: Inter Tight, 14px, weight 500
- Padding: `14px 22px`
- Border Radius: `999px`
- Border: `1px solid rgba(0, 0, 0, 0)` (none)
- Box Shadow: `#ED6F5C 0px 14px 26px -16px`
- Height: `51.69px`
- Line Height: `21.7px`
- Hover State: Darken background to `#D95A46`; increase shadow to `0px 18px 32px -16px`
- Active State: Reduce shadow; background to `#C84A38`

**Secondary Button (Ghost)**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#15140F`
- Font: Inter Tight, 14px, weight 500
- Padding: `14px 22px`
- Border Radius: `999px`
- Border: `1px solid rgba(21, 20, 15, 0.2)`
- Box Shadow: `none`
- Height: `51.69px`
- Line Height: `21.7px`
- Hover State: Background shifts to `rgba(21, 20, 15, 0.04)`; border to `rgba(21, 20, 15, 0.35)`
- Active State: Background to `rgba(21, 20, 15, 0.08)`

**Tertiary Button (Minimal)**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#2A2620`
- Font: Inter Tight, 13px, weight 400
- Padding: `9px 18px`
- Border Radius: `999px`
- Border: `1px solid rgba(21, 20, 15, 0.16)`
- Box Shadow: `none`
- Height: `36px`
- Line Height: `normal`
- Hover State: Border to `rgba(21, 20, 15, 0.3)`; background to `rgba(21, 20, 15, 0.03)`

**Small Primary Button**
- Background: `#ED6F5C`
- Text Color: `#FFFFFF`
- Font: Inter Tight, 13px, weight 400
- Padding: `9px 18px`
- Border Radius: `999px`
- Border: `1px solid #ED6F5C`
- Box Shadow: `none`
- Height: `36px`
- Line Height: `normal`
- Hover State: Background to `#D95A46`

### Cards & Containers

**Elevated Card**
- Background: `#F7F1DE`
- Text Color: `#15140F`
- Font: Inter, 16px, weight 400
- Padding: `28px 26px 32px 26px`
- Border Radius: `18px`
- Border: `none`
- Box Shadow: `rgba(21, 20, 15, 0.18) 0px 30px 60px -30px, rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset`
- Line Height: `24.8px`
- Hover State: Deepen shadow to `rgba(21, 20, 15, 0.25) 0px 35px 70px -28px`

**Flat Container / Section**
- Background: `rgba(0, 0, 0, 0)` or `#FFFFFF`
- Text Color: `#15140F`
- Font: Inter, 16px, weight 400
- Padding: `0px` (no internal padding; spacing managed by layout)
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Line Height: `24.8px`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#15140F`
- Font: Inter, 16px, weight 400
- Padding: `12px 14px`
- Border Radius: `8px`
- Border: `1px solid rgba(21, 20, 15, 0.15)`
- Box Shadow: `rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset`
- Focus State: Border to `#ED6F5C`; box shadow to `#ED6F5C 0px 0px 0px 2px`
- Placeholder Color: `rgba(21, 20, 15, 0.4)`

**Form Label**
- Font: Inter Tight, 11px, weight 700
- Color: `#2A2620`
- Text Transform: uppercase
- Line Height: `17.05px`
- Margin Bottom: `8px`

### Navigation

**Main Navigation**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `#15140F`
- Font: Inter, 16px, weight 400
- Padding: `0px` (no padding; spacing via flex gap)
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Line Height: `24.8px`
- Link Spacing: `24px` gap between items
- Active Link State: Text color to `#ED6F5C`; underline `2px solid #ED6F5C`
- Hover State: Color to `#ED6F5C`; opacity 0.8

**Secondary Navigation Link**
- Font: Inter Tight, 10.5px, weight 400
- Color: `#8B8676`
- Line Height: `16.275px`
- Text Transform: uppercase
- Hover State: Color to `#15140F`

### Badges & Labels

**Default Badge**
- Background: `#F7F1DE`
- Text Color: `#15140F`
- Font: Inter Tight, 11px, weight 700
- Padding: `6px 12px`
- Border Radius: `4px`
- Border: `1px solid rgba(21, 20, 15, 0.1)`
- Box Shadow: `none`
- Line Height: `17.05px`

**Accent Badge**
- Background: `rgba(237, 111, 92, 0.12)`
- Text Color: `#ED6F5C`
- Font: Inter Tight, 11px, weight 700
- Padding: `6px 12px`
- Border Radius: `4px`
- Border: `1px solid rgba(237, 111, 92, 0.3)`

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px`

**Spacing Scale:**
- `8px` — micro spacing (tight gaps between elements)
- `12px` — small padding and inline spacing
- `16px` — standard gap between components
- `20px` — moderate section spacing
- `24px` — generous component spacing and card padding
- `28px` — card vertical padding
- `32px` — major section gaps
- `36px` — large section separation
- `40px` — hero and layout padding
- `48px` — major layout divisions
- `52px` — extended vertical spacing
- `56px` — maximum section margins

**Usage Context:**
- Button padding: `12px–22px` (internal)
- Card padding: `26px–32px` (external and internal)
- Section margins: `40px–56px` (vertical separation)
- Gap between navigation items: `24px`
- Micro-interactions: `8px`

### Grid & Container

**Max Width:** `1440px` (standard container limit for desktop)

**Column Strategy:** 
- Desktop: 12-column grid with `24px` gutter
- Tablet: 8-column grid with `20px` gutter
- Mobile: 4-column grid with `16px` gutter

**Section Patterns:**
- Hero sections: Full-width with `40px–56px` vertical padding
- Content sections: Centered container with `48px` top/bottom margin
- Card grids: 2–3 columns on desktop, 1–2 on tablet, 1 on mobile
- Sidebar layouts: 70/30 or 60/40 splits with `32px` gap

### Whitespace Philosophy

Open Design employs generous whitespace to create breathing room and emphasize content quality over quantity. Negative space is treated as an active design element—it clarifies relationships between components, guides visual hierarchy, and reduces cognitive load. Margins and padding follow the established `8px` scale rigorously, creating rhythm and predictability. Large Hero sections use expansive whitespace to establish authority and contemplative mood. Section transitions are marked by substantial vertical gaps (48–56px) rather than visual dividers, allowing content to breathe and inviting unhurried reading.

### Border Radius Scale

- `4px` — badges, small UI elements
- `8px` — inputs, small cards, minor components
- `18px` — primary cards and containers
- `999px` — buttons (pill-shaped)
- `0px` — large sections and layout blocks

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (No Shadow) | No shadow; flat appearance | Background sections, body text, primary layouts |
| Level 1 (Subtle) | `rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset` | Input focus states, minimal elevation |
| Level 2 (Card) | `rgba(21, 20, 15, 0.18) 0px 30px 60px -30px, rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset` | Cards, contained components |
| Level 3 (Elevated) | `rgba(21, 20, 15, 0.25) 0px 35px 70px -28px` | Hovered cards, floating panels |
| Level 4 (Button Glow) | `#ED6F5C 0px 14px 26px -16px` | Primary action buttons |
| Level 5 (Button Hover) | `#ED6F5C 0px 18px 32px -16px` | Hovered primary buttons |

**Shadow Philosophy:**

Open Design uses soft, directional shadows created with large blur radii and negative vertical offsets, producing a gentle, diffused elevation effect rather than harsh drama. Shadows serve to separate foreground elements from background without screaming for attention. The inset shadows (0.06 opacity) add refined edge definition to cards and inputs, creating subtle interior depth. Warm-toned shadows on buttons (coral) reinforce the accent color strategy and create visual warmth around CTAs. Shadows increase subtly on hover to indicate interactivity without jarring transitions. Overall, elevation is used sparingly and deliberately—most components live on the same visual plane to maintain the minimalist, editorial aesthetic.

## 7. Do's and Don'ts

### Do

- **Prioritize typography scale.** Use the established hierarchy rigorously; never create intermediate sizes.
- **Embrace generous whitespace.** Let content breathe; margin and padding follow the `8px` scale without compromise.
- **Maintain color restraint.** Primary charcoal and coral carry the design; taupe and gold are accents only.
- **Use coral sparingly for CTAs.** Reserve `#ED6F5C` for primary actions; this ensures focus and prevents visual noise.
- **Layer soft, diffused shadows.** Elevate cards and buttons with the prescribed box-shadow values; avoid harsh or dark shadows.
- **Keep borders minimal.** Use subtle `rgba(21, 20, 15, 0.2)` borders on ghost buttons; avoid thick or colored borders on cards.
- **Combine weight and size for hierarchy.** Headings leverage both larger sizes and heavier weights (700–800) for clarity.
- **Use inset shadows for definition.** Cards and inputs benefit from the `0px 0px 0px 1px inset` shadow for refined edge definition.
- **Respect the grid.** All layouts align to 12-column (desktop), 8-column (tablet), or 4-column (mobile) grids with consistent gutters.
- **Match button pill style consistently.** All buttons use `border-radius: 999px` or `50%` for a cohesive, rounded aesthetic.

### Don't

- **Don't create custom font sizes outside the hierarchy table.** Intermediate sizes dilute clarity.
- **Don't overuse shadows.** Resist the urge to add shadows to every element; reserve elevation for cards, buttons, and floating components.
- **Don't mix border styles.** Avoid thick borders, dashed lines, or heavy outlines; keep borders at `1px` and subtle.
- **Don't apply multiple accent colors.** Coral is primary; gold and taupe are secondary and minimal. Resist rainbow color palettes.
- **Don't compress whitespace to fit content.** If content doesn't fit, redesign the layout; never sacrifice breathing room for density.
- **Don't force colored backgrounds on large sections.** Cream or off-white is sufficient; reserve saturated colors for accent only.
- **Don't neglect focus states.** All interactive elements must have clear `:focus` and `:active` states; use border color and shadow shifts.
- **Don't create small buttons without clear purpose.** Button hierarchy is large primary, medium secondary, and small tertiary—not arbitrary sizes.
- **Don't ignore line-height guidance.** Body text at 16px requires 24.8px line height; reducing this harms legibility.
- **Don't stack too many shadows.** Single, well-crafted shadows outperform multiple layers.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|--|
| Mobile | 320px–639px | 4-column grid; `16px` gutter; `28px` section margin; single-column layouts; `56px` hero padding |
| Tablet | 640px–1023px | 8-column grid; `20px` gutter; `36px` section margin; 2-column card grids; `40px` hero padding |
| Desktop | 1024px–1440px | 12-column grid; `24px` gutter; `48px` section margin; 2–3 column layouts; `56px` hero padding |
| Large Desktop | 1440px+ | Max container width `1440px` centered; extra margin on sides; unchanged typography |

### Touch Targets

- **Minimum Height:** `44px` for all interactive elements (buttons, links, inputs)
- **Minimum Width:** `44px` for icon buttons
- **Tap Spacing:** `8px` minimum gap between touch targets to prevent accidental activation
- **Hover Areas:** Desktop links and buttons expand slightly on hover (via shadow or opacity change) without requiring increased dimensions

### Collapsing Strategy

**Typography:**
- Heading sizes reduce by 15–20% on tablet, 25–30% on mobile
- Body text remains `16px` down to tablet; reduces to `15px` on mobile only if space is critical
- Small/caption text remains `10px–11px` across all breakpoints

**Spacing:**
- Section margins collapse from `56px` (desktop) → `40px` (tablet) → `28px` (mobile)
- Card padding reduces from `28px 26px 32px 26px` (desktop) → `20px 18px 24px 18px` (tablet) → `16px 14px 20px 14px` (mobile)
- Button padding remains `14px 22px` on desktop; reduces to `12px 16px` on mobile

**Layouts:**
- 3-column grids collapse to 2 columns on tablet, 1 column on mobile
- Sidebar layouts shift to stacked (full-width sections) on tablet and mobile
- Hero sections stack text-right/image arrangements vertically on mobile

**Navigation:**
- Horizontal navigation remains visible on desktop/tablet; collapses to hamburger menu on mobile
- Secondary navigation hides on mobile; accessible via toggle or scroll on tablet

**Images & Media:**
- All imagery is responsive (100% width within container) and lazy-loaded below the fold
- Hero imagery scales proportionally; maintains aspect ratio across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Coral (`#ED6F5C`)
- **Secondary CTA:** Ghost Button with Charcoal Border (`rgba(21, 20, 15, 0.2)`)
- **Heading Text:** Deep Charcoal (`#15140F`)
- **Body Text:** Deep Charcoal (`#15140F`)
- **Background / Surface:** Cream (`#F7F1DE`) or Off-White (`#FFFFFF`)
- **Secondary Text:** Warm Taupe (`#8B8676`)
- **Tertiary Accent:** Warm Gold (`#E9B94A`)
- **Borders (subtle):** Charcoal Transparent (`rgba(21, 20, 15, 0.2)`)
- **Card Shadow:** `rgba(21, 20, 15, 0.18) 0px 30px 60px -30px, rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset`
- **Button Shadow:** `#ED6F5C 0px 14px 26px -16px`

### Iteration Guide

1. **All buttons use pill styling:** `border-radius: 999px` or `50%` with consistent `14px 22px` padding (desktop) or `12px 16px` padding (mobile).

2. **Primary buttons are coral (`#ED6F5C`) with white text, 14px Inter Tight weight 500.** Secondary and tertiary buttons are transparent/ghost with charcoal text and subtle borders.

3. **Cards always have rounded corners (`18px`), cream background (`#F7F1DE`), and the dual-shadow treatment:** `rgba(21, 20, 15, 0.18) 0px 30px 60px -30px, rgba(21, 20, 15, 0.06) 0px 0px 0px 1px inset`.

4. **Typography hierarchy is rigid:** H1 = 72px weight 800, H2 = 48px weight 800, H3 = 22px weight 700, body = 16px weight 400, all with specific line heights from the table. Never interpolate intermediate sizes.

5. **Spacing always follows the 8px scale:** `8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 52px, 56px.` No arbitrary pixel values.

6. **Accent colors (gold, taupe) are minimal:** Use coral for primary CTAs only; taupe for secondary text and dividers; gold sparingly for warnings or tertiary emphasis.

7. **All links are 10.5px Inter Tight weight 400 in taupe (`#8B8676`) unless they are CTA links, which use coral with underline on hover.**

8. **Inputs and forms use 16px Inter body text, 12px padding, 8px border-radius, and subtle borders (`1px solid rgba(21, 20, 15, 0.15)`). On focus, shift border to coral and add a 2px coral glow.**

9. **Navigation is 16px Inter weight 400 with 24px gap between items. Active nav items are coral with underline. Secondary nav links are 10.5px taupe, uppercase.**

10. **Responsive breakpoints:** Mobile (320–639px) = 4 columns, Tablet (640–1023px) = 8 columns, Desktop (1024–1440px) = 12 columns. All layouts collapse gracefully; typography scales down 15–30% on smaller viewports; button/input sizes remain minimum `44px` height for touch compliance.

11. **Whitespace is generous and intentional:** Section margins `40px–56px` (desktop), `28px–40px` (mobile); card padding `28px 26px` (desktop), `16px 14px` (mobile). Content breathes; density is avoided.

12. **Shadows are soft and diffused:** Use only the prescribed shadow values; no sharp, hard shadows. Hover states increase shadow blur and offset slightly; focus states use colored outlines (coral for primary buttons/inputs).