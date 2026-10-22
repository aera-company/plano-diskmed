// ============================================================
// DiskMed Pádua — Plano de Ação Estratégico Comercial 2027 · V05
// Fonte única de conteúdo da apresentação (página inicial).
//
// Para atualizar a apresentação, edite APENAS este arquivo.
// Regras editoriais (master brief V01 + V02 + V03/V04 · Executive Cut):
//  - Não inventar números, resultados, parcerias ou integrações concluídas.
//  - Premissa não confirmada aponta para uma decisão em `validations`
//    pelo campo `v` (ex.: v: "V1"), exibida como marcador discreto.
//  - Diferenciar meta, hipótese, ação planejada, dado observado e pendência.
//  - Resultado atual e desvio só são exibidos quando informados.
// ============================================================

export type Status = "meta" | "hipotese" | "acao" | "observado" | "validar";

export const STATUS_LABEL: Record<Status, string> = {
  meta: "Meta proposta",
  hipotese: "Hipótese",
  acao: "Ação planejada",
  observado: "Dado observado",
  validar: "Proposta · aguardando validação",
};

export const STATUS_HINT: Record<Status, string> = {
  meta: "Objetivo numérico proposto pelo plano, ainda sujeito à aprovação.",
  hipotese: "Efeito esperado, ainda não medido.",
  acao: "Iniciativa prevista no cronograma de 2027.",
  observado: "Situação relatada pela Coordenação Comercial.",
  validar: "Proposta do plano que aguarda a validação da Diretoria.",
};

/** Identificador de uma decisão pendente (ver `validations`). */
export type VId =
  | "V1" | "V2" | "V3" | "V4" | "V5"
  | "V6" | "V7" | "V8" | "V9" | "V10";

/** Versão do documento — atualize ao receber os dados complementares. */
export const docMeta = {
  title: "Plano de Ação Estratégico Comercial 2027",
  company: "DiskMed Pádua",
  version: "V05 · Proposta para validação",
  author: "Jefferson Nascimento Lima",
  authorRole: "Coordenação Comercial",
};

// ---------- 00 · Abertura ----------
export const opening = {
  eyebrow: "DiskMed Pádua / Plano Comercial 2027",
  headline: "Crescer 15% exige mais do que vender mais.",
  /** A mesma frase em blocos, para a entrada do hero (V05). */
  headlineLines: ["Crescer 15% exige mais", "do que vender mais."],
  sub: "Exige carteira ativa, operação fluida, representantes preparados e relacionamento estratégico com redes e indústria.",
  kpi: {
    value: 15,
    display: "+15%",
    label: "Meta proposta de crescimento em 2027",
    note: "Base de comparação 2026 proposta",
    v: "V1" as VId,
  },
};

/** Os sete blocos da apresentação (V03). A barra fixa mostra do 02 ao 07. */
export const agenda = [
  { num: "01", id: "ambicao", label: "Ambição 2027" },
  { num: "02", id: "diagnostico", label: "Diagnóstico" },
  { num: "03", id: "estrategia", label: "Estratégia" },
  { num: "04", id: "execucao", label: "Execução" },
  { num: "05", id: "metas", label: "Metas" },
  { num: "06", id: "roadmap", label: "Roadmap" },
  { num: "07", id: "decisoes", label: "Decisões" },
];

/** Navegação âncora principal (barra fixa). */
export const navLinks = agenda.slice(1).map((a) => ({ href: `#${a.id}`, label: a.label }));

// ---------- 01 · Diagnóstico ----------
export type DiagnosticCategory = "receita" | "cobertura" | "operacao";

export const diagnosticCategories: {
  key: DiagnosticCategory;
  title: string;
  text: string;
}[] = [
  {
    key: "receita",
    title: "Receita",
    text: "Vendas e faturamento já existentes em risco.",
  },
  {
    key: "cobertura",
    title: "Cobertura",
    text: "Contas e redes ainda não desenvolvidas.",
  },
  {
    key: "operacao",
    title: "Operação",
    text: "Pedidos e equipe com atrito de execução.",
  },
];

export type Priority = "Crítica" | "Alta";

/**
 * Matriz de decisão. Problema, impacto, ação e responsável vêm do plano V01.
 * Prazo e indicador são PROPOSTOS a partir do roadmap e da governança (V10).
 */
