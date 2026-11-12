// Waysel profile header: a slammed two-tone S13 parked on a wet road in a misty pine forest, in the rain.
pal({
  k: "#0b0d11", L: "#e8ecf2", B: "#b9c1ce", S: "#8b94a6", M: "#636b7d", D: "#2e3139", d: "#1e2027",
  v: "#121519", V: "#3a414f", I: "#a3a9b4", C: "#dde1e8", G: "#363840", O: "#202228", H: "#60636c",
  h: "#f2f4f6", A: "#ef8a2b", E: "#f2f3ee", e: "#4f8a5e", t: "#c8343c",
})
function wheel(c, x, y, tilt) {
  const ring = (r, k) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    const d = dx * dx + dy * dy; if (d <= r * r + r) c.px(x + dx + (tilt && dy < -2 ? -1 : 0), y + dy, k) } }
  ring(9, "k")            // stretched tyre
  ring(8, "C")            // polished lip
  ring(7, "G")            // dark face
  for (let i = 0; i < 5; i++) { const a = i * 2 * Math.PI / 5 - 0.6
    c.line(x, y, x + Math.round(Math.cos(a) * 6), y + Math.round(Math.sin(a) * 6), "H")
    c.line(x + 1, y, x + 1 + Math.round(Math.cos(a) * 6), y + Math.round(Math.sin(a) * 6), "O") }
  ring(2, "O"); c.px(x, y, "H")
  c.px(x - 6, y - 5, "h"); c.px(x - 7, y - 4, "h")   // glint
}
sprite("s13", { w: 124, h: 44, outline: "k" },
  // silhouette: trunk, roof, windshield, long hood, nose
  poly([1,20, 3,16, 8,15, 27,15, 35,7, 37,6, 66,6, 69,7, 82,15, 112,16, 118,17, 121,19, 121,30, 119,34, 4,34, 1,30], "B"),
  poly([1,26, 121,26, 121,30, 119,34, 4,34, 1,30], "D"),                // two-tone: charcoal lower body
  hline(2, 25, 119, "M"),                                              // two-tone seam
  hline(4, 33, 114, "d"),                                              // sill shadow
  line(3, 16, 112, 16, "L"), hline(37, 6, 29, "L"),                     // shoulder + roof rail highlights
  line(4, 18, 112, 18, "S"),                                           // crease shadow
  // glass
  poly([30,14, 37,8, 43,8, 43,14], "v"),                               // quarter window
  poly([46,14, 46,8, 66,8, 77,14], "v"),                               // door glass + windshield edge
  line(66, 8, 77, 14, "V"), line(68, 8, 79, 15, "S"),                  // A-pillar
  rect(51, 10, 4, 3, "I"), px(52, 9, "I"),                             // headrest
  line(70, 11, 72, 13, "I"),                                           // steering wheel
  line(56, 9, 60, 13, "V"),                                            // glass glint
  // panels
  vline(44, 15, 18, "M"), vline(73, 16, 9, "M"),                       // door seams
  hline(60, 19, 4, "M"),                                               // handle
  poly([71,12, 75,12, 76,15, 72,15], "B"), px(72, 13, "L"),            // mirror
  // front
  hline(100, 20, 21, "h"), hline(100, 21, 21, "S"),                    // thin headlight strip
  rect(96, 20, 3, 2, "A"),                                             // amber marker
  hline(104, 23, 17, "d"),                                             // grille slot
  rect(109, 28, 9, 4, "E"), hline(110, 29, 7, "e"), hline(110, 30, 5, "e"),   // plate
  hline(98, 35, 22, "k"),                                              // front lip
  // rear
  rect(1, 19, 3, 3, "t"),
  // wheel arches cut into the body, then the wheels set inside them
  (c) => { for (const [x, y] of [[23, 33], [89, 33]]) for (let dy = -10; dy <= 0; dy++) for (let dx = -10; dx <= 10; dx++)
      if (dx * dx + dy * dy <= 110) c.px(x + dx, y + dy, "d")
    wheel(c, 23, 33, false); wheel(c, 89, 33, true) },
)

pal({
  k: "#0c0f14", B: "#8d97ab", l: "#b9c1d0", L: "#dde2ea", S: "#5f6880", M: "#3f465a", D: "#262b38",
  v: "#151a24", V: "#55627a", g: "#c9ccd4", G: "#2b2e37", O: "#1a1c22", H: "#6c707c",
  h: "#e8ecf2", A: "#e8a13a", E: "#eef0f0", t: "#c43a3a",
  a: "#0b1510", b: "#0f1d16", c: "#14261c", d: "#1a3124", e: "#213d2d",
  F: "#17291f", N: "#0a140f", f: "#34594a", w: "#7f9d8d", W: "#0a120e", r: "#13201a",
  T: "#eef3ee", o: "#0a1a12", s: "#9fc4ad", n: "#c9d6cc", x: "#a8c2b4",
})

