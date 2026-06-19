// Gera a imagem de compartilhamento (OG) 1200×630 renderizando um card HTML
// com a DM Sans real via Chrome headless. Saída: public/og.png
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = decodeURIComponent(new URL("..", import.meta.url).pathname);
const fontPath = join(
  root,
  "node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2"
);
const fontB64 = readFileSync(fontPath).toString("base64");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:"DM Sans";src:url(data:font/woff2;base64,${fontB64}) format("woff2");font-weight:100 1000;font-display:block;}
  *{margin:0;box-sizing:border-box;}
  html,body{width:1200px;height:630px;}
  body{font-family:"DM Sans",sans-serif;color:#fff;
    background:radial-gradient(120% 120% at 82% 0%, rgba(141,198,63,.18), transparent 55%), #0E3010;
    padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;}
  .glow{position:absolute;right:-160px;bottom:-220px;width:560px;height:560px;border-radius:50%;
    background:radial-gradient(circle, rgba(141,198,63,.16), transparent 70%);}
  .top{display:flex;align-items:center;gap:14px;}
  .mark{flex:none;}
  .wm{font-size:34px;font-weight:400;letter-spacing:-.03em;color:rgba(255,255,255,.92);line-height:1;}
  .wm b{font-weight:700;color:#fff;}
  .tag{display:block;font-size:13px;font-weight:600;letter-spacing:.34em;text-transform:uppercase;color:#8DC63F;margin-top:4px;}
  .eyebrow{display:inline-flex;align-items:center;gap:12px;font-size:18px;font-weight:500;letter-spacing:.14em;
    text-transform:uppercase;color:#8DC63F;margin-bottom:26px;}
  .eyebrow::before{content:"";width:11px;height:11px;border-radius:50%;background:#8DC63F;box-shadow:0 0 0 5px rgba(141,198,63,.18);}
  h1{font-size:62px;line-height:1.04;letter-spacing:-.035em;font-weight:600;max-width:18ch;}
  h1 span{color:#8DC63F;}
  .stats{display:flex;gap:54px;border-top:1px solid rgba(255,255,255,.14);padding-top:30px;}
  .stat .n{font-size:42px;font-weight:700;letter-spacing:-.04em;line-height:1;}
  .stat .n i{color:#8DC63F;font-style:normal;}
  .stat .l{font-size:16px;color:rgba(255,255,255,.6);margin-top:8px;text-transform:uppercase;letter-spacing:.06em;}
  .person{position:absolute;right:80px;top:72px;text-align:right;}
  .person .nm{font-size:18px;font-weight:600;color:#fff;}
  .person .rl{font-size:13px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.08em;margin-top:3px;}
</style></head><body>
  <div class="glow"></div>
  <div class="top">
    <svg class="mark" width="56" height="56" viewBox="0 0 40 40">
      <path d="M20 3C12 9 8 16 8 23a12 12 0 0 0 12 12 12 12 0 0 0 12-12c0-7-4-14-12-20Z" fill="#8DC63F"/>
      <path d="M20 3C12 9 8 16 8 23a12 12 0 0 0 12 12V3Z" fill="#2F6B1E"/>
      <path d="M20 11v16M13.5 19h13" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
    </svg>
    <div><span class="wm"><b>Disk</b>Med</span><span class="tag">Pádua</span></div>
  </div>

  <div class="person">
    <div class="nm">Jefferson Nascimento Lima</div>
    <div class="rl">Diretor Comercial · Consultor Estratégico</div>
  </div>

  <div>
    <span class="eyebrow">Proposta executiva · DiskMed Distribuidora</span>
    <h1>Acelerando o crescimento da DiskMed nos <span>canais que mais crescem.</span></h1>
  </div>

  <div class="stats">
    <div class="stat"><div class="n">40<i>+</i></div><div class="l">Anos de mercado</div></div>
    <div class="stat"><div class="n">246</div><div class="l">Lojas expandidas</div></div>
    <div class="stat"><div class="n"><i>R$</i> 24 <i>Bi</i></div><div class="l">Mercado RJ</div></div>
  </div>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), "og-"));
const htmlPath = join(dir, "og.html");
writeFileSync(htmlPath, html);

const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const out = join(root, "public", "og.png");

execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-sandbox",
  "--force-device-scale-factor=2",
  "--window-size=1200,630",
  `--screenshot=${out}`,
  `file://${htmlPath}`,
], { stdio: "inherit" });

console.log("OG image gerada em public/og.png");