export const diagnostics: {
  id: string;
  category: DiagnosticCategory;
  problem: string;
  /** V04: versão curta exibida na apresentação (problema · ação principal). */
  short: { problem: string; action: string };
  impact: string;
  action: string;
  owners: string;
  deadline: string;
  indicator: string;
  priority: Priority;
  v?: VId;
}[] = [
  {
    id: "D3",
    short: { problem: "Pedidos NC / Multilab travados", action: "Tratativa com dono, SLA e monitoramento" },
    category: "receita",
    problem: "Pedidos Grupo NC / Multilab travados",
    impact:
      "O pedido aparece como enviado e não evolui para faturado; o sell-out descontinua o acompanhamento.",
    action:
      "Reunião com Multilab, diagnóstico de status, dono do processo, SLA e monitoramento.",
    owners: "Comercial + Faturamento/TI + Sell-out",
    deadline: "Q1 · tratativa em jan–fev",
    indicator: "Pedidos enviados × faturados; tempo de resolução",
    priority: "Crítica",
  },
  {
    id: "D1",
    short: { problem: "Cadastros desatualizados e licenças vencidas", action: "Auditoria e rotina de regularização" },
    category: "receita",
    problem: "Cadastros desatualizados e licenças vencidas",
    impact: "Risco de bloqueio e perda de vendas.",
    action: "Auditoria cadastral e rotina de regularização.",
    owners: "Cadastro + Comercial",
    deadline: "Q2 · conclusão a confirmar",
    indicator: "% de clientes elegíveis regulares",
    priority: "Alta",
    v: "V10",
  },
  {
    id: "D2",
    short: { problem: "FarmaHall e Rede Aliança sem cadastro", action: "Validar entrada e abrir tratativas" },
    category: "cobertura",
    problem: "FarmaHall e Rede Aliança sem cadastro DiskMed",
    impact:
      "Potencial de contas a desenvolver, embora atendidas pela indústria.",
    action: "Validar condições de entrada e abrir tratativas.",
    owners: "Coordenação + Diretoria",
    deadline: "A definir com a Diretoria",
    indicator: "Propostas e ativações de contas",
    priority: "Alta",
    v: "V10",
  },
  {
    id: "D5",
    short: { problem: "Pouco acesso a gestores de redes", action: "Agenda mensal de relacionamento" },
    category: "cobertura",
    problem:
      "Baixa aproximação com gestores de redes independentes e associativismo",
    impact: "Menor acesso a negociações estruturadas.",
    action: "Agenda mensal de relacionamento.",
    owners: "Jefferson",
    deadline: "Cadência mensal",
    indicator: "Cobertura de redes; reuniões e propostas",
    priority: "Alta",
  },
  {
    id: "D4",
    short: { problem: "Pedidos B2B sem integração", action: "Plano de integração por volume" },
    category: "operacao",
    problem:
      "Ausência de integração com Pharmalink, SmartPed, Cote Fácil e portais de redes associativistas",
    impact: "Atrito no recebimento de pedidos.",
    action: "Levantamento técnico, priorização por volume e plano de integração.",
    owners: "TI + Comercial",
    deadline: "Q2 · conforme viabilidade técnica",
    indicator: "Plano de integração priorizado; tempo de faturamento Farma",
    priority: "Alta",
    v: "V9",
  },
  {
    id: "D6",
    short: { problem: "Novos representantes pouco treinados", action: "Onboarding de 5 dias + 3 em campo" },
    category: "operacao",
    problem: "Treinamento insuficiente de novos representantes",
    impact: "Maior risco de baixa produtividade e evasão.",
    action: "Onboarding de 5 dias + 3 dias em campo.",
    owners: "Coordenação + Padrinhos",
    deadline: "Q1 · contínuo para novos representantes",
    indicator: "Positivação e cadastros do novo representante; evasão em 90 dias",
    priority: "Alta",
  },
];

