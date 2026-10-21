# landingbase

Base minimalista para criação de landing pages — **Astro** estático, sem framework de CSS, otimizada para nota máxima em performance, acessibilidade, boas práticas e SEO.

Cada novo projeto parte deste repositório. Estilos e componentes específicos são adicionados depois, conforme a necessidade.

## Stack

- **Astro** (saída estática, zero JS por padrão)
- Reset CSS mínimo em `src/styles/global.css`
- Sem dependências opinativas

## Comandos

| Comando           | Ação                                  |
| ----------------- | ------------------------------------- |
| `npm install`     | Instala as dependências               |
| `npm run dev`     | Servidor de desenvolvimento (`:4321`) |
| `npm run build`   | Build estático em `./dist/`           |
| `npm run preview` | Pré-visualiza o build local           |

## Estrutura

```
src/
├── layouts/Layout.astro   # <head> com meta tags essenciais (SEO/A11y)
├── pages/index.astro      # página inicial (Plano Comercial 2027)
├── pages/proposta.astro   # proposta comercial anterior
└── styles/global.css      # reset mínimo
public/
├── favicon.svg
└── robots.txt
```

## Deploy

Conectar o repositório no [Vercel](https://vercel.com/new) — detecção automática do Astro, sem configuração. Cada push no GitHub publica.

---

## DiskMed Pádua — Plano Estratégico Comercial 2027

Apresentação executiva na **página inicial (`/`)**. Rotas:

| Rota          | Conteúdo                                                   |
| ------------- | ---------------------------------------------------------- |
| `/`           | Plano Estratégico Comercial 2027 (`src/pages/index.astro`) |
| `/proposta`   | Proposta comercial anterior (`src/pages/proposta.astro`)   |
| `/plano-2027` | Redireciona para `/` (links antigos continuam funcionando) |

```bash
npm install
npm run dev      # abra http://localhost:4321
npm run build    # gera dist/index.html
```

### Imagem de compartilhamento

`public/og-plano-2027.png` (1200×630) é gerada a partir de `src/data/plan2027.ts`. Depois de alterar título, meta ou marcos, regenere:

```bash
node scripts/build-og-plan2027.mjs
```

Para o link exibir a imagem em WhatsApp/LinkedIn, defina o domínio em `site` no `astro.config.mjs` (as meta tags passam a usar URL absoluta).

### Onde está cada coisa

```
src/
├── data/plan2027.ts            # TODO o conteúdo do plano (edite só aqui)
├── pages/index.astro           # monta as 11 seções (página inicial)
├── components/plan2027/        # seções e componentes reutilizáveis
│   ├── PlanNav · SectionHead · Badge · Icon
│   ├── Opening (00) · Overview (01) · Diagnosis (02) · Structure (03)
│   ├── Rules (04) · Onboarding (05) · Incentives (06) · Roadmap (07)
│   └── Indicators (08) · Governance (09) · Closing (10)
└── styles/plan2027.css         # tokens, selos, tabelas responsivas, impressão
```

### Como atualizar os dados

Tudo fica em `src/data/plan2027.ts`. Cada informação carrega um **status**, que define o selo exibido:

| Status      | Selo                       | Uso                                         |
| ----------- | -------------------------- | ------------------------------------------- |
| `meta`      | Meta proposta              | Objetivo numérico proposto, ainda a aprovar |
| `acao`      | Ação planejada             | Iniciativa prevista no cronograma           |
| `hipotese`  | Hipótese                   | Efeito esperado, não medido                 |
| `observado` | Dado observado             | Situação relatada pela Coordenação          |
| `validar`   | A validar com a Diretoria  | Premissa que depende de decisão             |

- **Premissas / decisões pendentes:** array `validations`. Mude `status` para `"Em análise"` ou `"Validado"` conforme a Diretoria decidir; o contador e a pílula flutuante se atualizam no build. Não há aprovação online — o arquivo é a fonte oficial.
- **Indicadores:** array `indicators`. O campo `states` aceita `definida`, `pendente` e `semBaseline`. Quando houver baseline, remova `semBaseline`; o atingimento atual **não** é exibido nesta V01.
- **Marcos Q1–Q4:** array `milestones` (crescimento acumulado proposto).
- **Matriz impacto × esforço:** campos `impact`/`effort` em `diagnostics` (classificação recomendada).

### Exportar / imprimir PDF

Botão "Exportar / Imprimir PDF" na barra e no fechamento → abre o diálogo nativo do navegador (`window.print()`), com layout de impressão em A4 (`@media print`). Escolha "Salvar como PDF" e ative "Gráficos de plano de fundo" se o navegador perguntar.

### Regras editoriais (master brief)

- Não inventar números, resultados, parcerias ou integrações concluídas.
- Teuto, Biosintética, EMS Genéricos e Medley são **alvos de negociação**, não parceiros.
- Integrações Pharmalink, SmartPed, Cote Fácil e portais associativistas **não estão implantadas**.
- Página marcada como `noindex` (documento interno).
