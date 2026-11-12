// Waysel profile header: a slammed red S13 Silvia cruising through a city at night.
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

function wheel(c, x, y) {
  // slammed: the fender hides the top of the tyre, so only paint below the fender line
  const top = y - 4
  const disc = (r, k, cond) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++)
    if (dx * dx + dy * dy <= r * r + r && y + dy >= top && (!cond || cond(dx, dy))) c.px(x + dx, y + dy, k) }
  disc(8, "k")                                   // stretched tyre
  disc(7, "C")                                   // polished deep-dish lip
  disc(7, "Q", (dx, dy) => dx + dy > 3)          // lip falls into shade lower right
  disc(5, "O")                                   // dish
  disc(4, "G")                                   // face
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + 0.3
    const ex = x + Math.round(Math.cos(a) * 4), ey = y + Math.round(Math.sin(a) * 4)
    if (ey >= top) c.line(x, y, ex, ey, "H") }
  disc(1, "O"); c.px(x, y, "H")
  c.px(x - 5, y - 3, "E"); c.px(x - 6, y - 2, "E")   // glint on the lip
  c.hline(x - 8, top - 1, 17, "k")                   // fender lip edge
}

sprite("_s13", { w: 114, h: 38, outline: "k" },
  poly([0,18, 2,15, 4,14, 22,14, 28,13, 40,6, 46,5, 58,5, 64,7, 72,13, 76,14, 92,15, 104,17, 110,18, 112,20, 112,26, 111,29, 98,30, 2,30, 0,27], "B"),
  (c) => { for (let x = 0; x < 114; x++) for (let y = 0; y < 38; y++) if (c.is(x, y, "B")) { c.px(x, y, "l"); break } }, // lit top edge
  recolor({ B: "S" }, [0, 24, 114, 8]),                        // lower body in shade
  line(3, 17, 104, 19, "l"),                                     // shoulder crease highlight
  poly([31,13, 41,7, 46,6, 57,6, 62,8, 69,13], "v"),             // side glass
  vline(47, 6, 8, "k"),                                          // pillar
  rect(52, 9, 3, 4, "I"), rect(51, 11, 5, 2, "S"),               // headrest + red seat through the tint
  line(57, 7, 61, 12, "V"), line(36, 12, 40, 8, "V"),            // glass glints
  line(47, 14, 48, 27, "M"), line(73, 14, 74, 26, "M"),          // door seams
  rect(51, 17, 3, 1, "M"),                                       // handle
  poly([68,11, 72,10, 73,13, 69,13], "B"), px(69, 11, "l"),      // mirror
  rect(101, 17, 9, 2, "Q"), rect(107, 17, 3, 2, "h"),            // thin S13 headlight
  rect(104, 21, 4, 1, "A"),                                      // turn signal
  rect(104, 23, 6, 3, "E"), hline(105, 24, 4, "O"),              // plate
  rect(0, 16, 3, 3, "t"), hline(0, 22, 3, "M"),                  // tail light, bumper line
  rect(34, 27, 48, 2, "M"),                                      // side skirt
  hline(96, 30, 17, "k"), hline(98, 31, 14, "k"),                // front lip
  rect(0, 28, 2, 1, "X"),                                        // exhaust
  (c) => { wheel(c, 23, 28); wheel(c, 88, 28) },
)

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

const W = 280, H = 128, FR = 96, HZ = 74, GROUND = 114
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
    for (let x = -24; x < W + 24; x += 24) c.rect(x - ro, 121, 12, 1, "y")
    const lo = (f * 2) % 96
    for (let x = -96; x < W + 96; x += 48) { const lx = x - lo; c.vline(lx, HZ - 30, 34, "p"); c.hline(lx, HZ - 30, 6, "p"); c.rect(lx + 3, HZ - 29, 4, 1, "L") }
    for (let i = 0; i < 11; i++) {
      const hgt = 2 + Math.round(9 * (0.5 + 0.5 * Math.sin(2 * Math.PI * ph * (2 + (i % 4)) + i * 1.7)))
      c.rect(118 + i * 4, 20 - hgt, 3, hgt, i % 3 === 0 ? "j" : i % 3 === 1 ? "o" : "Y")
    }
    const cx = 72, cy = GROUND - 37 + (f % 8 < 4 ? 0 : 1)
    c.ellipse(cx + 57, GROUND + 1, 54, 2, "D")
    for (let d = 0; d < 50; d++) { const half = 1 + Math.floor(d / 8)
      for (let j = -half; j <= half; j++) if (((d + j + 99) % 3 === 0) && d < 50 - Math.abs(j) * 4) c.px(cx + 115 + d, cy + 19 + j, "P") }
    c.stamp("_s13", cx, cy)
    for (let i = 0; i < 3; i++) {
      const t = (ph * 2 + i / 3) % 1
      if (t > 0.85) continue
      c.stamp("_note", cx + 46 + i * 6 - Math.round(t * 10), cy - 2 - Math.round(t * 26), { swap: { k: i === 1 ? "j" : "Y" } })
    }
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
