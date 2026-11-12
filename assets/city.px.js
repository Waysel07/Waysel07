// Waysel profile header: a side-scrolling city at night.
// Built with pxl (https://github.com/crsolver/claude-pxl).
pal({
  a: "#0f0b1e", b: "#1b1430", c: "#2b1e3f", d: "#4a2550", e: "#7a2f5a",
  m: "#f6eedc", s: "#c7b8e0", T: "#f4ecd8", k: "#0d0a18",
  F: "#2b2145", N: "#1f1833", w: "#ffcf5c", n: "#ff5c8a", q: "#41f0ff",
  r: "#241c33", R: "#2e2442", u: "#5a4a7a", y: "#e8e0cc", p: "#3a3050", L: "#ffe6a8", D: "#150f22",
  B: "#d81f2a", l: "#ff5a5f", S: "#9c1b26", M: "#6e1019", v: "#1e2a40", V: "#3f5d80", I: "#121a28",
  h: "#fff2a8", Q: "#c8ccd8", t: "#ff3b4e", A: "#ffa53a", E: "#f4f4f4",
  C: "#dfe3ea", G: "#8a8d9c", H: "#cfd3df", O: "#4a4d5c", X: "#9a9aa8",
  o: "#ff7a3d", Y: "#ffd36b", j: "#ff6f9a", P: "#fff6c8",
})
ramps("MSBl")

sprite("_title", { w: 96, h: 16 }, (c) => {
  const g = `TT.T.TT...TTT....TT..TT..TTTTT..TTTTTTT..TT.....
TT.T.TT..TT.TT...TT..TT.TT...TT.TT.......TT.....
TT.T.TT.TT...TT..TT..TT.TT......TT.......TT.....
TT.T.TT.TT...TT...TTTT...TTTTT..TTTTTT...TT.....
TTTTTTT.TTTTTTT....TT........TT.TT.......TT.....
TTT.TTT.TT...TT....TT...TT...TT.TT.......TT.....
.T...T..TT...TT....TT....TTTTT..TTTTTTT..TTTTTT.`.split("\n")
  g.forEach((row, y) => [...row].forEach((ch, x) => { if (ch === "T") c.rect(x * 2, y * 2, 2, 2, "T") }))
})
sprite("_sub1", `
..TTTT....TTT...TTTTTT...TTTTT..................TT...TT.TT...TT..TTTTT...TTTTTT...TTTT...........TTT....
.TT..TT..TT.TT..TT...TT.TT...TT.................TTT.TTT.TT...TT.TT...TT....TT....TT..TT.........TT.TT...
TT......TT...TT.TT...TT.TT......................TTTTTTT.TT...TT.TT.........TT...TT..............TT.TT...
TT......TT...TT.TT..TTT..TTTTT..................TT.T.TT.TT...TT..TTTTT.....TT...TT...............TTT....
TT......TTTTTTT.TTTTT........TT.................TT.T.TT.TT...TT......TT....TT...TT..............TT.TT.T.
.TT..TT.TT...TT.TT.TTT..TT...TT...TT............TT...TT.TT...TT.TT...TT....TT....TT..TT.........TT..TT..
..TTTT..TT...TT.TT..TTT..TTTTT....TT............TT...TT..TTTTT...TTTTT...TTTTTT...TTTT...........TTTTTT.
.................................TT.....................................................................
`)
sprite("_sub2", `
.TTTTT..TT...TT...TTT....TT......TT..............TTTTT..TTTTT...TTTTT...........TTTTTT..TTTTTT...TTTTT.......TT.TTTTTTT...TTTT...TTTTTT..TTTTT..
TT...TT.TTT.TTT..TT.TT...TT......TT.............TT...TT.TT..TT..TT..TT..........TT...TT.TT...TT.TT...TT......TT.TT.......TT..TT....TT...TT...TT.
TT......TTTTTTT.TT...TT..TT......TT.............TT...TT.TT...TT.TT...TT.........TT...TT.TT...TT.TT...TT......TT.TT......TT.........TT...TT......
.TTTTT..TT.T.TT.TT...TT..TT......TT.............TT...TT.TT...TT.TT...TT.........TT...TT.TT..TTT.TT...TT......TT.TTTTTT..TT.........TT....TTTTT..
.....TT.TT.T.TT.TTTTTTT..TT......TT.............TT...TT.TT...TT.TT...TT.........TTTTTT..TTTTT...TT...TT......TT.TT......TT.........TT........TT.
TT...TT.TT...TT.TT...TT..TT......TT.............TT...TT.TT..TT..TT..TT..........TT......TT.TTT..TT...TT.TT...TT.TT.......TT..TT....TT...TT...TT.
.TTTTT..TT...TT.TT...TT..TTTTTT..TTTTTT..........TTTTT..TTTTT...TTTTT...........TT......TT..TTT..TTTTT...TTTTT..TTTTTTT...TTTT.....TT....TTTTT..
`)

