#!/usr/bin/env python3
"""Generate SVG assets for the Waysel07 profile README (dark + light)."""
import sys
from pathlib import Path

OUT = Path(sys.argv[1])
MONO = "ui-monospace, 'SF Mono', 'JetBrains Mono', 'Cascadia Code', Menlo, Consolas, monospace"
SANS = "-apple-system, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif"

THEMES = {
    "dark": dict(
        bg1="#07111f", bg2="#0b1d33", glass="#ffffff", glass_op="0.05", stroke="#7fdcff",
        stroke_op="0.22", text="#e8f6ff", muted="#8fb3c9", accent="#5ee7ff", accent2="#ff5c8a",
        glow_op="0.9", blob1="#1b6fff", blob2="#ff3d7f", blob3="#00e0b8", blob_op="0.35",
        fish_body="#ffb547", fish_dark="#d9771f", fish_light="#ffe08a", eye="#07111f",
        bubble="#9fe9ff",
    ),
    "light": dict(
        bg1="#eaf6ff", bg2="#f8fbff", glass="#ffffff", glass_op="0.55", stroke="#0b6e99",
        stroke_op="0.18", text="#0b2236", muted="#4a6a80", accent="#0090c0", accent2="#e0306a",
        glow_op="0.35", blob1="#6fb6ff", blob2="#ff8fb2", blob3="#5fe0c8", blob_op="0.45",
        fish_body="#ff9f1c", fish_dark="#c4610a", fish_light="#ffd166", eye="#0b2236",
        bubble="#3aa6d6",
    ),
}

