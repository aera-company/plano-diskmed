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

Apresentação executiva na **página inicial (`/`)**, em sete blocos (V03 · Executive Cut): ambição, diagnóstico, estratégia, execução, metas, roadmap e decisões. Detalhes técnicos ficam em componentes expansíveis (`More`, `<details>` nativo), que abrem sozinhos na impressão/PDF e quando um marcador aponta para um item dentro deles. Rotas:

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
├── pages/index.astro           # monta as seções e as interações (página inicial)
├── components/plan2027/        # seções e componentes reutilizáveis
│   ├── PlanNav · SectionHead · VRef · Badge · Icon · More (detalhe expansível)
│   ├── Opening (01 Ambição) · Diagnosis (02) · Levers (03 Estratégia)
│   └── Execution (04) · Goals (05 Metas) · Roadmap (06) · Closing (07 Decisões)
└── styles/plan2027.css         # tokens, marcadores, tabelas responsivas, impressão
```

### Como atualizar os dados (e acompanhar a execução em 2027)

Tudo fica em `src/data/plan2027.ts`. Depois de editar, rode `npm run build` (ou publique) para atualizar a página.

**Decisões pendentes (`validations`, V1–V10).** Cada premissa não confirmada aponta para uma decisão pelo campo `v` (ex.: `v: "V3"`) e aparece como um marcador discreto `V3`, que leva ao bloco "Decisões". As três decisões com `priority: true` aparecem em destaque (com a chamada curta `headline`); as demais ficam em "Outras definições operacionais". Quando a Diretoria decidir, mude `status` para `"Em análise"` ou `"Validado"`: o painel e os marcadores (que ficam verdes) se atualizam. Não há aprovação online: o arquivo é a fonte oficial.

| Campo      | Uso                                                                 |
| ---------- | ------------------------------------------------------------------- |
| `group`    | `financeiro`, `regras`, `metodologia` ou `operacional`              |
| `priority` | `true` nas decisões necessárias antes de iniciar a implantação     |
| `headline` | chamada curta da decisão prioritária no encerramento                |
| `status`   | `"Pendente"`, `"Em análise"` ou `"Validado"`                        |

**Roadmap (`quarters`).** Cada entregável tem `status`: `"Planejado"`, `"Em andamento"`, `"Concluído"` ou `"Em risco"`. O resumo abaixo do roadmap é calculado a partir desses valores; status diferentes de "Planejado" aparecem ao lado do entregável. `milestone` é o marco proposto de crescimento acumulado (não é faturamento realizado).

**Indicadores (`indicators`).** `current` (resultado atual) e `deviation` (desvio) ficam `null` e aparecem como "Não disponível" e "Não calculável". Preencha como texto (ex.: `"78%"`, `"-4 p.p."`) só quando houver dado apurado e validado; os valores aparecem no detalhe "Definições, resultado atual e desvio" do bloco Metas.

**Diagnóstico (`diagnostics`).** `category` define o grupo (`receita`, `cobertura`, `operacao`). `deadline` e `indicator` são propostos a partir do roadmap e da governança (decisão V10).

**Selos de status** (`Badge`), usados onde não há decisão pendente: `meta` (Meta proposta), `acao` (Ação planejada), `hipotese` (Hipótese), `observado` (Dado observado).

### Exportar / imprimir PDF

Botão "Exportar / Imprimir PDF" na barra e no fechamento → abre o diálogo nativo do navegador (`window.print()`), com layout de impressão em A4 (`@media print`). Escolha "Salvar como PDF" e ative "Gráficos de plano de fundo" se o navegador perguntar.

### Regras editoriais (master brief)

- Não inventar números, resultados, parcerias ou integrações concluídas.
- Teuto, Biosintética, EMS Genéricos e Medley são **alvos de negociação**, não parceiros.
- Integrações Pharmalink, SmartPed, Cote Fácil e portais associativistas **não estão implantadas**.
- Nenhum percentual de contribuição é atribuído às cinco frentes sem dados de base.
- Página marcada como `noindex` (documento interno).