sprite("_title", { outline: "o" }, `
.......TTTTTTT..TTTT..TTTTTTT........TTTTTTTTTT...........TTTTTTT.....TTTTTTT.....TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTT..................
.......TTTTTTT..TTTT..TTTTTTT........TTTTTTTTTT...........TTTTTTT.....TTTTTTT.....TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTT..................
.......TTTTTTT..TTTT..TTTTTTT........TTTTTTTTTT...........TTTTTTT.....TTTTTTT.....TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTT..................
......TTTTTTT..TTTT..TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT...................
......TTTTTTT..TTTT..TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT...................
......TTTTTTT..TTTT..TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT..TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT...................
.....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT.....TTTTTTT..TTTTTTT.................TTTTTTT....................TTTTTTT....................
.....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT.....TTTTTTT..TTTTTTT.................TTTTTTT....................TTTTTTT....................
.....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT.....TTTTTTT.....TTTTTTT..TTTTTTT.................TTTTTTT....................TTTTTTT....................
....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT........TTTTTTTTTTTTT........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT........TTTTTTT.....................
....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT........TTTTTTTTTTTTT........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT........TTTTTTT.....................
....TTTTTTT..TTTT..TTTTTTT..TTTTTTT........TTTTTTT........TTTTTTTTTTTTT........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT........TTTTTTT.....................
...TTTTTTTTTTTTTTTTTTTTTT..TTTTTTTTTTTTTTTTTTTTTT...........TTTTTTT.......................TTTTTTT..TTTTTTT....................TTTTTTT......................
...TTTTTTTTTTTTTTTTTTTTTT..TTTTTTTTTTTTTTTTTTTTTT...........TTTTTTT.......................TTTTTTT..TTTTTTT....................TTTTTTT......................
...TTTTTTTTTTTTTTTTTTTTTT..TTTTTTTTTTTTTTTTTTTTTT...........TTTTTTT.......................TTTTTTT..TTTTTTT....................TTTTTTT......................
..TTTTTTTTTT..TTTTTTTTTT..TTTTTTT........TTTTTTT...........TTTTTTT........TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT.......................
..TTTTTTTTTT..TTTTTTTTTT..TTTTTTT........TTTTTTT...........TTTTTTT........TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT.......................
..TTTTTTTTTT..TTTTTTTTTT..TTTTTTT........TTTTTTT...........TTTTTTT........TTTTTTT........TTTTTTT..TTTTTTT....................TTTTTTT.......................
....TTTT........TTTT.....TTTTTTT........TTTTTTT...........TTTTTTT...........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT............
....TTTT........TTTT.....TTTTTTT........TTTTTTT...........TTTTTTT...........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT............
....TTTT........TTTT.....TTTTTTT........TTTTTTT...........TTTTTTT...........TTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTTTTT.....TTTTTTTTTTTTTTTTTTT............
...........................................................................................................................................................
...........................................................................................................................................................
...........................................................................................................................................................
`)
sprite("_sub", `
..ssss....sss...ssssss...sssss..................ss...ss.ss...ss..sssss...ssssss...ssss...........sss.............sssss..ss...ss...sss....ss......ss..............sssss..sssss...sssss...........ssssss..ssssss...sssss.......ss.sssssss...ssss...ssssss..sssss..
.ss..ss..ss.ss..ss...ss.ss...ss.................sss.sss.ss...ss.ss...ss....ss....ss..ss.........ss.ss...........ss...ss.sss.sss..ss.ss...ss......ss.............ss...ss.ss..ss..ss..ss..........ss...ss.ss...ss.ss...ss......ss.ss.......ss..ss....ss...ss...ss.
ss......ss...ss.ss...ss.ss......................sssssss.ss...ss.ss.........ss...ss..............ss.ss...........ss......sssssss.ss...ss..ss......ss.............ss...ss.ss...ss.ss...ss.........ss...ss.ss...ss.ss...ss......ss.ss......ss.........ss...ss......
ss......ss...ss.ss..sss..sssss..................ss.s.ss.ss...ss..sssss.....ss...ss...............sss.............sssss..ss.s.ss.ss...ss..ss......ss.............ss...ss.ss...ss.ss...ss.........ss...ss.ss..sss.ss...ss......ss.ssssss..ss.........ss....sssss..
ss......sssssss.sssss........ss.................ss.s.ss.ss...ss......ss....ss...ss..............ss.ss.s..............ss.ss.s.ss.sssssss..ss......ss.............ss...ss.ss...ss.ss...ss.........ssssss..sssss...ss...ss......ss.ss......ss.........ss........ss.
.ss..ss.ss...ss.ss.sss..ss...ss...ss............ss...ss.ss...ss.ss...ss....ss....ss..ss.........ss..ss..........ss...ss.ss...ss.ss...ss..ss......ss.............ss...ss.ss..ss..ss..ss..........ss......ss.sss..ss...ss.ss...ss.ss.......ss..ss....ss...ss...ss.
..ssss..ss...ss.ss..sss..sssss....ss............ss...ss..sssss...sssss...ssssss...ssss...........ssssss..........sssss..ss...ss.ss...ss..ssssss..ssssss..........sssss..sssss...sssss...........ss......ss..sss..sssss...sssss..sssssss...ssss.....ss....sssss..
.................................ss.............................................................................................................................................................................................................................
`)
sprite("_label", `
nn...nn..nnnnnn..nnnnn...nnnnn....nnn...nn...nn..........nnnnn...nnnnnn..nn.....nn...nn..nnnnnn...nnn............nnnnn.....nn....nnnnnn.
nnn..nn....nn...nn...nn.nn...nn..nn.nn..nnn..nn.........nn...nn....nn....nn.....nn...nn....nn....nn.nn..........nn...nn...nnn.......nn..
nnnn.nn....nn...nn......nn......nn...nn.nnnn.nn.........nn.........nn....nn.....nn...nn....nn...nn...nn.........nn.........nn......nn...
nn.nnnn....nn....nnnnn...nnnnn..nn...nn.nn.nnnn..........nnnnn.....nn....nn.....nnn.nnn....nn...nn...nn..........nnnnn.....nn.....nnnn..
nn..nnn....nn........nn......nn.nnnnnnn.nn..nnn..............nn....nn....nn......nnnnn.....nn...nnnnnnn..............nn....nn........nn.
nn...nn....nn...nn...nn.nn...nn.nn...nn.nn...nn.........nn...nn....nn....nn.......nnn......nn...nn...nn.........nn...nn....nn...nn...nn.
nn...nn..nnnnnn..nnnnn...nnnnn..nn...nn.nn...nn..........nnnnn...nnnnnn..nnnnnn....n.....nnnnnn.nn...nn..........nnnnn...nnnnnn..nnnnn..
`)

