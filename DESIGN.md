---
name: Waysel07 Profile
description: A GitHub profile drawn as the title screen of a pixel fishing game, with every project logged as a Fischdex catch.
colors:
  dusk-sky-0: "#2b1e3f"
  dusk-sky-1: "#4a2550"
  dusk-sky-2: "#7a2f5a"
  dusk-sky-3: "#b8445a"
  dusk-sky-4: "#e8604a"
  dusk-sky-5: "#ff7a3d"
  midday-sky-0: "#6ec3f0"
  midday-sky-5: "#d6eff9"
  sun-gold: "#ffd36b"
  sun-amber: "#ffb347"
  midday-sun: "#fff2a8"
  dusk-sea: "#0f3d56"
  dusk-sea-rim: "#0f4d6b"
  midday-sea: "#155f80"
  midday-sea-rim: "#1a7aa0"
  sea-shine: "#3fb8c9"
  midday-shine: "#bfe9f7"
  water-tile-ripple-dusk: "#1a6a8a"
  water-tile-ripple-midday: "#3a9cc0"
  cream: "#f4ecd8"
  cream-deep: "#e6dcc0"
  ink: "#1b1430"
  lilac-label: "#c7b8e0"
  plum-label: "#4a3f63"
  frame-violet: "#6b5a9a"
  frame-khaki: "#b8a98a"
  dusk-orange: "#ff7a3d"
  rust: "#c4541a"
  goldfish: "#ff8a2a"
  dock-wood: "#5a3420"
  dock-wood-dark: "#3a2014"
  dock-wood-midday: "#8a5a34"
  bobber-red: "#ff3b4e"
typography:
  display:
    fontFamily: "Press Start 2P (rasterised to pixel paths)"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "Press Start 2P (rasterised to pixel paths)"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  title:
    fontFamily: "Press Start 2P (rasterised to pixel paths)"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0em"
  label:
    fontFamily: "Press Start 2P (rasterised to pixel paths)"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "0em"
rounded:
  none: "0px"
spacing:
  pixel: "4px"
  rule-gap: "8px"
  gutter: "44px"
  label-row: "34px"
  key-column: "168px"
components:
  dex-window-dusk:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    width: "900px"
  dex-window-midday:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "900px"
  play-button-dusk:
    backgroundColor: "{colors.dusk-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "60px"
  play-button-midday:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.cream}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "60px"
  sprite-box-dusk:
    backgroundColor: "{colors.dusk-sky-0}"
    size: "156px"
    rounded: "{rounded.none}"
  sprite-box-midday:
    backgroundColor: "{colors.cream-deep}"
    size: "156px"
    rounded: "{rounded.none}"
  water-tile-dusk:
    backgroundColor: "{colors.dusk-sea-rim}"
    size: "252px"
    rounded: "{rounded.none}"
  water-tile-midday:
    backgroundColor: "{colors.midday-sea-rim}"
    size: "252px"
    rounded: "{rounded.none}"
---

# Design System: Waysel07 Profile

## Overview

**Creative North Star: "The Title Screen"**

The profile is a game you have just switched on. The header is a 1200x500 title scene (the WAYSEL logotype, a sea, a dock with a rod, a goldfish swimming under a bobber that dips and pops a "!"), and below it each project is a numbered entry in the Fischdex, drawn as an RPG dialog window. Nothing is a web component pretending to be retro: every mark is an SVG rect path on a strict 4px game-pixel grid, rendered `crispEdges`, so the images stay sharp at any width GitHub gives them.

The world has two lighting states, not two themes. Dark mode is dusk (a banded, checker-dithered plum-to-orange sky, the sun half-set on the horizon, twinkling stars); light mode is midday (a pale blue sky, the sun high, no stars). The windows flip with it: dusk windows are ink panels with cream rules, midday windows are cream panels with ink rules. Density is that of a game menu: big lettering, short uppercase values, one idea per row.

Motion is game motion: every animation runs on `steps()` timing so things move in whole pixels or blink, never ease. All of it stops under `prefers-reduced-motion`, which freezes the bite moment (the "!" shown, the fish parked under the bobber).

**Key Characteristics:**
- One typeface, Press Start 2P, rasterised to pixel paths at integer scales; no live text inside the images.
- 4px game pixel as the unit of every coordinate, stroke, offset and animation step.
- Paired dusk / midday lighting states swapped through `<picture>` and `prefers-color-scheme`.
- Hand-authored sprites (16x9 goldfish; 14-wide project sprites) drawn from a fixed palette.
- Hard, stepped depth only: double pixel rules, 1-pixel lettering shadows, a 1-pixel button drop.
- Whole images are the links; no Markdown chrome beyond one intro paragraph and a credit line.