// ---------- 02 · Gargalo NC / Multilab ----------
export const bottleneck = {
  steps: [
    { label: "Pedido recebido", state: "ok" },
    { label: "Pedido enviado", state: "ok" },
    { label: "Pedido travado", state: "break" },
    { label: "Tratativa operacional", state: "action" },
    { label: "Pedido faturado", state: "target" },
  ] as { label: string; state: "ok" | "break" | "action" | "target" }[],
  rupture:
    "O pedido aparece como enviado e não evolui para faturado. Sem retorno, a equipe de sell-out deixa de acompanhar.",
  /** Áreas que precisam atuar juntas na tratativa (responsáveis do plano). */
  areas: [
    { name: "Comercial", role: "Reabre o acompanhamento com o cliente e o sell-out." },
    { name: "Faturamento / TI", role: "Diagnostica o status do pedido e o motivo do bloqueio." },
    { name: "Sell-out / Indústria", role: "Retoma o acompanhamento do pedido junto à Multilab." },
  ],
  controls: ["Dono do processo", "SLA de resolução", "Monitoramento semanal"],
  /** O que medir — sem valores até a primeira apuração. */
  metrics: [
    { label: "Pedidos pendentes", text: "Enviados e ainda não faturados", value: null as string | null },
    { label: "Tempo de resolução", text: "Do travamento ao faturamento", value: null as string | null },
    { label: "Tempo de faturamento Farma", text: "Meta proposta do painel", value: "<24h" },
  ],
  status: "Ação proposta · solução técnica não implantada",
};

// ---------- 03 · Cinco frentes. Uma meta. ----------
export const levers = [
  {
    num: "01",
    title: "Recuperação comercial",
    summary: "Reativar inativos, regularizar cadastros e destravar pedidos.",
    items: [
      "Reativação de clientes inativos",
      "Regularização cadastral",
      "Recuperação de pedidos não faturados",
    ],
    answers: ["D1", "D3"],
  },
  {
    num: "02",
    title: "Cobertura e positivação",
    summary: "Mais representantes preparados e carteiras bem distribuídas.",
    items: [
      "Ampliação e capacitação de representantes",
      "Aumento da cobertura comercial",
      "Gestão de carteiras e territórios",
    ],
    answers: ["D6"],
  },
  {
    num: "03",
    title: "Grandes contas e redes",
    summary: "Relacionamento com redes, associações e novas contas.",
    items: [
      "Aproximação com gestores de redes independentes",
      "Relacionamento com associações e franquias",
      "Desenvolvimento de FarmaHall e Rede Aliança",
    ],
    answers: ["D2", "D5"],
  },
  {
    num: "04",
    title: "Indústria e portfólio",
    summary: "Novos laboratórios, mix e canais Farma e Veterinário.",
    items: [
      "Negociação com novos laboratórios",
      "Desenvolvimento do mix",
      "Expansão dos canais Farma e Veterinário",
    ],
    answers: [],
  },
  {
    num: "05",
    title: "Excelência operacional",
    summary: "Integração de pedidos, campo acompanhado e indicadores.",
    items: [
      "Integração com plataformas de pedidos",
      "Treinamento e acompanhamento de campo",
      "Governança de indicadores e faturamento",
    ],
    answers: ["D4", "D6"],
  },
];

export const leversLead =
  "A meta de 2027 depende da execução coordenada dessas frentes, não de uma única iniciativa.";

export const leversNote =
  "As frentes atuam em conjunto. O plano não atribui percentuais de contribuição a cada uma: essa divisão exige dados de base ainda não consolidados.";

// ---------- 04 · Liderança da execução ----------
export const leadership = {
  name: "Jefferson Lima",
  role: "Coordenador Comercial",
  statement:
    "Coordena a execução do plano no dia a dia: do campo às redes, com a Diretoria na negociação com a indústria.",
  axes: [
    {
      key: "campo",
      label: "Campo",
      title: "Campo",
      short: "Representantes, positivação e cobertura.",
      text: "Acompanhamento e seleção de representantes, positivação, cobertura e produtividade.",
    },
    {
      key: "relacionamento",
      label: "Redes",
      title: "Relacionamento",
      short: "Gestores de redes, associações e grandes contas.",
      text: "Gestores de redes, associações, grandes contas e parceiros comerciais.",
    },
    {
      key: "industria",
      label: "Indústria",
      title: "Indústria",
      short: "Novos laboratórios, com a Diretoria.",
      text: "Atuação conjunta com a Diretoria na prospecção e negociação de novos laboratórios.",
    },
  ],
  milestones: [
    {
      value: "+20%",
      label: "Ampliação da positivação até junho de 2027",
      note: "Base de cálculo proposta",
      v: "V7" as VId,
    },
    {
      value: "2",
      label: "Novas indústrias até junho de 2027",
      note: "Sujeito a negociação e aprovação",
      v: "V6" as VId,
    },
  ],
  /** Alvos de negociação — NÃO são parceiros fechados. */
  targetIndustries: ["Teuto", "Biosintética", "EMS Genéricos", "Medley"],
  /** Como as áreas participam (relação funcional, não hierárquica). */
  participation: [
    {
      name: "Diretoria",
      verb: "Valida",
      text: "Política comercial, exceções territoriais, investimentos, contratos com indústria e prioridades.",
    },
    {
      name: "Representantes",
      verb: "Executam",
      text: "Carteira, cadastros, visitas, pedidos, positivação e mix.",
    },
    {
      name: "Cadastro / Faturamento / TI",
      verb: "Sustentam",
      text: "Regularidade documental, status dos pedidos e integrações.",
    },
    {
      name: "Sell-out / Indústria",
      verb: "Acompanham",
      text: "Pedidos, desbloqueios e ações conjuntas.",
    },
  ],
};