# 16x9 pixel fish facing right (tail on the left).
FISH = [
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


def fish_rects(t, px):
    cmap = {"D": t["fish_dark"], "B": t["fish_body"], "L": t["fish_light"], "E": t["eye"]}
    out = []
    for y, row in enumerate(FISH):
        for x, c in enumerate(row):
            if c in cmap:
                out.append(f'<rect x="{x*px}" y="{y*px}" width="{px}" height="{px}" fill="{cmap[c]}"/>')
    return "".join(out)


def header(t):
    W, H = 1200, 360
    bubbles = []
    for i, (x, r, dur, delay) in enumerate([
        (140, 4, 7, 0), (230, 3, 9, 2), (410, 5, 8, 4), (560, 3, 10, 1),
        (700, 4, 7.5, 3), (880, 6, 9.5, 0.5), (980, 3, 8.5, 5), (1080, 4, 7, 2.5),
    ]):
        bubbles.append(
            f'<circle class="b" cx="{x}" cy="{H+10}" r="{r}" '
            f'style="animation-duration:{dur}s;animation-delay:-{delay}s"/>'
        )
    px = 5
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Waysel: pixel fishing games, terminal toys and cyberpunk UIs">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="{t['bg1']}"/><stop offset="1" stop-color="{t['bg2']}"/>
  </linearGradient>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60"/></filter>
  <filter id="glow" x="-20%" y="-50%" width="140%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="g"/>
    <feComponentTransfer in="g" result="g2"><feFuncA type="linear" slope="{t['glow_op']}"/></feComponentTransfer>
    <feMerge><feMergeNode in="g2"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <clipPath id="clip"><rect width="{W}" height="{H}" rx="18"/></clipPath>
  <style>
    .b {{ fill: none; stroke: {t['bubble']}; stroke-width: 1.5; opacity: .55;
          animation: rise linear infinite; }}
    @keyframes rise {{ 0% {{ transform: translateY(0); opacity: 0 }} 10% {{ opacity: .6 }}
                       100% {{ transform: translateY(-{H+40}px); opacity: 0 }} }}
    .swim {{ animation: swim 16s linear infinite; animation-delay: -9s; }}
    @keyframes swim {{ 0% {{ transform: translate(-120px, 296px) }} 100% {{ transform: translate({W+40}px, 288px) }} }}
    .bob {{ animation: bob 1.6s ease-in-out infinite; }}
    @keyframes bob {{ 0%,100% {{ transform: translateY(0) }} 50% {{ transform: translateY(-6px) }} }}
    .blob {{ animation: drift 18s ease-in-out infinite alternate; }}
    @keyframes drift {{ 0% {{ transform: translate(0,0) }} 100% {{ transform: translate(60px,-30px) }} }}
    .cur {{ animation: blink 1.1s steps(1) infinite; }}
    @keyframes blink {{ 50% {{ opacity: 0 }} }}
    @media (prefers-reduced-motion: reduce) {{ .b, .swim, .bob, .blob, .cur {{ animation: none }} }}
  </style>
</defs>
<g clip-path="url(#clip)">
  <rect width="{W}" height="{H}" fill="url(#bg)"/>
  <g filter="url(#blur)" opacity="{t['blob_op']}">
    <circle class="blob" cx="220" cy="90" r="150" fill="{t['blob1']}"/>
    <circle class="blob" style="animation-delay:-6s" cx="960" cy="240" r="170" fill="{t['blob2']}"/>
    <circle class="blob" style="animation-delay:-11s" cx="640" cy="300" r="140" fill="{t['blob3']}"/>
  </g>
  {''.join(bubbles)}
  <g class="swim"><g class="bob">{fish_rects(t, px)}</g></g>
  <rect x="60" y="36" width="{W-120}" height="224" rx="16" fill="{t['glass']}" fill-opacity="{t['glass_op']}"
        stroke="{t['stroke']}" stroke-opacity="{t['stroke_op']}"/>
  <g transform="translate(88,64)">
    <circle r="6" fill="{t['accent2']}" opacity=".8"/><circle cx="20" r="6" fill="#ffbd2e" opacity=".8"/><circle cx="40" r="6" fill="{t['accent']}" opacity=".8"/>
    <text x="68" y="5" font-family="{MONO}" font-size="14" fill="{t['muted']}">~/waysel — fish</text>
  </g>
  <text x="100" y="140" font-family="{MONO}" font-size="20" fill="{t['muted']}"><tspan fill="{t['accent']}">❯</tspan> whoami</text>
  <text x="96" y="204" font-family="{SANS}" font-weight="800" font-size="68" letter-spacing="-1" fill="{t['text']}" filter="url(#glow)">Waysel</text>
  <text x="100" y="238" font-family="{MONO}" font-size="19" fill="{t['muted']}">pixel fishing games · terminal toys · cyberpunk UIs<tspan class="cur" fill="{t['accent']}"> ▍</tspan></text>
</g>
</svg>'''


def wrap(text, n):
    words, lines, cur = text.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > n:
            lines.append(cur); cur = w
        else:
            cur = (cur + " " + w).strip()
    lines.append(cur)
    return lines


LANG = {"JavaScript": "#f1e05a", "Python": "#3572A5", "Java": "#b07219", "HLSL": "#aace60", "TypeScript": "#3178c6"}


def card(t, title, tag, desc, langs, icon):
    W, H = 580, 184
    lines = wrap(desc, 58)[:3]
    desc_svg = "".join(
        f'<text x="28" y="{86 + i*22}" font-family="{SANS}" font-size="15" fill="{t["muted"]}">{l}</text>'
        for i, l in enumerate(lines)
    )
    lx, lang_svg = 28, ""
    for lg in langs:
        lang_svg += (f'<circle cx="{lx+6}" cy="{H-27}" r="6" fill="{LANG.get(lg, t["accent"])}"/>'
                     f'<text x="{lx+18}" y="{H-22}" font-family="{SANS}" font-size="13" fill="{t["muted"]}">{lg}</text>')
        lx += 30 + len(lg) * 8
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{title}: {desc}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{t['bg1']}"/><stop offset="1" stop-color="{t['bg2']}"/></linearGradient>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>
  <filter id="glow" x="-20%" y="-60%" width="140%" height="220%">
    <feGaussianBlur stdDeviation="4" result="g"/><feComponentTransfer in="g" result="g2"><feFuncA type="linear" slope="{t['glow_op']}"/></feComponentTransfer>
    <feMerge><feMergeNode in="g2"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <clipPath id="c"><rect x="1" y="1" width="{W-2}" height="{H-2}" rx="14"/></clipPath>
</defs>
<g clip-path="url(#c)">
  <rect width="{W}" height="{H}" fill="url(#bg)"/>
  <circle cx="{W-40}" cy="20" r="90" fill="{t['blob1']}" opacity="{t['blob_op']}" filter="url(#blur)"/>
  <circle cx="{W-140}" cy="{H}" r="70" fill="{t['blob2']}" opacity="{t['blob_op']}" filter="url(#blur)"/>
</g>
<rect x="1" y="1" width="{W-2}" height="{H-2}" rx="14" fill="{t['glass']}" fill-opacity="{t['glass_op']}" stroke="{t['stroke']}" stroke-opacity="{t['stroke_op']}"/>
<text x="28" y="50" font-family="{SANS}" font-weight="700" font-size="24" fill="{t['text']}" filter="url(#glow)">{icon} {title}</text>
<text x="{W-28}" y="48" text-anchor="end" font-family="{MONO}" font-size="13" fill="{t['accent']}">{tag}</text>
{desc_svg}
{lang_svg}
</svg>'''


CARDS = [
    ("fisch", "fisch.ing", "play ↗", "A pixel-art fishing game in the browser. Islands, weather, shinies, live lobbies and a casino run by a card shark.", ["JavaScript"], "🎣"),
    ("fishfetch", "fishfetch", "cli", "fastfetch, but the logo is an animated ASCII fish. Plain text, so it works over SSH. Can play GIFs via sixel or kitty.", ["Python"], "🐟"),
    ("cyberhome", "CyberHome", "android tv", "A Cyberpunk 2077-style launcher for Android TV boxes and projectors. Live gauges, D-pad driven, built without Gradle.", ["Java"], "📺"),
    ("glass", "Terminal Glass Glow", "theme", "A glass theme for Windows Terminal: blurred see-through background, a soft glow around text, and Obel Mono.", ["HLSL"], "✨"),
]

for name, t in THEMES.items():
    (OUT / f"header-{name}.svg").write_text(header(t))
    for key, *rest in CARDS:
        (OUT / f"card-{key}-{name}.svg").write_text(card(t, *rest))
print("ok")
