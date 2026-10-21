// ============================================================
// DiskMed Pádua — Plano de Ação Estratégico Comercial 2027
// Fonte única de conteúdo da apresentação (/plano-2027).
//
// Para atualizar a apresentação, edite APENAS este arquivo.
// Regras editoriais (do master brief):
//  - Não inventar números, resultados, parcerias ou integrações concluídas.
//  - Toda premissa não confirmada usa o status "validar".
//  - Diferenciar meta, hipótese, ação planejada, dado observado e pendência.
// ============================================================

export type Status = "meta" | "hipotese" | "acao" | "observado" | "validar";

export const STATUS_LABEL: Record<Status, string> = {
  meta: "Meta proposta",
  hipotese: "Hipótese",
  acao: "Ação planejada",
  observado: "Dado observado",
  validar: "A validar com a Diretoria",
};

export const STATUS_HINT: Record<Status, string> = {
  meta: "Objetivo numérico proposto pelo plano, ainda sujeito à aprovação.",
  hipotese: "Efeito esperado, ainda não medido.",
  acao: "Iniciativa prevista no cronograma de 2027.",
  observado: "Situação relatada pela Coordenação Comercial.",
  validar: "Premissa que depende de definição ou aprovação da Diretoria.",
};

/** Versão do documento — atualize ao receber os dados complementares. */
export const docMeta = {
  title: "Plano de Ação Estratégico Comercial 2027",
  company: "DiskMed Pádua",
  version: "V01 · Proposta para validação",
  author: "Jefferson Nascimento Lima",
  authorRole: "Coordenação Comercial",
};

// ---------- 00 · Abertura ----------
export const opening = {
  eyebrow: "DiskMed Pádua / Plano Comercial 2027",
  headline: "Crescer 15% exige mais do que vender mais.",
  sub: "Exige carteira ativa, operação fluida, representantes preparados e relacionamento estratégico com redes e indústria.",
  kpi: {
    value: 15,
    display: "+15%",
    label: "Meta proposta de crescimento em 2027",
    note: "Base de comparação a validar",
  },
};

/** Navegação âncora principal (barra fixa). */
export const navLinks = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#estrutura", label: "Estratégia" },
  { href: "#roadmap", label: "Execução" },
  { href: "#indicadores", label: "Metas" },
];

/** Sumário das 11 seções. */
export const agenda = [
  { num: "00", id: "abertura", label: "Abertura" },
  { num: "01", id: "visao", label: "Visão executiva" },
  { num: "02", id: "diagnostico", label: "Diagnóstico" },
  { num: "03", id: "estrutura", label: "Estrutura comercial" },
  { num: "04", id: "regras", label: "Regras operacionais" },
  { num: "05", id: "onboarding", label: "Onboarding" },
  { num: "06", id: "incentivos", label: "Incentivos" },
  { num: "07", id: "roadmap", label: "Roadmap 2027" },
  { num: "08", id: "indicadores", label: "Indicadores" },
  { num: "09", id: "governanca", label: "Governança" },
  { num: "10", id: "fechamento", label: "Fechamento" },
];

// ---------- 01 · Visão executiva ----------
export const pillars = [
  {
    num: "01",
    icon: "recover",
    title: "Recuperar receita",
    text: "Eliminar travamentos de faturamento e reativar clientes.",
  },
  {
    num: "02",
    icon: "expand",
    title: "Expandir cobertura",
    text: "Ampliar positivação e desenvolver representantes.",
  },
  {
    num: "03",
    icon: "network",
    title: "Acessar redes",
    text: "Fortalecer relações com redes independentes e associativistas.",
  },
  {
    num: "04",
    icon: "portfolio",
    title: "Ampliar portfólio",
    text: "Negociar novas indústrias e explorar o canal veterinário.",
  },
  {
    num: "05",
    icon: "discipline",
    title: "Disciplinar execução",
    text: "Treinamento, regras de carteira, reuniões e indicadores.",
  },
];