// ---------- 05 · Regras comerciais e premiação ----------
export const commercialRules: {
  key: string;
  title: string;
  value: string;
  unit: string;
  rule: string;
  status: Status;
  v?: VId;
}[] = [
  {
    key: "redes",
    title: "Redes independentes",
    value: "R$ 200",
    unit: "por filial / mês · piso proposto",
    rule: "Após três meses consecutivos abaixo do mínimo: gatilho de revisão da carteira e possível redistribuição, mediante validação da Coordenação Comercial. A regra definitiva depende de aprovação.",
    status: "validar",
    v: "V3",
  },
  {
    key: "carteira",
    title: "Carteira",
    value: "80",
    unit: "CNPJs por representante · limite",
    rule: "Exceções autorizadas pela Direção.",
    status: "validar",
    v: "V5",
  },
  {
    key: "territorio",
    title: "Território",
    value: "180 km",
    unit: "da residência do representante · raio máximo",
    rule: "Exceções autorizadas pela Direção.",
    status: "validar",
    v: "V5",
  },
  {
    key: "vet",
    title: "Canal veterinário",
    value: "2",
    unit: "clínicas por representante até jun/2027",
    rule: "Cadastro de clínicas veterinárias, conforme habilitação e elegibilidade.",
    status: "validar",
    v: "V6",
  },
  {
    key: "catalogo",
    title: "Catálogo",
    value: "PDF + Excel",
    unit: "a partir de março",
    rule: "Portfólio organizado por categoria e canal, sem necessidade de impressão.",
    status: "acao",
  },
];

export const reviewFlow = [
  "3 meses abaixo do piso",
  "Gatilho de revisão",
  "Análise da Coordenação",
  "Redistribuição, se validada",
];

export const incentives: {
  num: string;
  title: string;
  bands: string[];
  text: string;
  v: VId;
}[] = [
  {
    num: "01",
    title: "Positivação",
    bands: ["65%", "75%", "acima de 82%"],
    text: "Faixas propostas de positivação.",
    v: "V4",
  },
  {
    num: "02",
    title: "Categoria / mix",
    bands: ["Metas por indústria", "Top 5"],
    text: "Premiação extra quando houver verba aprovada pela indústria.",
    v: "V4",
  },
  {
    num: "03",
    title: "Inadimplência",
    bands: ["inferior a 2%"],
    text: "Meta de inadimplência da carteira.",
    v: "V8",
  },
];

export const incentivesMechanicNote =
  "Pesos, valores e fórmula de pagamento não foram definidos e não são apresentados nesta versão.";

// ---------- 06 · Onboarding ----------
export const onboardingOnline = [
  { day: "Dia 01", text: "Empresa, cultura DiskMed, sistema de pedidos e política comercial." },
  { day: "Dia 02", text: "Portfólio por canal (farma e veterinário) e catálogo digital." },
  { day: "Dia 03", text: "Cadastro de clientes, documentação obrigatória e licenças." },
  {
    day: "Dia 04",
    text: "Abordagem, positivação, gestão da carteira de até 80 CNPJs e território de até 180 km.",
  },
  { day: "Dia 05", text: "Avaliação online e plano de metas do primeiro mês." },
];