const W = 280, H = 92, FR = 96, HZ = 74
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) }
const far = [], near = []
{ const r = rng(3); for (let x = 0; x < 48; x += 8) far.push([x, 8, 10 + Math.floor(r() * 16)]) }
{ const r = rng(11); let x = 0
  while (x < 96) { const w = 12 + Math.floor(r() * 9), h = 10 + Math.floor(r() * 20)
    const wins = []; for (let wy = HZ - h + 3; wy < HZ - 3; wy += 4) for (let wx = x + 2; wx < x + w - 2; wx += 3) if (r() < 0.45) wins.push([wx, wy])
    near.push({ x, w, h, wins, sign: r() < 0.35 ? (r() < 0.5 ? "n" : "q") : null }); x += w + 1 } }
const stars = [[180, 30], [60, 50], [110, 46], [160, 52], [200, 40], [226, 30], [270, 44], [8, 52], [130, 4], [170, 10], [214, 6]]

anim("drive", { w: W, h: H, frames: FR, fps: 16 },
  grad(0, 0, W, HZ, "abcde", "v", 0.6),
  (c) => {
    const f = c.frame, ph = c.phase
    for (const [i, [x, y]] of stars.entries()) if ((f + i * 7) % 24 < 20) c.px(x, y, "s")
    c.circ(252, 16, 8, "m"); c.circ(255, 14, 7, "c")
    const fo = (f / 2) % 48
    for (let k = -1; k < 8; k++) for (const [x, w, h] of far) c.rect(Math.round(k * 48 + x - fo), HZ - h - 8, w, h + 8, "F")
    const no = f % 96
    for (let k = 0; k < 4; k++) for (const b of near) {
      const bx = k * 96 + b.x - no
      if (bx > W || bx + b.w < 0) continue
      c.rect(bx, HZ - b.h, b.w, b.h, "N")
      for (const [wx, wy] of b.wins) c.px(wx + k * 96 - no, wy, "w")
      if (b.sign) c.rect(bx + 3, HZ - b.h + 3, b.w - 6, 2, b.sign)
    }
    c.rect(0, HZ, W, 4, "R"); c.hline(0, HZ + 4, W, "u"); c.rect(0, HZ + 5, W, H - HZ - 5, "r")
    const ro = (f * 2) % 24
    for (let x = -24; x < W + 24; x += 24) c.rect(x - ro, 85, 12, 1, "y")
    const lo = (f * 2) % 96
    for (let x = -96; x < W + 96; x += 48) { const lx = x - lo; c.vline(lx, HZ - 30, 34, "p"); c.hline(lx, HZ - 30, 6, "p"); c.rect(lx + 3, HZ - 29, 4, 1, "L") }
  },
  stamp("_title", 9, 7, { swap: { T: "k" } }), stamp("_title", 8, 6),
  stamp("_sub1", 9, 27, { swap: { T: "k" } }), stamp("_sub1", 8, 26),
  stamp("_sub2", 9, 37, { swap: { T: "k" } }), stamp("_sub2", 8, 36),
  glow("w", { r: 2, strength: 0.35, bands: 2 }),
  glow("nqL", { r: 5, strength: 0.6, bands: 3 }),
  glow("h", { r: 6, strength: 0.7, bands: 3 }),
  glow("tA", { r: 2, strength: 0.5, bands: 2 }),
  glow("m", { r: 9, strength: 0.35, bands: 3 }),
)