export const pillarsMessage =
  "A meta de 2027 depende da execução coordenada dessas frentes, não de uma única iniciativa.";

// ---------- 02 · Diagnóstico ----------
export type Priority = "Crítica" | "Alta";
export type Level = "Baixo" | "Médio" | "Alto";

export const diagnostics: {
  id: string;
  short: string;
  problem: string;
  effect: string;
  action: string;
  owners: string;
  priority: Priority;
  /** Classificação RECOMENDADA para a matriz impacto × esforço (não confirmada). */
  impact: Exclude<Level, "Baixo">;
  effort: Level;
}[] = [
  {
    id: "D1",
    short: "Cadastros e licenças",
    problem: "Cadastros desatualizados e licenças vencidas",
    effect: "Risco de bloqueio e perda de vendas.",
    action: "Auditoria cadastral e rotina de regularização.",
    owners: "Cadastro + Comercial",
    priority: "Alta",
    impact: "Alto",
    effort: "Médio",
  },
  {
    id: "D2",
    short: "FarmaHall e Rede Aliança",
    problem: "FarmaHall e Rede Aliança sem cadastro DiskMed",
    effect:
      "Potencial de contas a desenvolver, embora atendidas pela indústria.",
    action: "Validar condições de entrada e abrir tratativas.",
    owners: "Coordenação + Diretoria",
    priority: "Alta",
    impact: "Médio",
    effort: "Médio",
  },
  {
    id: "D3",
    short: "Pedidos NC / Multilab",
    problem: "Pedidos Grupo NC / Multilab travados",
    effect:
      "Pedido aparece como enviado e não evolui para faturado; a equipe de sell-out descontinua o acompanhamento.",
    action:
      "Reunião com Multilab, diagnóstico de status, dono do processo, SLA e monitoramento.",
    owners: "Comercial + Faturamento/TI + Sell-out",
    priority: "Crítica",
    impact: "Alto",
    effort: "Médio",
  },
  {
    id: "D4",
    short: "Integrações B2B",
    problem:
      "Ausência de integração com Pharmalink, SmartPed, Cote Fácil e portais de redes associativistas",
    effect: "Atrito no recebimento de pedidos.",
    action: "Levantamento técnico, priorização por volume e plano de integração.",
    owners: "TI + Comercial",
    priority: "Alta",
    impact: "Alto",
    effort: "Alto",
  },
  {
    id: "D5",
    short: "Relacionamento com redes",
    problem:
      "Baixa aproximação com gestores de redes independentes e associativismo",
    effect: "Menor acesso a negociações estruturadas.",
    action: "Agenda mensal de relacionamento.",
    owners: "Jefferson",
    priority: "Alta",
    impact: "Médio",
    effort: "Baixo",
  },
  {
    id: "D6",
    short: "Treinamento de representantes",
    problem: "Treinamento insuficiente de novos representantes",
    effect: "Maior risco de baixa produtividade e evasão.",
    action: "Onboarding de 5 dias + 3 dias em campo.",
    owners: "Coordenação + Padrinhos",
    priority: "Alta",
    impact: "Médio",
    effort: "Baixo",
  },
];

/** Fluxo do pedido — destaque do gargalo NC/Multilab. */
export const orderFlow = {
  steps: ["Recebido", "Enviado", "Validado", "Faturado"],
  /** Índice da etapa após a qual o pedido trava. */
  stuckAfter: 1,
  caption:
    "Grupo NC / Multilab: o pedido aparece como enviado e não evolui para faturado.",
};

// ---------- 03 · Estrutura comercial ----------
export const coordinator = {
  name: "Jefferson Lima",
  role: "Coordenador Comercial",
  duties: [
    { text: "Atuação em campo com representantes.", status: "acao" as Status },
    {
      text: "Reuniões mensais com gestores de redes independentes e associativistas.",
      status: "acao" as Status,
    },
    {
      text: "Identificação e seleção de novos representantes, com objetivo proposto de +20% de positivação até junho de 2027; definição da métrica e da baseline pendentes.",
      status: "validar" as Status,
    },
    {
      text: "Atuação conjunta com a Diretoria na prospecção de indústrias.",
      status: "acao" as Status,
    },
    {
      text: "Meta proposta: 2 novas indústrias até junho de 2027, sujeita a negociação e aprovação.",
      status: "meta" as Status,
    },
  ],
  /** Alvos de negociação — NÃO são parceiros fechados. */
  targetIndustries: ["Teuto", "Biosintética", "EMS Genéricos", "Medley"],
};