export const onboardingField = [
  { day: "Dia 01", verb: "Observar", text: "Abordagem, roteiro, catálogo e operação real." },
  { day: "Dia 02", verb: "Participar", text: "Atuar na venda com supervisão." },
  { day: "Dia 03", verb: "Executar", text: "Conduzir a venda; o padrinho corrige e dá feedback." },
];

/** Checklist proposto para liberar a entrada em campo (critérios a validar · V10). */
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

// ---------- 07 · Roadmap 2027 ----------
/** Status de acompanhamento dos entregáveis — atualize ao longo de 2027. */
export type DeliveryStatus = "Planejado" | "Em andamento" | "Concluído" | "Em risco";

export const months = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
];

export const quarters: {
  q: string;
  months: string;
  theme: string;
  /** Marco PROPOSTO de crescimento ACUMULADO (não é faturamento realizado). */
  milestone: number;
  actions: { text: string; v?: VId }[];
  deliverables: { text: string; status: DeliveryStatus; v?: VId; june?: boolean }[];
}[] = [
  {
    q: "Q1",
    months: "Jan–Mar",
    theme: "Organizar e destravar",
    milestone: 3,
    actions: [
      { text: "Mapeamento territorial: endereço e cobertura dos representantes." },
      { text: "Diagnóstico de clientes inativos: relatório de clientes sem compras há 90 dias." },
      { text: "Tratativas NC/Multilab com a equipe de sell-out para destravar o faturamento." },
      { text: "Reunião semanal online, segunda-feira às 8h." },
      { text: "Preparação do catálogo digital por categoria e canal." },
      { text: "Capacitação: onboarding de 5 dias online + 3 dias de campo." },
    ],
    deliverables: [
      { text: "Mapa de cobertura dos representantes", status: "Planejado" },
      { text: "Relatório de clientes sem compras há 90 dias", status: "Planejado" },
      { text: "Plano de tratativa NC/Multilab com dono e SLA", status: "Planejado" },
      { text: "Catálogo digital (PDF e Excel) a partir de março", status: "Planejado" },
    ],
  },
  {
    q: "Q2",
    months: "Abr–Jun",
    theme: "Implantar e expandir",
    milestone: 7,
    actions: [
      { text: "Regras de carteira com piso proposto de R$ 200/filial/mês, após aprovação.", v: "V3" },
      { text: "Programa de premiação por positivação, após validação das regras.", v: "V4" },
      {
        text: "Integrações priorizadas: Pharmalink, SmartPed, Cote Fácil e portais associativistas, conforme viabilidade técnica.",
        v: "V9",
      },
      { text: "Atualização cadastral, com objetivo de 100% da base elegível regularizada.", v: "V10" },
      { text: "Expansão da positivação e desenvolvimento de novos representantes.", v: "V7" },
      { text: "Negociação com indústrias e cadastro de clínicas veterinárias.", v: "V6" },
      { text: "Consolidar o acompanhamento semanal de metas e produtividade." },
    ],
    deliverables: [
      { text: "Política de carteira aprovada", status: "Planejado", v: "V3" },
      { text: "Programa de premiação lançado", status: "Planejado", v: "V4" },
      { text: "Plano de integrações priorizado", status: "Planejado", v: "V9" },
      {
        text: "Marco de junho: +20% de positivação, 2 indústrias, 2 clínicas por representante",
        status: "Planejado",
        v: "V7",
        /** Exibido no roadmap como o bloco "Marcos de junho" (juneMilestones). */
        june: true,
      },
    ],
  },
  {
    q: "Q3",
    months: "Jul–Set",
    theme: "Consolidar",
    milestone: 11,
    actions: [
      { text: "Acompanhamento de performance, cobertura, mix, carteira e produtividade." },
      { text: "Aprofundar cobertura de redes e recuperação de clientes inativos." },
      { text: "Monitorar ticket, mix, inadimplência e SLA de faturamento." },
      { text: "Ajustar territórios e carteiras conforme evidências e aprovação." },
    ],
    deliverables: [
      { text: "Painel mensal de metas e desvios em operação (Radar Comercial)", status: "Planejado" },
      { text: "Revisão de territórios e carteiras, se aprovada", status: "Planejado" },
    ],
  },
  {
    q: "Q4",
    months: "Out–Dez",
    theme: "Acelerar e fechar",
    milestone: 15,
    actions: [
      { text: "Correção de desvios e recuperação de oportunidades." },
      { text: "Consolidação dos indicadores e da performance de fim de ano." },
      { text: "Avaliação de resultados por canal, região, indústria e representante." },
      { text: "Fechamento da meta anual e preparação do plano de continuidade 2028." },
    ],
    deliverables: [
      { text: "Avaliação por canal, região, indústria e representante", status: "Planejado" },
      { text: "Plano de continuidade 2028", status: "Planejado" },
    ],
  },
];

