// Waysel profile header: a slammed S13 parked on a wet road in a misty pine forest, in the rain.
// Built with pxl.
pal({
  k: "#0c0f14", B: "#8d97ab", l: "#b9c1d0", L: "#dde2ea", S: "#5f6880", M: "#3f465a", D: "#262b38",
  v: "#151a24", V: "#55627a", g: "#c9ccd4", G: "#2b2e37", O: "#1a1c22", H: "#6c707c",
  h: "#e8ecf2", A: "#e8a13a", E: "#eef0f0", t: "#c43a3a",
  a: "#0b1510", b: "#0f1d16", c: "#14261c", d: "#1a3124", e: "#213d2d",
  F: "#17291f", N: "#0a140f", f: "#34594a", w: "#7f9d8d", W: "#0a120e", r: "#13201a",
  T: "#eef3ee", o: "#0a1a12", s: "#9fc4ad", n: "#c9d6cc", x: "#a8c2b4",
})
function wheel(c, x, y, rx, ry) {
  c.ellipse(x, y, rx + 1, ry + 1, "k")            // arch shadow / tyre
  c.ellipse(x, y, rx, ry, "g")                    // polished lip
  c.ellipse(x + 1, y, rx - 2, ry - 2, "G")        // dark gunmetal face
  for (let i = 0; i < 5; i++) { const a = i * 2 * Math.PI / 5 - 0.3
    c.line(x + 1, y, x + 1 + Math.round(Math.cos(a) * (rx - 3)), y + Math.round(Math.sin(a) * (ry - 3)), "H") }
  c.px(x + 1, y, "g")
  c.px(x - rx + 1, y - 2, "E"); c.px(x - rx + 1, y - 1, "E")   // lip glint
}
sprite("s13", { w: 122, h: 46, outline: "k" },
  (c) => { c.ellipse(113, 33, 2, 4, "O"); wheel(c, 22, 34, 6, 7); wheel(c, 72, 37, 7, 8) },  // wheels first: fenders tuck over them
  poly([2,19, 5,16, 24,15, 28,19], "l"),                      // trunk top
  poly([2,19, 84,21, 86,35, 4,31], "B"),                      // side
  poly([84,21, 118,21, 118,28, 86,35], "S"),                  // front face
  poly([62,17, 94,15, 118,21, 84,21], "l"),                   // hood
  poly([27,18, 39,10, 60,10, 64,17], "v"),                     // side glass
  poly([39,10, 46,5, 73,5, 62,10], "L"),                       // roof
  poly([62,10, 73,5, 94,15, 64,17], "v"),                      // windshield
  line(72, 8, 82, 13, "V"), line(76, 8, 86, 13, "V"),
  line(44, 12, 50, 10, "V"),
  vline(47, 10, 8, "k"),
  line(2, 19, 84, 21, "L"),
  recolor({ B: "S" }, [0, 27, 90, 12]),
  line(4, 28, 85, 32, "M"), line(4, 29, 85, 33, "D"),
  line(47, 20, 48, 29, "M"), line(65, 20, 66, 31, "M"),
  hline(53, 23, 3, "M"),
  poly([62,15, 66,14, 67,17, 63,17], "B"),
  line(87, 23, 117, 22, "h"), line(87, 24, 117, 23, "M"),
  px(87, 23, "A"), px(117, 22, "A"),
  line(89, 26, 116, 25, "D"),
  poly([90,30, 115,28, 115,30, 91,32], "D"),
  rect(103, 26, 7, 3, "E"), hline(104, 27, 5, "M"),
  line(86, 35, 119, 29, "k"),
  rect(2, 21, 2, 3, "t"),
)

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
    c.stamp("s13", 78, GROUND - 3, { flip: "y", swap: { L: "B", l: "S", B: "S", S: "M", M: "D", h: "l", E: "S", g: "H", A: "M", t: "D", V: "M" } })
    for (let y = GROUND + 2; y < H; y += 3) for (let x = ((y * 7 + c.frame * 2) % 12) - 12; x < W; x += 12) c.hline(x, y, 7, "r")
    c.ellipse(140, GROUND + 1, 58, 2, "a")
    c.stamp("s13", 78, GROUND - 44)
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