export const roles = [
  {
    tier: "Validação",
    name: "Diretoria",
    text: "Valida política comercial, exceções territoriais, investimentos, contratos com indústria e prioridades.",
  },
  {
    tier: "Coordenação",
    name: "Coordenação Comercial",
    text: "Jefferson Lima: campo, redes, seleção de representantes e prospecção de indústrias com a Diretoria.",
  },
  {
    tier: "Execução",
    name: "Representantes",
    text: "Gestão de carteira, cadastros, visitas, pedidos, positivação e mix.",
  },
  {
    tier: "Execução",
    name: "Cadastro / Faturamento / TI",
    text: "Regularidade documental, status dos pedidos e integrações.",
  },
  {
    tier: "Execução",
    name: "Sell-out / Indústria",
    text: "Acompanhamento de pedidos, desbloqueios e execução de ações conjuntas.",
  },
];

export const externalRelations = [
  "Redes independentes",
  "Redes associativistas",
  "Indústrias-alvo",
];

// ---------- 04 · Regras operacionais ----------
export const rules = [
  {
    key: "redes",
    title: "Redes independentes",
    value: "R$ 200",
    unit: "por filial / mês",
    label: "Faturamento mínimo proposto",
    text: "Após 3 meses consecutivos abaixo do piso: alerta e revisão da carteira pela Coordenação. Redistribuição somente após análise e validação.",
    status: "validar" as Status,
    pending: "Validar política, exceções e critério dos três meses.",
  },
  {
    key: "territorio",
    title: "Território",
    value: "180 km",
    unit: "da residência do representante",
    label: "Raio máximo proposto",
    text: "Exceções aprovadas pela Direção.",
    status: "validar" as Status,
    pending: "Validar método de medição e viabilidade logística.",
  },
  {
    key: "carteira",
    title: "Carteira",
    value: "80",
    unit: "CNPJs por representante",
    label: "Limite proposto",
    text: "Teto de carteira para preservar a qualidade de atendimento.",
    status: "validar" as Status,
    pending: "Validar exceções e carga real de atendimento.",
  },
  {
    key: "vet",
    title: "Canal veterinário",
    value: "2",
    unit: "clínicas por representante",
    label: "Objetivo até junho de 2027",
    text: "Cadastro de clínicas veterinárias por representante.",
    status: "validar" as Status,
    pending: "Validar habilitações e elegibilidade comercial.",
  },
  {
    key: "catalogo",
    title: "Catálogo",
    value: "PDF + Excel",
    unit: "a partir de março",
    label: "Portfólio por categoria e canal",
    text: "Catálogo digital organizado por categoria e canal, sem necessidade de impressão.",
    status: "acao" as Status,
    pending: "",
  },
];

export const reviewFlow = [
  "Alerta",
  "Análise",
  "Decisão",
  "Redistribuição, se aprovada",
];

// ---------- 05 · Onboarding ----------
export const onboardingOnline = [
  {
    day: "Dia 01",
    text: "Empresa, cultura DiskMed, sistema de pedidos e política comercial.",
  },
  {
    day: "Dia 02",
    text: "Portfólio por canal (farma e veterinário) e catálogo digital.",
  },
  {
    day: "Dia 03",
    text: "Cadastro de clientes, documentação obrigatória e licenças.",
  },
  {
    day: "Dia 04",
    text: "Abordagem, positivação, gestão da carteira de até 80 CNPJs e território de até 180 km.",
  },
  {
    day: "Dia 05",
    text: "Avaliação online e plano de metas do primeiro mês.",
  },
];