export const milestonesNote =
  "Marcos de planejamento de crescimento acumulado, sujeitos à validação da base de comparação de 2026. Não representam faturamento realizado nem crescimento trimestral isolado.";

// ---------- 08 · Painel de indicadores ----------
/**
 * `current` e `deviation` ficam `null` até existir apuração.
 * Preencha como texto (ex.: "78%", "-4 p.p.") quando houver dado validado.
 */
export const indicators: {
  name: string;
  target: string;
  definition: string;
  current: string | null;
  deviation: string | null;
  v: VId;
}[] = [
  {
    name: "Crescimento anual",
    target: "+15%",
    definition: "Faturamento líquido ou bruto, base 2026 e comparabilidade.",
    current: null,
    deviation: null,
    v: "V1",
  },
  {
    name: "Positivação",
    target: "82%",
    definition:
      "Proposta: clientes elegíveis com ao menos uma compra faturada no mês ÷ clientes elegíveis da carteira.",
    current: null,
    deviation: null,
    v: "V2",
  },
  {
    name: "Ticket médio",
    target: "+10%",
    definition: "Cálculo, período e baseline a definir.",
    current: null,
    deviation: null,
    v: "V8",
  },
  {
    name: "Inadimplência",
    target: "<2%",
    definition: "Carteira, atraso e denominador a definir.",
    current: null,
    deviation: null,
    v: "V8",
  },
  {
    name: "Cobertura de redes",
    target: "70%",
    definition: "Universo de redes e conceito de cobertura a definir.",
    current: null,
    deviation: null,
    v: "V8",
  },
  {
    name: "Novos cadastros",
    target: "2 por representante/mês",
    definition: "Cadastro aprovado versus primeiro pedido.",
    current: null,
    deviation: null,
    v: "V8",
  },
  {
    name: "Tempo de faturamento Farma",
    target: "<24h",
    definition: "Início/fim, horário útil e exceções a definir.",
    current: null,
    deviation: null,
    v: "V8",
  },
];

/** Marcos com prazo em junho de 2027. */
export const juneMilestones: {
  name: string;
  target: string;
  definition: string;
  v: VId;
}[] = [
  {
    name: "Expansão da positivação",
    target: "+20%",
    definition: "Percentual relativo, pontos percentuais ou número de clientes.",
    v: "V7",
  },
  {
    name: "Novas indústrias",
    target: "2",
    definition: "Contratos efetivamente assinados, sujeitos a negociação.",
    v: "V6",
  },
  {
    name: "Clínicas veterinárias",
    target: "2 por representante",
    definition: "Cadastro válido e canal habilitado.",
    v: "V6",
  },
];