const W = 280, H = 120, FR = 24, GROUND = 92
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) }
function pine(c, x, base, h, col) {           // stacked tiers, solid silhouette
  const tiers = 4
  for (let t = 0; t < tiers; t++) { const top = base - h + Math.floor(t * h / (tiers + 1)), bot = base - h + Math.floor((t + 2) * h / (tiers + 1))
    const half = Math.max(2, Math.floor((bot - (base - h)) / 3))
    c.poly([x, top, x - half, bot, x + half + 1, bot], col) }
  c.vline(x, base - 4, 4, col) }
const drops = []; { const r = rng(5); for (let i = 0; i < 70; i++) drops.push([Math.floor(r() * (W + 40)), Math.floor(r() * H)]) }
const splash = []; { const r = rng(9); for (let i = 0; i < 18; i++) splash.push([Math.floor(r() * W), GROUND + 2 + Math.floor(r() * 26), Math.floor(r() * FR)]) }

anim("rain", { w: W, h: H, frames: FR, fps: 12 },
  grad(0, 0, W, GROUND, "abcdef", "v", 0.6),
  (c) => {
    const r = rng(21)
    for (let x = -6; x < W + 6; x += 9) pine(c, x + Math.floor(r() * 5), GROUND - 18, 34 + Math.floor(r() * 18), "F")
    for (let x = -4; x < W + 4; x += 13) pine(c, x + Math.floor(r() * 6), GROUND - 4, 44 + Math.floor(r() * 26), "N")
    c.dither(0, GROUND - 6, W, 6, ".", "f", 0.25)                  // low fog over the road edge
    c.rect(0, GROUND, W, H - GROUND, "W")                           // wet asphalt
    // reflection of the car, darkened and broken by ripples
    c.stamp("s13", 77, GROUND - 3, { flip: "y", swap: { L: "S", B: "S", S: "M", M: "D", D: "d", h: "S", E: "M", C: "H", A: "M", t: "D", I: "M", e: "D" } })
    for (let y = GROUND + 2; y < H; y += 3) for (let x = ((y * 7 + c.frame * 2) % 12) - 12; x < W; x += 12) c.hline(x, y, 7, "r")
    c.dither(0, GROUND + 10, W, 4, ".", "W", 0.5); c.rect(0, GROUND + 14, W, H, "W")   // reflection fades out
    c.ellipse(140, GROUND + 1, 60, 2, "a")
    c.stamp("s13", 77, GROUND - 44)
    // rain + splashes
    for (const [x0, y0] of drops) { const y = (y0 + c.frame * 5) % H, x = x0 - Math.floor(y / 4)
      c.px(x, y, "w"); c.px(x - 1, y + 3, "w"); if (y < GROUND - 1) c.px(x, y + 1, "w") }
    for (const [sx, sy, t] of splash) { const p = (c.frame - t + FR) % FR
      if (p === 0) c.px(sx, sy, "x"); if (p === 1) { c.px(sx - 1, sy, "x"); c.px(sx + 1, sy, "x") } }
  },
  stamp("_title", 62, 6),
  stamp("_sub", 12, 34),
  stamp("_label", 72, 108),
)