export const onboardingField = [
  {
    day: "Dia 01",
    verb: "Observar",
    text: "Abordagem, roteiro, catálogo e operação real.",
  },
  {
    day: "Dia 02",
    verb: "Participar",
    text: "Atuar na venda com supervisão.",
  },
  {
    day: "Dia 03",
    verb: "Executar",
    text: "Conduzir a venda; o padrinho corrige e dá feedback.",
  },
];

/** Checklist proposto para liberar a entrada em campo (critérios a validar). */
export const fieldChecklist = [
  "Concluiu os 5 dias da semana online.",
  "Aprovado na avaliação online do Dia 05.",
  "Plano de metas do primeiro mês definido.",
  "Carteira (até 80 CNPJs) e território (até 180 km) atribuídos.",
  "Padrinho designado para a imersão de 3 dias.",
];

/** Resultados esperados — HIPÓTESES, não resultados medidos. */
export const onboardingHypotheses = [
  "Reduzir a evasão nos primeiros 90 dias.",
  "Acelerar a primeira positivação.",
  "Melhorar a qualidade da abordagem inicial.",
];

// ---------- 06 · Incentivos ----------
export const incentives = [
  {
    num: "01",
    title: "Positivação",
    bands: ["65%", "75%", "acima de 82%"],
    text: "Faixas propostas de positivação.",
    pending: "Definir se são faixas de elegibilidade ou níveis de premiação.",
  },
  {
    num: "02",
    title: "Mix por indústria",
    bands: ["Metas por indústria", "Top 5"],
    text: "Prêmio extra condicionado a 100% da meta da indústria que disponibilizar verba.",
    pending: "Validar indústria, verba, cálculo e elegibilidade.",
  },
  {
    num: "03",
    title: "Inadimplência",
    bands: ["inferior a 2%"],
    text: "Meta de inadimplência da carteira.",
    pending:
      "Definir denominador, janela de apuração e responsabilidade do representante.",
  },
];

export const incentivesMechanicNote =
  "Valores de bônus, pesos percentuais e fórmula final não foram definidos e não são apresentados nesta versão.";

// ---------- 07 · Roadmap 2027 ----------
export const months = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
];

export const roadmap: {
  period: string;
  /** Mês inicial e final (1–12), para o eixo do cronograma. */
  from: number;
  to: number;
  items: { text: string; status: Status }[];
}[] = [
  {
    period: "Janeiro–Fevereiro",
    from: 1,
    to: 2,
    items: [
      { text: "Mapear endereço e cobertura dos representantes.", status: "acao" },
      { text: "Instituir reunião semanal online, segunda-feira às 8h.", status: "acao" },
      { text: "Emitir relatório de clientes sem compras há 90 dias.", status: "acao" },
      {
        text: "Reunir a equipe de sell-out Multilab para diagnosticar e destravar o faturamento.",
        status: "acao",
      },
    ],
  },
  {
    period: "Março–Abril",
    from: 3,
    to: 4,
    items: [
      {
        text: "Implantar, após aprovação, revisão de carteiras com piso proposto de R$ 200/filial/mês.",
        status: "validar",
      },
      {
        text: "Lançar programa de premiação por positivação após validação das regras.",
        status: "validar",
      },
      {
        text: "Iniciar regularização cadastral, com objetivo proposto de 100% da base elegível regularizada; confirmar prazo e definição.",
        status: "validar",
      },
      {
        text: "Iniciar priorização e implantação das integrações Pharmalink, SmartPed, Cote Fácil e portais associativistas, conforme viabilidade técnica.",
        status: "validar",
      },
      { text: "Publicar catálogo digital segmentado a partir de março.", status: "acao" },
    ],
  },
  {
    period: "Maio–Junho",
    from: 5,
    to: 6,
    items: [
      { text: "Consolidar acompanhamento semanal de metas e produtividade.", status: "acao" },
      {
        text: "Desenvolver novos representantes e positivação, com objetivo de +20% até junho (métrica a validar).",
        status: "validar",
      },
      { text: "Buscar fechamento de duas novas indústrias até junho.", status: "meta" },
      {
        text: "Cadastrar pelo menos duas clínicas veterinárias por representante, sujeito a elegibilidade.",
        status: "validar",
      },
    ],
  },
  {
    period: "Julho–Setembro",
    from: 7,
    to: 9,
    items: [
      { text: "Aprofundar cobertura de redes e recuperação de clientes inativos.", status: "acao" },
      { text: "Monitorar ticket, mix, inadimplência e SLA de faturamento.", status: "acao" },
      { text: "Ajustar territórios e carteiras conforme evidências e aprovação.", status: "acao" },
    ],
  },
  {
    period: "Outubro–Dezembro",
    from: 10,
    to: 12,
    items: [
      { text: "Consolidar expansão e performance de fim de ano.", status: "acao" },
      { text: "Avaliar resultados por canal, região, indústria e representante.", status: "acao" },
      { text: "Preparar plano de continuidade para 2028.", status: "acao" },
    ],
  },
];