export const routine = [
  {
    when: "Segunda-feira, 8h",
    cadence: "Semanal",
    title: "Acompanhamento operacional",
    text: "Carteira, pedidos, positivação e pendências da semana.",
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
  cta: "Validar as propostas e aprovar o plano de implantação",
  /** Assinatura executiva após as decisões (V05). */
  signature: "2027. Crescimento com método, presença comercial e execução.",
};

// ---------- Decisões necessárias para implantação ----------
// Edite `status` quando cada ponto for decidido. Não há persistência
// nem aprovação online: este arquivo é a fonte oficial.
export type ValidationStatus = "Pendente" | "Em análise" | "Validado";

/** Como cada status aparece na página (o plano traz propostas, não pendências). */
export const VALIDATION_STATUS_LABEL: Record<ValidationStatus, string> = {
  Pendente: "Aguardando validação",
  "Em análise": "Em análise",
  Validado: "Validado",
};
export type ValidationGroup = "financeiro" | "regras" | "metodologia" | "operacional";

export const validationGroups: { key: ValidationGroup; title: string }[] = [
  { key: "financeiro", title: "Definições financeiras" },
  { key: "regras", title: "Regras comerciais" },
  { key: "metodologia", title: "Metodologia dos indicadores" },
  { key: "operacional", title: "Aprovações operacionais" },
];

export const validations: {
  id: VId;
  group: ValidationGroup;
  /** Necessária antes de iniciar a implantação. */
  priority?: boolean;
  /** Chamada curta das decisões prioritárias no encerramento. */
  headline?: string;
  /** Proposta do Jefferson para validação da Diretoria (formulário e PDF). */
  proposal: string;
  title: string;
  detail: string;
  status: ValidationStatus;
}[] = [
  {
    id: "V1",
    proposal: "Base: faturamento líquido de 2026. Marcos de +3%, +7%, +11% e +15% acumulados, comparados com o mesmo período de 2026.",
    group: "financeiro",
    priority: true,
    headline: "Base financeira da meta de 15%",
    title: "Base de comparação do crescimento de 15%",
    detail:
      "Faturamento líquido de 2026 é a recomendação inicial. Confirmar a base e se os marcos Q1–Q4 são crescimento acumulado versus o mesmo período de 2026.",
    status: "Pendente",
  },
  {
    id: "V2",
    proposal: "Positivação = clientes elegíveis com ao menos uma compra faturada no mês ÷ clientes elegíveis da carteira. Elegível: CNPJ na carteira de um representante, com cadastro e licenças em dia e compra nos últimos 12 meses. Redes contadas por CNPJ (cada filial). Apuração mensal.",
    group: "metodologia",
    priority: true,
    headline: "Definição da positivação de 82%",
    title: "Definição operacional de positivação e base elegível",
    detail:
      "Confirmar fórmula, clientes elegíveis, período e tratamento de redes com múltiplos CNPJs.",
    status: "Pendente",
  },
  {
    id: "V3",
    proposal: "Piso de R$ 200 por filial/mês, aplicado às redes. Os três primeiros meses após a aprovação servem só de monitoramento. Depois, três meses seguidos abaixo do piso abrem revisão: a Coordenação propõe a redistribuição e a Diretoria aprova.",
    group: "regras",
    priority: true,
    headline: "Política de R$ 200 por filial e redistribuição",
    title: "Regra definitiva de redistribuição de carteiras",
    detail:
      "Confirmar o piso de R$ 200/filial/mês, o critério de três meses, as exceções e a aprovação da redistribuição.",
    status: "Pendente",
  },
  {
    id: "V4",
    proposal: "Três pilares: positivação (as faixas de 65%, 75% e 82% definem o tamanho do prêmio), mix por indústria e Top 5 com verba da indústria, e inadimplência abaixo de 2%. Pesos e valores conforme a verba definida pela Diretoria.",
    group: "financeiro",
    title: "Mecânica financeira da premiação",
    detail:
      "Definir se as faixas de positivação são elegibilidade ou níveis de prêmio, além de pesos, valores, fórmula e verba por indústria.",
    status: "Pendente",
  },
  {
    id: "V5",
    proposal: "Até 80 CNPJs por representante e raio de 180 km a partir da residência. Exceções autorizadas pela Direção.",
    group: "regras",
    title: "Limites de carteira e território",
    detail:
      "Confirmar o limite de 80 CNPJs e o raio de 180 km: método de medição, carga real de atendimento e regra de exceções.",
    status: "Pendente",
  },
  {
    id: "V6",
    proposal: "2 novas indústrias até junho de 2027 (alvos de negociação: Teuto, Biosintética, EMS Genéricos e Medley) e 2 clínicas veterinárias por representante, conforme portfólio e habilitação.",
    group: "regras",
    title: "Metas de indústria e canal veterinário",
    detail:
      "Confirmar elegibilidade, portfólio e aprovação comercial para 2 novas indústrias e 2 clínicas por representante.",
    status: "Pendente",
  },
  {
    id: "V7",
    proposal: "+20% medido em número de clientes positivados por mês, sobre a média mensal de 2026 registrada no sistema da DiskMed.",
    group: "metodologia",
    title: "Expansão de +20% na positivação até junho",
    detail:
      "Definir a base e se a meta mede clientes positivados, a taxa de positivação ou pontos percentuais.",
    status: "Pendente",
  },
  {
    id: "V8",
    proposal: "Ticket médio: faturamento líquido ÷ pedidos faturados no mês. Inadimplência: valor vencido há mais de 30 dias ÷ total a receber. Cobertura de redes: redes do universo-alvo (as 30 maiores redes do RJ em venda) com compra no trimestre. Novos cadastros: aprovados com primeiro pedido faturado no mês. Faturamento Farma: da entrada ao faturamento, em horas úteis (mediana do mês).",
    group: "metodologia",
    title: "Definição dos demais indicadores",
    detail:
      "Ticket médio, inadimplência, cobertura de redes, novos cadastros e tempo de faturamento: definições e fontes de dados.",
    status: "Pendente",
  },
  {
    id: "V9",
    proposal: "Levantamento técnico no Q2 e integração priorizada por volume de pedidos (Pharmalink, SmartPed, Cote Fácil e portais associativistas). Depende de contratos e credenciais da DiskMed.",
    group: "operacional",
    title: "Integrações B2B",
    detail:
      "Confirmar APIs, credenciais, contratos e prioridades. As integrações não estão implantadas.",
    status: "Pendente",
  },
  {
    id: "V10",
    proposal: "Responsáveis por frente conforme a matriz de governança e cronograma de Q1 a Q4. A Diretoria indica os responsáveis de Cadastro, Faturamento/TI e Sell-out e o orçamento de premiação, integrações e onboarding em campo.",
    group: "operacional",
    title: "Responsáveis, prazos e orçamento",
    detail:
      "Confirmar áreas, pessoas e orçamento; os prazos e indicadores propostos no diagnóstico; os critérios de entrada em campo; e o agrupamento trimestral da V02, que posiciona em Q2 ações previstas na V01 a partir de março–abril.",
    status: "Pendente",
  },
];

// ---------- Validação da Diretoria (formulário e Anexo 1 do PDF) ----------
// Só o que a DiskMed valida ou libera. O que o Jefferson prepara fica no
// guia dele, fora do site (arquivo à parte, não versionado).
export const pendingIntro =
  "Propostas do Jefferson para concluir o Plano Comercial 2027. Para cada uma: aprovar, aprovar com ajuste ou não aprovar. As três primeiras destravam a implantação.";

/** Dados que a DiskMed libera para apurar resultado e desvio das metas. */
export const pendingData: { data: string; indicator: string }[] = [
  { data: "Faturamento mensal de 2026", indicator: "Crescimento (+15%)" },
  { data: "Clientes positivados por mês em 2026", indicator: "Expansão da positivação (+20%)" },
  { data: "Ticket médio de 2026", indicator: "Ticket médio (+10%)" },
  { data: "Inadimplência atual da carteira", indicator: "Inadimplência (<2%)" },
  { data: "Data e hora de entrada e de faturamento dos pedidos Farma", indicator: "Tempo de faturamento (<24h)" },
];

/** Definições comerciais que dependem da DiskMed. */
export const pendingOps: { info: string; use: string }[] = [
  { info: "Condições de entrada em FarmaHall e Rede Aliança", use: "Expansão comercial" },
];

// ---------- Radar Comercial (esboço no bloco Metas) ----------
// Painel mensal de metas e desvios (Q3). O esboço mostra só a estrutura:
// nenhum número da DiskMed vai para o site.
export const radar = {
  name: "Radar Comercial",
  text: "O painel mensal de metas e desvios, atualizado pelo Jefferson toda semana.",
  screens: [
    { title: "Cobertura", text: "As 30 maiores redes do RJ: quais compram da DiskMed." },
    { title: "Piso R$ 200", text: "Filiais abaixo do piso, mês a mês." },
    { title: "Prospecção", text: "Redes sem compra, com o status de cada contato." },
    { title: "Metas", text: "Meta e resultado, quando houver apuração." },
  ],
  note: "Esboço ilustrativo, sem dados. A versão interna usa a planilha de distribuição RJ.",
};

/** Destino das respostas do questionário (botão "Validar propostas"). */
export const answersContact = {
  name: "Jefferson",
  /** Número no formato internacional, só dígitos (wa.me). */
  whatsapp: "5521999795699",
  display: "+55 21 99979-5699",
};

/** Acesso rápido a uma decisão pelo identificador. */
export const validationById = Object.fromEntries(
  validations.map((v) => [v.id, v])
) as Record<VId, (typeof validations)[number]>;
