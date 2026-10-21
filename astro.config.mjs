// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Defina o domínio de produção para gerar canonical/OG absolutos:
  // site: "https://seu-dominio.com",

  // O plano 2027 agora é a página inicial; links antigos continuam válidos.
  redirects: {
    "/plano-2027": "/",
  },
});
