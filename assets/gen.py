#!/usr/bin/env python3
"""Pixel-art assets for the Waysel07 profile README.

Usage: python3 gen.py <PressStart2P-Regular.ttf> [out_dir]

Every glyph and sprite is drawn as SVG rects on a strict pixel grid, so the
images need no fonts and stay crisp at any size. Lettering is Press Start 2P
(SIL OFL 1.1, by CodeMan38) rasterised at its native 8px size.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

FONT_PATH = sys.argv[1]
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else Path(__file__).parent)

# ---------------------------------------------------------------- font
_font = ImageFont.truetype(FONT_PATH, 8)
_glyphs = {}


def glyph(ch):
    if ch not in _glyphs:
        im = Image.new("1", (8, 10), 0)
        d = ImageDraw.Draw(im)
        d.fontmode = "1"
        d.text((0, 0), ch, font=_font, fill=1)
        _glyphs[ch] = [(x, y) for y in range(10) for x in range(8) if im.getpixel((x, y))]
    return _glyphs[ch]


def runs(pixels):
    """Merge pixel set into horizontal runs -> path data at unit scale."""
    rows = {}
    for x, y in pixels:
        rows.setdefault(y, set()).add(x)
    out = []
    for y, xs in rows.items():
        xs = sorted(xs)
        start = prev = xs[0]
        for x in xs[1:] + [None]:
            if x is not None and x == prev + 1:
                prev = x
                continue
            out.append((start, y, prev - start + 1))
            if x is not None:
                start = prev = x
    return out


def path_d(pixels, s, ox=0, oy=0):
    return "".join(f"M{ox+x*s} {oy+y*s}h{w*s}v{s}h-{w*s}z" for x, y, w in runs(pixels))


def text_pixels(txt):
    px = []
    for i, ch in enumerate(txt):
        px += [(x + i * 8, y) for x, y in glyph(ch)]
    return px


def text(txt, x, y, s, fill, shadow=None, extra=""):
    """Pixel text, top-left at (x, y), each font pixel = s units."""
    px = text_pixels(txt)
    out = ""
    if shadow:
        out += f'<path d="{path_d(px, s, x + s, y + s)}" fill="{shadow}"/>'
    out += f'<path d="{path_d(px, s, x, y)}" fill="{fill}"{extra}/>'
    return out


def text_w(txt, s):
    return len(txt) * 8 * s


# ---------------------------------------------------------------- sprites
def sprite(rows, cmap, s, ox=0, oy=0):
    by = {}
    for y, row in enumerate(rows):
        for x, c in enumerate(row):
            if c in cmap:
                by.setdefault(cmap[c], []).append((x, y))
    return "".join(f'<path d="{path_d(p, s, ox, oy)}" fill="{col}"/>' for col, p in by.items())


FISH = [  # faces right
    ".......DDDD.....",
    "D....DBBBBBDD...",
    "DD..DBBLLLBBBD..",
    "DBDDBBBLLLBBBEB.",
    "DBBBBBBBBBBBBBBD",
    "DBDDBBBBBBBBBBD.",
    "DD..DBBBBBBBBD..",
    "D....DBBBBBDD...",
    ".......DDDD.....",
]
FISH_C = {"D": "#c4541a", "B": "#ff8a2a", "L": "#ffd36b", "E": "#1b1430"}

BOBBER = [
    "..K..",
    ".KRK.",
    "KRRRK",
    "KWWWK",
    ".KWK.",
    "..K..",
]

TERMINAL = [  # fishfetch: a terminal with a fish on screen
    "KKKKKKKKKKKKKK",
    "KGGGGGGGGGGGGK",
    "KGSSSSSSSSSSGK",
    "KGSSSSSSSSSSGK",
    "KGSSO.OOOSSSGK",
    "KGSSOOOOOOSSGK",
    "KGSSO.OOOSSSGK",
    "KGSSSSSSSSSSGK",
    "KGSPSSSSSSSSGK",
    "KGGGGGGGGGGGGK",
    "KKKKKKKKKKKKKK",
    "....KKKKKK....",
]
TERMINAL_C = {"K": "#1b1430", "G": "#6b6f86", "S": "#10232e", "O": "#ff8a2a", "P": "#7cf2a0"}

TV = [  # cyberhome: a TV with a red/cyan HUD
    "  K       K   ",
    "   K     K    ",
    "    K   K     ",
    "KKKKKKKKKKKKKK",
    "KYYYYYYYYYYYYK",
    "KYRRRRRR.CCCYK",
    "KY.......C.CYK",
    "KYRRRR...CCCYK",
    "KY..........YK",
    "KYRRRRRRRRRRYK",
    "KYYYYYYYYYYYYK",
    "KKKKKKKKKKKKKK",
    "   KK    KK   ",
]
TV_C = {"K": "#1b1430", "Y": "#fcee0a", "R": "#ff3b4e", "C": "#41f0ff", ".": "#14101f"}

GLASS = [  # terminal-glass-glow: a see-through window with soft text
    "KKKKKKKKKKKKKK",
    "KRYGKKKKKKKKKK",
    "KKKKKKKKKKKKKK",
    "KAAAAABBBBBBBK",
    "KAWWWWAABBBBBK",
    "KAAAABBBBCCCCK",
    "KAWWWWWWBCCCCK",
    "KAAABBBBCCCCCK",
    "KAWWBBBCCCCCCK",
    "KABBBBCCCCCCCK",
    "KKKKKKKKKKKKKK",
]
GLASS_C = {"K": "#1b1430", "R": "#ff5c8a", "Y": "#ffd36b", "G": "#7cf2a0",
           "A": "#4a3a78", "B": "#5a6fb0", "C": "#6fb8d8", "W": "#f4ecd8"}

ARROW = ["X...", "XX..", "XXX.", "XXXX", "XXX.", "XX..", "X..."]
BANG = ["XX", "XX", "XX", "XX", "..", "XX"]

# ---------------------------------------------------------------- themes
THEMES = {
    "dark": dict(  # dusk
        sky=["#2b1e3f", "#4a2550", "#7a2f5a", "#b8445a", "#e8604a", "#ff7a3d"],
        sun="#ffd36b", sun2="#ffb347", sea="#0f3d56", sea2="#0f4d6b", shine="#3fb8c9",
        sunshine="#ffb347", title="#f4ecd8", title_sh="#1b1430", sub="#ffe6c4",
        dock="#5a3420", dock2="#3a2014", line="#f4ecd8", stars=True,
        panel="#1b1430", panel2="#2b1e3f", ink="#f4ecd8", ink2="#c7b8e0", frame="#f4ecd8",
        frame2="#6b5a9a", tab="#ff7a3d", tab_ink="#1b1430", accent="#ffd36b", cta="#ff7a3d", cta_ink="#1b1430",
        water_tile="#0f4d6b", water_tile2="#1a6a8a",
    ),
    "light": dict(  # midday
        sky=["#6ec3f0", "#7fcbf2", "#93d4f4", "#a8ddf6", "#bfe6f8", "#d6eff9"],
        sun="#fff2a8", sun2="#ffd36b", sea="#155f80", sea2="#1a7aa0", shine="#bfe9f7",
        sunshine="#fff2a8", title="#1b1430", title_sh="#ffffff", sub="#1b1430",
        dock="#8a5a34", dock2="#5a3420", line="#1b1430", stars=False,
        panel="#f4ecd8", panel2="#e6dcc0", ink="#1b1430", ink2="#4a3f63", frame="#1b1430",
        frame2="#b8a98a", tab="#155f80", tab_ink="#f4ecd8", accent="#c4541a", cta="#c4541a", cta_ink="#f4ecd8",
        water_tile="#1a7aa0", water_tile2="#3a9cc0",
    ),
}

STYLE = """<style>
.blink{animation:blink 1.2s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.tw{animation:tw 3s steps(1) infinite}
@keyframes tw{0%,60%{opacity:1}61%,80%{opacity:.25}}
.wave{animation:wave 2.4s steps(1) infinite}
@keyframes wave{50%{transform:translateX(8px)}}
.swim{animation:swim 14s steps(85) infinite;animation-delay:-5s}
@keyframes swim{from{transform:translateX(-80px)}to{transform:translateX(1280px)}}
.wig{animation:wig .6s steps(1) infinite}
@keyframes wig{50%{transform:translateY(4px)}}
.bob{animation:bob 14s steps(1) infinite;animation-delay:-5s}
@keyframes bob{0%{transform:translateY(0)}3%{transform:translateY(4px)}6%{transform:translateY(0)}9%{transform:translateY(4px)}12%{transform:translateY(0)}
 15%{transform:translateY(4px)}18%{transform:translateY(0)}21%{transform:translateY(4px)}24%{transform:translateY(0)}27%{transform:translateY(4px)}
 30%{transform:translateY(0)}33%{transform:translateY(4px)}36%{transform:translateY(0)}39%{transform:translateY(4px)}42%{transform:translateY(0)}
 45%{transform:translateY(4px)}48%{transform:translateY(0)}51%{transform:translateY(4px)}54%{transform:translateY(0)}
 57%{transform:translateY(16px)}66%{transform:translateY(0)}69%{transform:translateY(4px)}72%{transform:translateY(0)}75%{transform:translateY(4px)}
 78%{transform:translateY(0)}81%{transform:translateY(4px)}84%{transform:translateY(0)}87%{transform:translateY(4px)}90%{transform:translateY(0)}
 93%{transform:translateY(4px)}96%{transform:translateY(0)}}
.bang{opacity:0;animation:bang 14s steps(1) infinite;animation-delay:-5s}
@keyframes bang{0%,56%{opacity:0}57%,66%{opacity:1}67%{opacity:0}}
.ring{opacity:0;animation:ring 14s steps(1) infinite;animation-delay:-5s}
@keyframes ring{0%,56%{opacity:0}57%,62%{opacity:1}63%{opacity:0}}
@media (prefers-reduced-motion:reduce){.blink,.tw,.wave,.swim,.wig,.bob,.bang,.ring{animation:none}.bang{opacity:1}.swim{transform:translateX(700px)}}
</style>"""


def svg(w, h, label, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" '
            f'shape-rendering="crispEdges" role="img" aria-label="{label}">{STYLE}{body}</svg>')


def rect(x, y, w, h, fill, extra=""):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}"{extra}/>'


# ---------------------------------------------------------------- header
def header(t):
    W, H, P = 1200, 500, 4
    HZ = 300  # horizon
    b = []
    # sky: bands with a checker dither between them
    bands = t["sky"]
    bh = HZ // len(bands)
    for i, col in enumerate(bands):
        b.append(rect(0, i * bh, W, bh + 1, col))
    for i in range(1, len(bands)):
        y0 = i * bh - 2 * P
        cells = "".join(
            f"M{x} {y0 + r*P}h{P}v{P}h-{P}z"
            for r in range(2) for x in range((r % 2) * P, W, 2 * P)
        )
        b.append(f'<path d="{cells}" fill="{bands[i]}"/>')
    # stars
    if t["stars"]:
        for i, (x, y) in enumerate([(120, 40), (300, 20), (520, 56), (660, 28), (780, 64), (1040, 36), (1140, 80), (430, 96), (960, 104)]):
            cls = ' class="tw" style="animation-delay:-%ss"' % (i * 0.7)
            b.append(rect(x, y, P, P, "#f4ecd8", cls))
            if i % 3 == 0:
                b.append(f'<g{cls}>' + rect(x - P, y, P, P, "#c7b8e0") + rect(x + P, y, P, P, "#c7b8e0")
                         + rect(x, y - P, P, P, "#c7b8e0") + rect(x, y + P, P, P, "#c7b8e0") + "</g>")
    # sun: pixel disc, half-set at the horizon (dusk) or up high (day)
    cx, cy, r = (880, HZ, 72) if t["stars"] else (880, 120, 48)
    sun = []
    for y in range(cy - r, cy + r, P):
        for x in range(cx - r, cx + r, P):
            if (x + P / 2 - cx) ** 2 + (y + P / 2 - cy) ** 2 <= r * r and y < HZ:
                sun.append((x // P, y // P))
    rim = [(x, y) for x, y in sun if ((x * P + 2 - cx) ** 2 + (y * P + 2 - cy) ** 2) > (r - 2 * P) ** 2]
    b.append(f'<path d="{path_d(sun, P)}" fill="{t["sun"]}"/>')
    b.append(f'<path d="{path_d(rim, P)}" fill="{t["sun2"]}"/>')
    # sea
    b.append(rect(0, HZ, W, H - HZ, t["sea"]))
    b.append(rect(0, HZ, W, 3 * P, t["sea2"]))
    # sun reflection + shimmer dashes
    refl, shim = [], []
    for k, y in enumerate(range(HZ + 4 * P, H, 4 * P)):
        spread = max(8, 48 - k * 2) if t["stars"] else 20
        x0 = cx - spread * P // 2 + (k % 2) * 2 * P
        for x in range(x0, cx + spread * P // 2, 6 * P):
            refl.append(f"M{x} {y}h{3*P}v{P}h-{3*P}z")
    for k, y in enumerate(range(HZ + 6 * P, H, 7 * P)):
        for x in range((k * 13) % 50 * P, W, 37 * P):
            shim.append(f"M{x} {y}h{4*P}v{P}h-{4*P}z")
    b.append(f'<path class="wave" d="{"".join(refl)}" fill="{t["sunshine"]}" opacity=".85"/>')
    b.append(f'<path class="wave" style="animation-delay:-1.2s" d="{"".join(shim)}" fill="{t["shine"]}" opacity=".7"/>')
    # dock on the right with a rod
    dock_y = HZ - 2 * P
    b.append(rect(1000, dock_y, 200, 3 * P, t["dock"]))
    for x in range(1000, 1200, 10 * P):
        b.append(rect(x, dock_y, P, 3 * P, t["dock2"]))
    for x in (1012, 1100, 1188):
        b.append(rect(x, dock_y + 3 * P, 3 * P, 12 * P, t["dock2"]))
    # rod: diagonal pixel line from the dock up and out over the water
    rod = [(1040 // P - i, dock_y // P - i) for i in range(16)]
    b.append(f'<path d="{path_d(rod, P)}" fill="{t["dock2"]}"/>')
    tipx, tipy = (1040 - 15 * P), (dock_y - 15 * P)
    # fishing line: tip -> bobber
    bx, by = 760, HZ - 2 * P
    line = []
    steps = (tipx - bx) // P
    for i in range(steps):
        x = tipx - i * P
        y = tipy + int((by - tipy) * (i / steps) ** 1.6) // P * P
        line.append((x // P, y // P))
    b.append(f'<path d="{path_d(line, P)}" fill="{t["line"]}" opacity=".8"/>')
    # bobber + bite
    bob_c = {"K": "#1b1430", "R": "#ff3b4e", "W": "#f4ecd8"}
    b.append(f'<g class="bob">{sprite(BOBBER, bob_c, P, bx - 2 * P, by - 2 * P)}</g>')
    ring = [(x, 0) for x in range(-6, 7) if abs(x) > 2] + [(-7, -1), (7, -1)]
    b.append(f'<path class="ring" d="{path_d(ring, P, bx, HZ + P)}" fill="{t["shine"]}"/>')
    b.append(f'<g class="bang">{sprite(BANG, {"X": t["title"]}, P, bx + 4 * P, by - 12 * P)}</g>')
    # goldfish swimming beneath
    b.append(f'<g class="swim"><g class="wig">{sprite(FISH, FISH_C, P, 0, 356)}</g></g>')
    # title + subtitle
    b.append(text("WAYSEL", 64, 48, 8, t["title"], t["title_sh"]))
    b.append(text("PIXEL FISHING GAMES,", 68, 140, 4, t["sub"]))
    b.append(text("TERMINAL TOYS, CYBERPUNK UIS.", 68, 184, 4, t["sub"]))
    # press start
    msg = "PRESS START \u00b7 FISCH.ING"
    mw = text_w(msg, 4) + 7 * 4 + 20
    mx = (W - mw) // 2 // P * P
    my = 432
    b.append(rect(mx - 6 * P, my - 4 * P, mw + 12 * P, 16 * P, t["sea"]))
    b.append(f'<g class="blink">{sprite(ARROW, {"X": t["sun"]}, 4, mx, my + 2)}'
             f'{text(msg, mx + 7*4 + 20, my, 4, "#f4ecd8", "#1b1430")}</g>')
    return svg(W, H, "Waysel: pixel fishing games, terminal toys and cyberpunk UIs. Press start to play Fischen! on fisch.ing", "".join(b))


# ---------------------------------------------------------------- dialog window
def frame(t, W, H):
    """RPG dialog window. Outside the outer rule stays transparent."""
    P = 4
    b = [rect(P, P, W - 2 * P, H - 2 * P, t["panel"])]
    b.append(f'<path d="M{P} {P}h{W-2*P}v{P}h-{W-2*P}zM{P} {H-2*P}h{W-2*P}v{P}h-{W-2*P}z'
             f'M{P} {P}h{P}v{H-2*P}h-{P}zM{W-2*P} {P}h{P}v{H-2*P}h-{P}z" fill="{t["frame"]}"/>')
    b.append(f'<path d="M{3*P} {3*P}h{W-6*P}v{P}h-{W-6*P}zM{3*P} {H-4*P}h{W-6*P}v{P}h-{W-6*P}z'
             f'M{3*P} {3*P}h{P}v{H-6*P}h-{P}zM{W-4*P} {3*P}h{P}v{H-6*P}h-{P}z" fill="{t["frame2"]}"/>')
    return b


def water_tile(t, x, y, w, h):
    P = 4
    b = [rect(x, y, w, h, t["water_tile"])]
    d = []
    for k, yy in enumerate(range(y + 4 * P, y + h - P, 6 * P)):
        for xx in range(x + (k % 3) * 5 * P + 2 * P, x + w - 4 * P, 14 * P):
            d.append(f"M{xx} {yy}h{4*P}v{P}h-{4*P}z")
    b.append(f'<path class="wave" d="{"".join(d)}" fill="{t["water_tile2"]}"/>')
    return b


def label_grid(t, rows, x, y, key_w=7 * 24, step=36):
    b = []
    for i, (k, v) in enumerate(rows):
        b.append(text(k, x, y + i * step, 3, t["ink2"]))
        b.append(text(v, x + key_w, y + i * step, 3, t["accent"] if k == "NO." else t["ink"]))
    return b


def feature(t):
    """No.001 Fischen! - the lead catch. 900 wide so text survives phone widths."""
    W, H, P = 900, 420, 4
    b = frame(t, W, H)
    sx, sy, sw, sh = 44, 84, 252, 252
    b += water_tile(t, sx, sy, sw, sh)
    b.append(f'<path d="M{sx-P} {sy-P}h{sw+2*P}v{P}h-{sw+2*P}zM{sx-P} {sy+sh}h{sw+2*P}v{P}h-{sw+2*P}z'
             f'M{sx-P} {sy}h{P}v{sh}h-{P}zM{sx+sw} {sy}h{P}v{sh}h-{P}z" fill="{t["frame"]}"/>')
    b.append(f'<g class="wig">{sprite(FISH, FISH_C, 12, sx + (sw - 16*12)//2, sy + (sh - 9*12)//2)}</g>')
    x = 332
    b.append(text("FISCHEN!", x, 48, 5, t["ink"]))
    b += label_grid(t, [("NO.", "001"), ("TYPE", "BROWSER GAME"), ("WHERE", "FISCH.ING"), ("NEEDS", "NO ACCOUNT,"), ("", "NO INSTALL"), ("DOES", "CAST+REEL+SELL")], x, 112, step=34)
    lbl = "PLAY"
    bw, bh = text_w(lbl, 4) + 7 * 4 + 52, 60
    bx, by = W - 44 - bw, H - 40 - bh
    b.append(rect(bx + P, by + P, bw, bh, t["frame"]))
    b.append(rect(bx, by, bw, bh, t["cta"]))
    b.append(sprite(ARROW, {"X": t["cta_ink"]}, 4, bx + 20, by + (bh - 28) // 2))
    b.append(text(lbl, bx + 20 + 28 + 12, by + (bh - 32) // 2 + 2, 4, t["cta_ink"]))
    return svg(W, H, "Fischdex No. 001, Fischen!: a pixel-art fishing game in the browser at fisch.ing. No account, no install. Play.", "".join(b))


def entry(t, no, name, rows, spr, cmap, label):
    W, H, P = 900, 296, 4
    b = frame(t, W, H)
    sx, sy, ss = 44, 70, 156
    b.append(rect(sx, sy, ss, ss, t["panel2"]))
    sw = len(spr[0]) * 8
    b.append(sprite(spr, cmap, 8, sx + (ss - sw) // 2, sy + (ss - len(spr) * 8) // 2))
    x = 236
    b.append(text(name, x, 44, 4, t["ink"]))
    b += label_grid(t, [("NO.", no)] + rows, x, 96, step=34)
    b.append(sprite(ARROW, {"X": t["ink"]}, 4, W - 64, (H - 28) // 2))
    return svg(W, H, label, "".join(b))


ENTRIES = [
    ("fishfetch", "002", "FISHFETCH", [("TYPE", "CLI"), ("WHERE", "ANY TERMINAL"), ("LANG", "PYTHON"), ("DOES", "FASTFETCH + FISH")], TERMINAL, TERMINAL_C,
     "Fischdex No. 002, fishfetch: fastfetch, but the logo is an animated ASCII fish. Python CLI for any terminal."),
    ("cyberhome", "003", "CYBERHOME", [("TYPE", "LAUNCHER"), ("WHERE", "ANDROID TV"), ("LANG", "JAVA"), ("DOES", "CYBERPUNK TV HOME")], TV, TV_C,
     "Fischdex No. 003, CyberHome: a Cyberpunk 2077-style launcher for Android TV boxes and projectors. Java."),
    ("glass", "004", "GLASS GLOW", [("TYPE", "THEME"), ("WHERE", "WIN TERMINAL"), ("LANG", "HLSL"), ("DOES", "GLASS + TEXT GLOW")], GLASS, GLASS_C,
     "Fischdex No. 004, Terminal Glass Glow: a glass theme with soft text glow for Windows Terminal. HLSL shader."),
]

if __name__ == "__main__":
    for name, t in THEMES.items():
        (OUT / f"title-{name}.svg").write_text(header(t))
    print("ok")
