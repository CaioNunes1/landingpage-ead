// Edite este arquivo para personalizar os dados públicos do minicurso.
export const AUTHOR_NAME = 'Caio Gabriel Nunes de Lima';
export const YOUTUBE_VIDEO_URL = 'https://youtu.be/8wQLCoFdsEo';
export const EVALUATION_URL = 'COLOCAR_LINK_DO_GENIALLY_OU_FORMULARIO_AQUI';

// Os PDFs ficam em public/materiais e são publicados junto com o site.
export const learningMaterials = {
  ebook: {
    title: 'Personalização de exercícios com apoio de IA',
    onlineUrl: 'https://online.fliphtml5.com/enchz/enfn/',
    pdfUrl: '/materiais/ebook-personalizacao-de-exercicios-com-ia.pdf',
    fileName: 'ebook-personalizacao-de-exercicios-com-ia.pdf',
    format: '21 páginas · PDF · 137 KB',
  },
  infographic: {
    title: 'Da necessidade ao exercício validado',
    pdfUrl: '/materiais/infografico-personalizacao-com-ia.pdf',
    fileName: 'infografico-personalizacao-com-ia.pdf',
    format: '1 página · PDF · 80 KB',
    steps: [
      { title: 'Conhecer o estudante', description: 'Pré-requisitos, dificuldades e experiência.' },
      { title: 'Definir o objetivo', description: 'A habilidade que o exercício deve desenvolver.' },
      { title: 'Contextualizar o prompt', description: 'Perfil + conteúdo + formato + nível + critérios.' },
      { title: 'Gerar e adaptar', description: 'Pedir versões básica, intermediária e avançada.' },
      { title: 'Revisar o enunciado', description: 'Entradas, saídas, regras e linguagem claras.' },
      { title: 'Testar o gabarito', description: 'Executar código e avaliar casos-limite.' },
      { title: 'Aplicar e refinar', description: 'Observar resultados e ajustar a atividade.' },
    ],
  },
};

export const course = {
  title: 'Personalização de exercícios com apoio de IA',
  fullTitle: 'Personalização de exercícios com apoio de Inteligência Artificial',
  trail: 'Aprendizagem e ensino de Computação com IA',
  author: AUTHOR_NAME,
  youtubeUrl: YOUTUBE_VIDEO_URL,
  evaluationUrl: EVALUATION_URL,
  duration: 'Aproximadamente 20 a 30 minutos de videoaula, além da atividade interativa',
  workload: 'Aproximadamente 1 hora',
};

