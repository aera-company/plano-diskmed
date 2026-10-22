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

Apresentação executiva na **página inicial (`/`)**, em sete blocos (V04 · Executive Cut, 6 a 8 minutos): ambição, diagnóstico, estratégia, execução, metas, roadmap e decisões. Na tela, os detalhes técnicos ficam em painéis expansíveis (`More`, `<details>` nativo), que abrem sozinhos quando um marcador aponta para um item dentro deles. No PDF, os painéis saem da apresentação e entram dois anexos no fim (`Annex.astro`): **Anexo 1 · Propostas para validação da Diretoria** (propostas V1–V10 com "Aprovo / Aprovo com ajuste / Não aprovo", dados que a DiskMed libera e definições comerciais — `PendingForm.astro`, conteúdo em `validations[].proposal`, `pendingData` e `pendingOps`) e **Anexo 2 · Detalhes operacionais**. Rotas:

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
│   ├── Execution (04) · Goals (05 Metas) · Roadmap (06) · Closing (07 Decisões)
│   ├── Annex (anexo do PDF)
│   └── details/                # conteúdo dos painéis, usado na tela e no anexo
│       └── DiagDetails · OpsDetails · GoalDetails · RoadmapDetails · OtherDecisions
└── styles/plan2027.css         # tokens, marcadores, tabelas responsivas, impressão
```

### Como atualizar os dados (e acompanhar a execução em 2027)

Tudo fica em `src/data/plan2027.ts`. Depois de editar, rode `npm run build` (ou publique) para atualizar a página.

**Decisões pendentes (`validations`, V1–V10).** Cada premissa não confirmada aponta para uma decisão pelo campo `v` (ex.: `v: "V3"`) e aparece como um ponto âmbar discreto (sem o código), que leva ao bloco "Decisões"; o código `V3` só aparece nos painéis de detalhe e no anexo (`<VRef code />`). As três decisões com `priority: true` aparecem em destaque (com a chamada curta `headline`); as demais ficam em "Outras definições operacionais". Quando a Diretoria decidir, mude `status` para `"Em análise"` ou `"Validado"`: o painel e os marcadores (que ficam verdes) se atualizam. Não há aprovação online: o arquivo é a fonte oficial.

| Campo      | Uso                                                                 |
| ---------- | ------------------------------------------------------------------- |
| `group`    | `financeiro`, `regras`, `metodologia` ou `operacional`              |
| `priority` | `true` nas decisões necessárias antes de iniciar a implantação     |
| `headline` | chamada curta da decisão prioritária no encerramento                |
| `status`   | `"Pendente"`, `"Em análise"` ou `"Validado"`                        |

**Roadmap (`quarters`).** Cada entregável tem `status`: `"Planejado"`, `"Em andamento"`, `"Concluído"` ou `"Em risco"`. O resumo abaixo do roadmap é calculado a partir desses valores; status diferentes de "Planejado" aparecem ao lado do entregável. `milestone` é o marco proposto de crescimento acumulado (não é faturamento realizado).

**Indicadores (`indicators`).** `current` (resultado atual) e `deviation` (desvio) ficam `null` e aparecem como "Não disponível" e "Não calculável". Preencha como texto (ex.: `"78%"`, `"-4 p.p."`) só quando houver dado apurado e validado; os valores aparecem no detalhe "Definições, resultado atual e desvio" do bloco Metas.

**Textos curtos (V04).** A apresentação usa versões curtas: `diagnostics[].short` (problema · ação principal), `levers[].summary` e `leadership.axes[].label`/`short`. Os textos completos continuam nos mesmos objetos e aparecem nos painéis e no anexo. O roadmap mostra até três entregáveis por trimestre; os demais ficam no "Cronograma completo".

**Diagnóstico (`diagnostics`).** `category` define o grupo (`receita`, `cobertura`, `operacao`). `deadline` e `indicator` são propostos a partir do roadmap e da governança (decisão V10).

**Selos de status** (`Badge`), usados onde não há decisão pendente: `meta` (Meta proposta), `acao` (Ação planejada), `hipotese` (Hipótese), `observado` (Dado observado).

### Movimento (V05)

Uma única linguagem, definida em `src/styles/plan2027.css`: curva `--m-ease`, entradas de `--m-in` (600 ms), microinterações de `--m-micro` (200 ms), infográficos de `--m-info` (900 ms) e `--m-step` (90 ms) entre elementos. Só `transform` e `opacity`, cada elemento anima uma vez (IntersectionObserver em `src/scripts/main.js`, `[data-reveal]` para entradas e `[data-motion]` para infográficos). O estado inicial oculto só existe em `@media screen`, com a classe `.m-on` (ligada antes da primeira pintura em `index.astro`) e sem `prefers-reduced-motion`: sem JS, com movimento reduzido ou na impressão, tudo aparece direto. O contador do +15% no hero roda uma vez e é fixado no valor final antes de imprimir.

### Questionário de pendências → WhatsApp

O botão "Validar propostas" (barra e encerramento) abre uma janela (`ExportDialog.astro`) com duas opções: **Baixar PDF** ou **validar as propostas** (o mesmo conteúdo do Anexo 1: decisão e comentário por proposta, quem envia cada dado). O formulário traz só o que a DiskMed valida; o material de apoio do Jefferson fica fora do site. "Enviar pelo WhatsApp" monta uma mensagem só com os itens respondidos e abre o WhatsApp do destinatário (`answersContact` em `plan2027.ts`) já com o texto; quem responde confirma o envio no próprio WhatsApp. Não há servidor nem banco: nada é gravado pelo site. O rascunho fica só no navegador de quem responde (`localStorage`) e pode ser apagado em "Limpar".

### Exportar / imprimir PDF

Botão "Validar propostas" → "Baixar PDF" abre o diálogo nativo do navegador (`window.print()`), com layout de impressão em A4 (`@media print`). Escolha "Salvar como PDF" e ative "Gráficos de plano de fundo" se o navegador perguntar.

### Regras editoriais (master brief)

- Não inventar números, resultados, parcerias ou integrações concluídas.
- Teuto, Biosintética, EMS Genéricos e Medley são **alvos de negociação**, não parceiros.
- Integrações Pharmalink, SmartPed, Cote Fácil e portais associativistas **não estão implantadas**.
- Nenhum percentual de contribuição é atribuído às cinco frentes sem dados de base.
- Página marcada como `noindex` (documento interno).