## Colors

A warm dusk palette (plum, coral, sun gold) set against a deep teal sea, with cream and a near-black violet ink as the two text materials; midday swaps the sky to pale blue and keeps the same ink and cream.

### Primary
- **Dusk Orange** (dusk-orange): the PLAY button face at dusk and the lowest dusk sky band; the colour of "go".
- **Rust** (rust): the PLAY button face and the catch number (NO. 001) at midday, where dusk orange would fail on cream; also the goldfish's dark outline.

### Secondary
- **Sun Gold** (sun-gold): the dusk sun disc, the "▸" arrow before PRESS START, the catch number at dusk, the goldfish's belly highlight.
- **Sun Amber** (sun-amber): the dusk sun's rim and its reflection dashes on the water.
- **Goldfish Orange** (goldfish): the goldfish body, the brand mark, and the fish on the fishfetch terminal sprite.

### Tertiary
- **Deep Teal Sea** (dusk-sea / midday-sea) with its horizon rim (dusk-sea-rim / midday-sea-rim): the lower 200px of the title scene and the plate behind PRESS START.
- **Sea Shine** (sea-shine / midday-shine): drifting shimmer dashes and the bite ring.
- **Water Tile** (dusk-sea-rim, midday-sea-rim, with water-tile-ripple tones): the framed water square behind the Fischen! goldfish.

### Neutral
- **Cream** (cream): dusk window rules and text, midday window panel, PRESS START lettering in both states, stars, fishing line at dusk.
- **Cream Deep** (cream-deep): the midday sprite plate.
- **Ink** (ink): dusk window panel, midday window rules and text, every sprite outline, lettering shadows.
- **Lilac Label / Plum Label** (lilac-label / plum-label): the key column of the label grid (NO., TYPE, WHERE...), dusk and midday respectively.
- **Frame Violet / Frame Khaki** (frame-violet / frame-khaki): the inner rule of the double frame, dusk and midday.
- **Dock Wood** (dock-wood, dock-wood-dark, dock-wood-midday): the dock planks, posts and rod.

Project sprites keep their own subject colours (the CyberHome TV's yellow #fcee0a, red #ff3b4e and cyan #41f0ff; the glass window's blues), so each catch reads as its own creature. Those live in the sprite colour maps in `assets/gen.py`, not in the shared palette.

### Named Rules
**The Two Lights Rule.** Every asset ships as a dusk and a midday file generated from the same drawing with a different `THEMES` entry. A colour that only works in one light gets a per-light token, never a one-off.