/** Marcos trimestrais PROPOSTOS de crescimento ACUMULADO (não são resultados). */
export const milestones = [
  { q: "Q1", months: "Jan–Mar", from: 1, to: 3, value: 3 },
  { q: "Q2", months: "Abr–Jun", from: 4, to: 6, value: 7 },
  { q: "Q3", months: "Jul–Set", from: 7, to: 9, value: 11 },
  { q: "Q4", months: "Out–Dez", from: 10, to: 12, value: 15 },
];

export const milestonesNote =
  "Metas propostas de crescimento acumulado sobre a base a validar. Não representam resultados alcançados nem crescimento trimestral isolado.";

// ---------- 08 · Painel de indicadores ----------
export type IndicatorState = "definida" | "pendente" | "semBaseline";

export const INDICATOR_STATE_LABEL: Record<IndicatorState, string> = {
  definida: "Meta definida",
  pendente: "Definição pendente",
  semBaseline: "Sem baseline",
};

export const indicators: {
  name: string;
  target: string;
  definition: string;
  states: IndicatorState[];
}[] = [
  {
    name: "Crescimento anual",
    target: "+15%",
    definition:
      "Confirmar faturamento líquido ou bruto, base 2026 e comparabilidade.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Positivação",
    target: "82%",
    definition:
      "Proposta: clientes elegíveis com ao menos uma compra faturada no mês ÷ clientes elegíveis da carteira; validar.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Expansão de positivação até junho",
    target: "+20%",
    definition:
      "Definir se é percentual relativo, pontos percentuais ou número absoluto de clientes.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Ticket médio",
    target: "+10%",
    definition: "Definir cálculo, período e baseline.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Inadimplência",
    target: "<2%",
    definition: "Definir carteira, atraso e denominador.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Cobertura de redes",
    target: "70%",
    definition: "Definir universo de redes e conceito de cobertura.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Novos cadastros",
    target: "2 por representante/mês",
    definition: "Definir cadastro aprovado versus primeiro pedido.",
    states: ["definida", "pendente"],
  },
  {
    name: "Tempo de faturamento Farma",
    target: "<24h",
    definition: "Definir início/fim, horário útil e exceções.",
    states: ["definida", "pendente", "semBaseline"],
  },
  {
    name: "Novas indústrias até junho",
    target: "2",
    definition:
      "Contratos efetivamente assinados, sujeitos a negociação.",
    states: ["definida", "pendente"],
  },
  {
    name: "Clínicas veterinárias até junho",
    target: "2 por representante",
    definition: "Definir cadastro válido e canal habilitado.",
    states: ["definida", "pendente"],
  },
];

export const routine = [
  {
    when: "Segunda-feira, 8h",
    cadence: "Semanal",
    title: "Acompanhamento operacional",
    text: "Reunião online: carteira, pedidos, positivação e pendências da semana.",
  },
  {
    when: "Fechamento do mês",
    cadence: "Mensal",
    title: "Fechamento executivo",
    text: "Painel de metas e desvios com a Diretoria.",
  },
];

