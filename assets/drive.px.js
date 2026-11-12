// Waysel profile header: a tuned S13 Silvia cruising through a city at night. Built with pxl.
pal({
  a: "#0f0b1e", b: "#1b1430", c: "#2b1e3f", d: "#4a2550", e: "#7a2f5a",
  m: "#f6eedc", s: "#c7b8e0", T: "#f4ecd8", k: "#0d0a18",
  F: "#2b2145", N: "#1f1833", w: "#ffcf5c", n: "#ff5c8a", q: "#41f0ff",
  r: "#241c33", R: "#2e2442", u: "#5a4a7a", y: "#e8e0cc", p: "#3a3050", L: "#ffe6a8",
  B: "#f2f2f6", S: "#b9bccb", v: "#2a3a55", h: "#fff2a8", t: "#ff3b4e",
  C: "#d8dce6", G: "#2a2a35", H: "#8a8a99", X: "#9a9aa8", z: "#b04dff",
  o: "#ff7a3d", Y: "#ffd36b", j: "#ff6f9a", P: "#fff6c8",
})

sprite("_s13", `
.kkkkkkkkkk......kkkkkkkkkkk..................
.kkkkkkkkkk....kkBBBBBBBBBBBkkk...............
...k....k....kkBvvvvvvkvvvvvvvBkkk............
.kkkkkkkkkkkkBvvvvvvvvkvvvvvvvvvBBkkkkkkk.....
kBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBkkk..
kBBBBBBkkkkkBBBBBBBBBBBBBBBBBBBBBkkkkkBBBBhhk.
kttBBBkCCCCCkBBBBBBBBBBBBBBBBBBBkCCCCCkBBBBBBk
kSSSSkCGGGGGCkSSSSSSSSSSSSSSSSSkCGGGGGCkSSSSBk
XXBBBkCGGHGGCkBBBBBBBBBBBBBBBBBkCGGHGGCkBBBBBk
..kkSkCGGGGGCkSSSSSSSSSSSSSSSSSkCGGGGGCkSSSkk.
....kkkCCCCCkkkkkkkkkkkkkkkkkkkkkCCCCCkkkkkkkk
.......kkkkk.....................kkkkk........
..............................................
`)
sprite("_note", `
..kk
..kk
..k.
kkk.
kkk.`)
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

const W = 168, H = 88, FR = 96, HZ = 58
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) }
const far = [], near = []
{ const r = rng(3); for (let x = 0; x < 48; x += 6) far.push([x, 6, 6 + Math.floor(r() * 12)]) }
{ const r = rng(11); let x = 0
  while (x < 96) { const w = 8 + Math.floor(r() * 7), h = 6 + Math.floor(r() * 14)
    const wins = []; for (let wy = HZ - h + 2; wy < HZ - 2; wy += 3) for (let wx = x + 2; wx < x + w - 2; wx += 3) if (r() < 0.4) wins.push([wx, wy])
    near.push({ x, w, h, wins, sign: r() < 0.3 ? (r() < 0.5 ? "n" : "q") : null }); x += w + 1 } }
const stars = [[112, 30], [40, 46], [66, 44], [96, 40], [130, 36], [150, 26], [160, 40], [6, 44], [80, 2], [104, 6]]

anim("drive", { w: W, h: H, frames: FR, fps: 16 },
  grad(0, 0, W, HZ, "abcde", "v", 0.6),
  (c) => {
    const f = c.frame, ph = c.phase
    for (const [i, [x, y]] of stars.entries()) if ((f + i * 7) % 24 < 20) c.px(x, y, "s")
    c.circ(154, 11, 5, "m"); c.circ(156, 10, 4, "c"); // crescent moon
    const fo = (f / 2) % 48
    for (let k = -1; k < 5; k++) for (const [x, w, h] of far) c.rect(Math.round(k * 48 + x - fo), HZ - h - 6, w, h + 6, "F")
    const no = f % 96
    for (let k = 0; k < 3; k++) for (const b of near) {
      const bx = k * 96 + b.x - no
      if (bx > W || bx + b.w < 0) continue
      c.rect(bx, HZ - b.h, b.w, b.h, "N")
      for (const [wx, wy] of b.wins) c.px(wx + k * 96 - no, wy, "w")
      if (b.sign) c.rect(bx + 2, HZ - b.h + 2, b.w - 4, 2, b.sign)
    }
    c.rect(0, HZ, W, 3, "R"); c.hline(0, HZ + 3, W, "u"); c.rect(0, HZ + 4, W, H - HZ - 4, "r")
    const ro = (f * 2) % 16
    for (let x = -16; x < W + 16; x += 16) c.rect(x - ro, 82, 8, 1, "y")
    const lo = (f * 2) % 96
    for (let x = -96; x < W + 96; x += 48) { const lx = x - lo; c.vline(lx, HZ - 18, 21, "p"); c.hline(lx, HZ - 18, 4, "p"); c.rect(lx + 2, HZ - 17, 3, 1, "L") }
    for (let i = 0; i < 9; i++) {
      const hgt = 2 + Math.round(7 * (0.5 + 0.5 * Math.sin(2 * Math.PI * ph * (2 + (i % 4)) + i * 1.7)))
      c.rect(110 + i * 4, 20 - hgt, 3, hgt, i % 3 === 0 ? "j" : i % 3 === 1 ? "o" : "Y")
    }
    const cy = HZ + 6 + (f % 8 < 4 ? 0 : 1), cx = 52
    // headlight beam: tapered, thinning with distance
    for (let d = 0; d < 34; d++) { const half = 1 + Math.floor(d / 7)
      for (let j = -half; j <= half; j++) if (((d + j + 64) % 3 === 0) && d < 34 - Math.abs(j) * 3) c.px(cx + 46 + d, cy + 5 + j, "P") }
    c.hline(cx + 5, cy + 12, 36, "z")
    c.stamp("_s13", cx, cy)
    for (let i = 0; i < 3; i++) {
      const t = (ph * 2 + i / 3) % 1
      if (t > 0.85) continue
      c.stamp("_note", cx + 18 + i * 5 - Math.round(t * 8), cy - 6 - Math.round(t * 20), { swap: { k: i === 1 ? "j" : "Y" } })
    }
  },
  stamp("_title", 7, 5, { swap: { T: "k" } }), stamp("_title", 6, 4),
  stamp("_sub1", 7, 25, { swap: { T: "k" } }), stamp("_sub1", 6, 24),
  stamp("_sub2", 7, 35, { swap: { T: "k" } }), stamp("_sub2", 6, 34),
  glow("w", { r: 2, strength: 0.35, bands: 2 }),
  glow("nqL", { r: 4, strength: 0.6, bands: 3 }),
  glow("ht", { r: 5, strength: 0.7, bands: 3 }),
  glow("z", { r: 2, strength: 0.45, bands: 2 }),
  glow("m", { r: 7, strength: 0.35, bands: 3 }),
)