**The Ink Outline Rule.** Every sprite is outlined in ink (#1b1430), in both lights. Outlines are what make a sprite read on either panel.

## Typography

**Display Font:** Press Start 2P (SIL OFL 1.1, by CodeMan38), rasterised at its native 8px cell
**Body Font:** none inside the images; the README's single intro paragraph and credit line inherit GitHub's own text styles

**Character:** One blocky 8-bit face at every size, uppercase throughout, because a title screen has exactly one font. Hierarchy comes from integer scale and colour, never from weight or a second family.

### Hierarchy
- **Display** (8x, 64px cell, cream at dusk / ink at midday, with a 1-pixel ink or white drop): the WAYSEL logotype only.
- **Headline** (5x, 40px cell): the lead catch's name, FISCHEN!.
- **Title** (4x, 32px cell): the title subtitle (two lines, 44px apart), the PRESS START line, each secondary entry's name, and the PLAY label.
- **Label** (3x, 24px cell, 34px row step): the label grid; keys in lilac/plum, values in cream/ink, the NO. value in the accent.

### Named Rules
**The Integer Scale Rule.** Lettering is drawn only at whole multiples of the 8px font cell (3x, 4x, 5x, 8x), so every font pixel lands on the 4px grid. No fractional sizes, no smoothing.

**The Drawn Lettering Rule.** Text inside images is pixel paths generated by `text()` in `assets/gen.py`, never an SVG `<text>` element or a referenced font; GitHub serves SVGs as images and would drop the font.

## Layout

The README is a single column of full-width images (`width="100%"`) with one plain paragraph between the title scene and the Fischdex, and a `<sub>` credit line at the foot. The title scene is 1200x500 with the horizon at y=300; the Fischdex windows are 900 wide (the lead entry 420 tall, the others 296) so their 3x lettering survives phone widths when scaled down.

Inside a window: the outer rule sits 4px in, the inner rule 12px in, content starts at a 44px gutter. The sprite plate (156px square for entries, a 252px water tile for the lead) sits left; the name and label grid sit right, with a fixed 168px key column (seven 3x characters) so values align as a table. The PLAY button and the entry arrow sit right, 44px and 64px in from the edge.

### Named Rules
**The Game Pixel Rule.** Every coordinate, size, offset and animation translation is a multiple of 4px. Anything that would land between pixels is snapped with `// P * P`.

**The Label Grid Rule.** Project facts are always KEY / VALUE rows in a fixed key column, starting with NO. Facts are short uppercase phrases; a long value wraps to a second row with an empty key, never to a smaller size.

## Elevation & Depth

Depth is stepped and flat, as on an 8-bit screen. There are no blurs, gradients, glows or transparencies used as shadow. Lettering on the title scene carries a 1-pixel hard drop (one font pixel down and right, in ink at dusk, white at midday). The PLAY button carries a 1-pixel (4px) hard drop in the frame colour. Windows separate from the page by a double pixel rule rather than any shadow. The sky's depth comes from six flat bands joined by two rows of checker dither.

### Shadow Vocabulary
- **Lettering drop** (offset of one font pixel at the lettering's scale, solid ink or white): title-scene lettering only.
- **Button drop** (4px down and right, solid frame colour): the PLAY button only.

### Named Rules
**The Dither, Not Gradient Rule.** Tonal transitions are flat bands joined by a 4px checker dither. A smooth gradient breaks the world.

## Shapes

Everything is square. Corners are 0px everywhere; any roundness (the sun, the bobber, the goldfish) is built from stepped pixel runs, never from a radius or a curve. Frames are 4px rules; the fishing rod and line are diagonal stair-steps of 4px pixels. Sprites are drawn on small grids (the goldfish 16x9, project sprites 14 wide) and scaled by integers: 4x in the title scene, 8x in entries, 12x in the lead water tile.

## Components

### Buttons
- **Shape:** square corners (0px), 60px tall, padded 20px left of a 28px "▸" arrow sprite.
- **Primary (PLAY):** dusk orange face with ink label at dusk; rust face with cream label at midday; 4x lettering. Only the lead catch has one.
- **Drop:** a 4px hard drop in the frame colour, so the button sits one pixel above the panel.
- **States:** none; the whole image is the link, so the button signals intent rather than reacting.

### Cards / Containers (Fischdex window)
- **Corner Style:** square (0px).
- **Background:** ink at dusk, cream at midday.
- **Border:** an RPG double rule: outer 4px rule in cream/ink, 4px gap of panel, inner 4px rule in frame violet/khaki. Outside the outer rule is transparent so the page shows through.
- **Internal Padding:** 44px gutter; name at the top, label grid below.

### Navigation (entry arrow)
A 4x "▸" arrow sprite at the right edge of every secondary entry, vertically centred, in the ink/cream text colour. It says "this goes somewhere"; the link itself wraps the whole image.

### Title Screen (signature)
The 1200x500 scene: banded dithered sky, sun (half-set at dusk, high at midday), a 200px dock with posts and a stair-step rod, a curved stair-step line to a bobber, the goldfish swimming beneath, and the WAYSEL logotype with a two-line subtitle top-left. A blinking "▸ PRESS START · FISCH.ING" sits centred on a sea-coloured plate at y=432. One 14s loop drives the swim, the bobber's nibbles, the dip, the "!" and the bite ring together.

### Sprite Plate (signature)
A square, borderless plate (156px, dusk sky-0 or cream-deep) holding the catch's sprite at 8x, centred. The lead catch instead gets a 252px water tile with drifting ripple dashes and its own 4px rule, with the goldfish at 12x.

## Do's and Don'ts

### Do:
- **Do** generate every asset from `assets/gen.py`, once per light, and regenerate both lights for any change.
- **Do** put every coordinate on the 4px game-pixel grid and draw lettering at integer multiples of the 8px font cell.
- **Do** log a new project as the next Fischdex number with a 14-wide ink-outlined sprite and NO. / TYPE / WHERE / LANG / DOES rows.
- **Do** animate with `steps()` timing in whole pixels, and stop every animation under `prefers-reduced-motion`.
- **Do** keep the goldfish as the mark: it swims in the title scene and owns the lead catch.
- **Do** write an `aria-label` and a matching `<img alt>` that says what the image says.

### Don't:
- **Don't** use rounded corners, blurs, soft shadows, glows, glass or smooth gradients anywhere in the images.
- **Don't** use emoji or icon-font glyphs; every symbol (the arrow, the "!", the bobber) is a drawn sprite.
- **Don't** set text in a second typeface or as live SVG `<text>`.
- **Don't** add badge walls, stats widgets, typing banners or invented counts; the Fischdex is the project list.
- **Don't** link a private repo; the lead catch links the live site.