// ---------- 09 · Governança ----------
export const governance = [
  {
    front: "Carteira e representantes",
    owner: "Coordenação Comercial",
    cadence: "Semanal",
    evidence: "Mapa de carteira, agenda e positivação.",
  },
  {
    front: "Pedidos travados",
    owner: "Faturamento/TI + Comercial + Sell-out",
    cadence: "Semanal até estabilização",
    evidence: "Relatório de pedidos enviados x faturados.",
  },
  {
    front: "Cadastros e licenças",
    owner: "Cadastro + Comercial",
    cadence: "Quinzenal",
    evidence: "% de clientes elegíveis regulares.",
  },
  {
    front: "Redes e contas estratégicas",
    owner: "Jefferson + Diretoria",
    cadence: "Mensal",
    evidence: "Reuniões, propostas e ativações.",
  },
  {
    front: "Indústrias",
    owner: "Jefferson + Diretoria",
    cadence: "Mensal",
    evidence: "Pipeline de negociação e contratos.",
  },
  {
    front: "Indicadores",
    owner: "Coordenação + Diretoria",
    cadence: "Mensal",
    evidence: "Painel de metas e desvios.",
  },
];

export const decisionFlow = ["Decisão", "Responsável", "Prazo", "Evidência"];

// ---------- 10 · Fechamento ----------
export const closing = {
  headline:
    "Crescimento sustentável é resultado de uma operação comercial que funciona todos os dias.",
  text: "O plano combina regularização da base, expansão de cobertura, relacionamento com redes e indústria, formação de representantes e acompanhamento de indicadores. O objetivo é transformar oportunidades já identificadas em execução mensurável ao longo de 2027.",
  cta: "Validar premissas e aprovar plano de implantação",
};

// ---------- Premissas a validar / Decisões pendentes da Diretoria ----------
// Edite o campo `status` quando cada ponto for decidido.
// Não há persistência nem aprovação online: este arquivo é a fonte oficial.
export type ValidationStatus = "Pendente" | "Em análise" | "Validado";

export const validations: {
  num: number;
  title: string;
  detail: string;
  status: ValidationStatus;
}[] = [
  {
    num: 1,
    title: "Base da meta de +15%",
    detail:
      "Faturamento líquido de 2026 é a recomendação inicial, mas depende de aprovação. Confirmar se as metas Q1–Q4 são crescimento acumulado versus o mesmo período de 2026 ou outra base.",
    status: "Pendente",
  },
  {
    num: 2,
    title: "Positivação de 82%",
    detail:
      "Confirmar fórmula, elegibilidade, período e tratamento de redes com múltiplos CNPJs.",
    status: "Pendente",
  },
  {
    num: 3,
    title: "Piso de R$ 200/filial/mês",
    detail:
      "Confirmar política, exceções, critério de três meses e aprovação da redistribuição.",
    status: "Pendente",
  },
  {
    num: 4,
    title: "+20% de positivação até junho",
    detail:
      "Definir base, método e se equivale a crescimento de clientes positivados ou da taxa de positivação.",
    status: "Pendente",
  },
  {
    num: 5,
    title: "Ticket +10%, inadimplência <2%, cobertura de redes 70%",
    detail: "Validar definições e fontes de dados.",
    status: "Pendente",
  },
  {
    num: 6,
    title: "Metas de indústria e veterinário",
    detail: "Confirmar elegibilidade, portfólio e aprovação comercial.",
    status: "Pendente",
  },
  {
    num: 7,
    title: "Integrações B2B",
    detail:
      "Confirmar APIs, credenciais, contratos e prioridades. As integrações não estão implantadas.",
    status: "Pendente",
  },
  {
    num: 8,
    title: "Responsáveis e datas",
    detail:
      "Confirmar áreas, pessoas e orçamento antes da implantação.",
    status: "Pendente",
  },
];