// Substitua os placeholders pelas fontes realmente utilizadas na videoaula.
export const references: { title: string; author: string; url: string }[] = [
  { title: 'Guidance for Generative AI in Education and Research. Paris: UNESCO, 2023.', author: 'UNESCO', url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098&utm_source=chatgpt.com' },
  { title: 'Guia para a IA generativa na educação e na pesquisa. UNESCO, 2023/2024.', author: 'MIAO, Fengchun; HOLMES, Wayne.', url: 'https://www.unesco.org/pt/articles/guia-para-ia-generativa-na-educacao-e-na-pesquisa?hub=66903&utm_source=chatgpt.com' },
];

export const objectives = [
  'Compreender a personalização de exercícios',
  'Identificar informações relevantes do perfil do estudante',
  'Elaborar prompts com contexto pedagógico',
  'Adaptar exercícios com apoio de IA',
  'Criar uma progressão de dificuldade',
  'Analisar a clareza dos enunciados',
  'Verificar gabaritos gerados por IA',
  'Reconhecer a revisão do professor como etapa indispensável',
];

export const profiles = [
  {
    number: '01', level: 'Iniciante', name: 'Ana', tag: 'Primeiros passos',
    knows: 'Variáveis, input() e print(). Está começando a estudar if e else.',
    challenge: 'Aplicar uma condição simples.',
    exercise: 'Receba a idade de uma pessoa e informe se ela é maior ou menor de idade.',
  },
  {
    number: '02', level: 'Intermediário', name: 'Bruno', tag: 'Conectando ideias',
    knows: 'Já conhece if, elif e else, mas tem dificuldade para combinar condições.',
    challenge: 'Resolver problemas com múltiplos critérios.',
    exercise: 'Receba a média e a frequência de um estudante e determine sua aprovação considerando os dois critérios.',
  },
  {
    number: '03', level: 'Avançado', name: 'Carla', tag: 'Mais autonomia',
    knows: 'Domina condicionais, operadores lógicos e problemas básicos.',
    challenge: 'Trabalhar problemas com múltiplas regras e maior autonomia.',
    exercise: 'Desenvolva um sistema de descontos considerando valor da compra, categoria do cliente e existência de cupom.',
  },
];

export const reviewCriteria = [
  { number: '01', title: 'Nível de dificuldade', items: ['Quantidade de conceitos', 'Número de decisões', 'Autonomia necessária', 'Complexidade do raciocínio'] },
  { number: '02', title: 'Clareza do enunciado', items: ['Tarefa compreensível', 'Entradas definidas', 'Saída esperada', 'Regras claras e sem ambiguidades'] },
  { number: '03', title: 'Correção do gabarito', items: ['Código executa', 'Atende ao enunciado', 'Considera casos extremos', 'Usa conceitos adequados', 'Produz resultados corretos'] },
];

export const processSteps = ['Conhecer o estudante', 'Definir objetivo', 'Fornecer contexto à IA', 'Gerar ou adaptar exercício', 'Analisar dificuldade', 'Revisar enunciado', 'Testar gabarito', 'Aplicar', 'Adaptar após observar o desempenho'];

export const addieSteps = [
  { title: 'Análise', detail: 'Perfis, conhecimentos prévios, dificuldades e ritmos de aprendizagem.' },
  { title: 'Desenho', detail: 'Objetivos, sequência didática e critérios de avaliação.' },
  { title: 'Desenvolvimento', detail: 'Videoaula, slides, prompts, exercícios, perfis e avaliação.' },
  { title: 'Implementação', detail: 'Percurso assíncrono: aula, exemplos, atividade e finalização.' },
  { title: 'Avaliação', detail: 'Questões com feedback sobre adequação, clareza e gabaritos.' },
];

export type QuizQuestion = {
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    prompt: 'Ana conhece variáveis, input() e print(), mas está começando a usar condicionais. Qual exercício é mais adequado?',
    options: ['Criar um sistema de descontos com três regras e cupom', 'Ler uma idade e informar se a pessoa é maior ou menor de idade', 'Implementar um algoritmo de ordenação com condicionais'],
    correct: 1,
    explanation: 'Uma decisão simples permite praticar if e else sem introduzir várias regras ao mesmo tempo.',
  },
  {
    prompt: 'Qual sequência apresenta uma progressão de dificuldade coerente?',
    options: ['Múltiplas regras → condição simples → duas condições', 'Condição simples → combinação de condições → múltiplas regras', 'Duas condições → múltiplas regras → condição simples'],
    correct: 1,
    explanation: 'A progressão começa com uma decisão, combina critérios e só então avança para regras mais complexas.',
  },
  {
    prompt: 'O que melhora o pedido “Crie um exercício de Python sobre if”?',
    options: ['Pedir apenas que a IA escreva mais texto', 'Informar perfil, conhecimentos prévios, objetivo e nível esperado', 'Solicitar que a IA escolha livremente todo o conteúdo'],
    correct: 1,
    explanation: 'O contexto pedagógico orienta a adaptação e permite avaliar se o exercício atende ao estudante.',
  },
  {
    prompt: 'Um enunciado pede para calcular aprovação, mas não informa média mínima nem frequência exigida. Qual é o principal problema?',
    options: ['Falta de regras claras', 'Excesso de exemplos', 'Dificuldade baixa demais'],
    correct: 0,
    explanation: 'Sem critérios de aprovação definidos, o estudante não sabe que decisão deve implementar.',
  },
  {
    prompt: 'O gabarito usa “if idade > 18” para identificar maiores de idade. Que verificação revela a falha?',
    options: ['Testar uma idade negativa apenas', 'Testar exatamente 18 anos', 'Trocar print() por input()'],
    correct: 1,
    explanation: 'O caso limite de 18 anos é classificado incorretamente. A condição correta é idade >= 18.',
  },
];
