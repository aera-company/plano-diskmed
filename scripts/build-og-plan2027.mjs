// Gera a imagem de compartilhamento (OG) do Plano Comercial 2027.
// Lê o conteúdo de src/data/plan2027.ts, renderiza um card HTML 1200×630
// com a DM Sans real via Chrome headless e salva em public/og-plano-2027.png.
//
// Uso: node scripts/build-og-plan2027.mjs
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import {
  opening,
  docMeta,
  milestones,
} from "../src/data/plan2027.ts";

const root = decodeURIComponent(new URL("..", import.meta.url).pathname);
const b64 = (p) => readFileSync(join(root, p)).toString("base64");
const fontB64 = b64(
  "node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2"
);
const logoB64 = b64("public/images/logo-diskmed.png");

// Mini trajetória ilustrativa dos marcos acumulados propostos.
const pts = [{ q: "Início", value: 0 }, ...milestones];
const W = 400,
  H = 170,
  padX = 18,
  top = 28,
  base = 132;
const max = milestones[milestones.length - 1].value;
const x = (i) => padX + (i / (pts.length - 1)) * (W - padX * 2);
const y = (v) => base - (v / max) * (base - top);
const line = pts.map((p, i) => `${i ? "L" : "M"}${x(i)} ${y(p.value)}`).join(" ");
const area = `${line} L${x(pts.length - 1)} ${base} L${x(0)} ${base} Z`;
const chart = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8DC63F" stop-opacity=".34"/>
    <stop offset="1" stop-color="#8DC63F" stop-opacity="0"/></linearGradient></defs>
  <line x1="${padX}" x2="${W - padX}" y1="${base}" y2="${base}" stroke="rgba(255,255,255,.14)"/>
  <path d="${area}" fill="url(#a)"/>
  <path d="${line}" fill="none" stroke="#8DC63F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  ${pts
    .map(
      (p, i) => `<circle cx="${x(i)}" cy="${y(p.value)}" r="${i === pts.length - 1 ? 7 : 5}" fill="#164A1A" stroke="#8DC63F" stroke-width="3"/>
  ${i ? `<text x="${x(i)}" y="${y(p.value) - 14}" fill="#fff" font-size="15" font-weight="700" text-anchor="middle">+${p.value}%</text>` : ""}
  <text x="${x(i)}" y="${base + 24}" fill="rgba(255,255,255,.62)" font-size="12" font-weight="600" text-anchor="middle" letter-spacing=".06em">${p.q}</text>`
    )
    .join("")}
</svg>`;

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>
  @font-face{font-family:"DM Sans";src:url(data:font/woff2;base64,${fontB64}) format("woff2");font-weight:100 1000;font-display:block;}
  *{margin:0;box-sizing:border-box;}
  html,body{width:1200px;height:630px;}
  body{font-family:"DM Sans",sans-serif;color:#fff;overflow:hidden;position:relative;
    background:radial-gradient(110% 90% at 88% 8%, rgba(141,198,63,.18), transparent 58%),
      linear-gradient(180deg,#164A1A,#0F3412);
    padding:56px 72px 52px;display:grid;grid-template-rows:auto 1fr auto;}
  body::before{content:"";position:absolute;inset:0;
    background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
    background-size:72px 72px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 90%);}
  .top{position:relative;display:flex;justify-content:space-between;align-items:center;}
  .logo{display:inline-flex;padding:10px 16px;border-radius:14px;background:#fff;}
  .logo img{height:40px;width:auto;display:block;}
  .doc{text-align:right;font-size:14px;color:rgba(255,255,255,.7);letter-spacing:.04em;line-height:1.5;}
  .doc b{display:block;color:#fff;font-size:17px;font-weight:600;letter-spacing:0;}
  .mid{position:relative;display:grid;grid-template-columns:1.12fr .88fr;gap:48px;align-items:center;}
  .eyebrow{font-size:16px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8DC63F;margin-bottom:20px;}
  h1{font-size:60px;line-height:1.02;letter-spacing:-.04em;font-weight:600;max-width:15ch;text-wrap:balance;}
  .panel{border:1px solid rgba(255,255,255,.14);border-radius:20px;background:rgba(255,255,255,.05);padding:24px 26px 16px;}
  .kpi{display:flex;align-items:flex-end;gap:18px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.12);}
  .kpi .n{font-size:88px;font-weight:700;letter-spacing:-.05em;line-height:.85;}
  .kpi .m{display:grid;gap:9px;justify-items:start;padding-bottom:4px;}
  .kpi .l{font-size:14px;color:rgba(255,255,255,.8);line-height:1.35;max-width:17ch;}
  .chip{display:inline-flex;align-items:center;gap:7px;padding:5px 11px;border-radius:100px;
    background:#FDF3E1;color:#7A4A06;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}
  .chip::before{content:"";width:6px;height:6px;border-radius:50%;background:#E9A73A;}
  .panel svg{display:block;margin-top:6px;}
  .cap{font-size:11px;color:rgba(255,255,255,.62);margin-top:2px;}
  .foot{position:relative;display:flex;justify-content:space-between;align-items:center;
    padding-top:22px;border-top:1px solid rgba(255,255,255,.14);font-size:15px;}
  .foot b{font-weight:600;}
  .foot span{color:rgba(255,255,255,.66);}
  .nav{display:flex;gap:22px;color:rgba(255,255,255,.72);font-size:14px;letter-spacing:.04em;}
  .nav i{font-style:normal;color:#8DC63F;font-weight:700;margin-right:6px;}
</style></head><body>
  <div class="top">
    <span class="logo"><img src="data:image/png;base64,${logoB64}" alt="DiskMed Pádua"></span>
    <div class="doc"><b>${docMeta.title}</b>${docMeta.version}</div>
  </div>

  <div class="mid">
    <div>
      <p class="eyebrow">${opening.eyebrow}</p>
      <h1>${opening.headline}</h1>
    </div>
    <div class="panel">
      <div class="kpi">
        <span class="n">${opening.kpi.display}</span>
        <div class="m">
          <span class="l">${opening.kpi.label}</span>
          <span class="chip">${opening.kpi.note}</span>
        </div>
      </div>
      ${chart}
      <p class="cap">Ilustrativo · marcos acumulados propostos</p>
    </div>
  </div>

  <div class="foot">
    <div><b>${docMeta.author}</b> <span>· ${docMeta.authorRole}</span></div>
    <div class="nav"><span><i>02</i>Diagnóstico</span><span><i>03</i>Estratégia</span><span><i>07</i>Execução</span><span><i>08</i>Metas</span></div>
  </div>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), "og-plan-"));
const htmlPath = join(dir, "og.html");
writeFileSync(htmlPath, html);

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const out = join(root, "public", "og-plano-2027.png");

// Renderiza em 2× para nitidez; o downscale para 1200×630 é feito em seguida.
execFileSync(
  chrome,
  [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-sandbox",
    "--force-device-scale-factor=2",
    "--window-size=1200,630",
    "--virtual-time-budget=2000",
    `--screenshot=${out}`,
    `file://${htmlPath}`,
  ],
  { stdio: "ignore" }
);
execFileSync("sips", ["-z", "630", "1200", out], { stdio: "ignore" });

console.log("OG gerada em public/og-plano-2027.png (1200×630)");
