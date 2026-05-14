const generateFrames = (folderName, pageCount) => {
  return Array.from({ length: pageCount }, (_, i) => 
    `/apresentacoes/${folderName}/pag-${String(i + 1).padStart(2, '0')}.png`
  );
};

export const projectsData = [
  //hortaranda
  {
    id: 1,
    title: "Hortaranda",
    logo: "/apresentacoes/hortaranda/hortarandaicon.png",
    subtitle: "Ecossistema Digital de Literacia Agrícola e Simulação de Jardins Urbanos",
    year: "2024",
    role: "Front-end Development & UI Design",
    team: "4 elementos",
    coverVideo: "https://drive.google.com/uc?export=download&id=1jXkqcqXS-c3bPNVEoqmimFOfnUp1IjXt",
    videoCredits: "Vídeo promocional: Edição por Carlos Teixeira.",
    coverImage: "/apresentacoes/hortaranda/hero.png",
    description: "Plataforma educativa para horticultura urbana. O projeto destaca-se pela gestão de estado entre páginas estáticas via LocalStorage e um simulador interativo em Vanilla JS.",
    tags: ["Vanilla JS", "LocalStorage", "DOM Manipulation", "UX Design"],
    
    fullDescription: "O Hortaranda foi desenvolvido no Departamento de Comunicação e Arte da UA como uma resposta tecnológica ao ODS nº12. O foco reside na capacitação de cidadãos para a auto-sustentabilidade alimentar, convertendo métricas botânicas complexas em interações visuais intuitivas.",

    theoryBlocks: [
      {
        type: 'text',
        title: "UX e Gamificação da Sustentabilidade",
        value: "A estratégia de design assentou na 'Gamificação Utilitária'. O sistema utiliza um loop de feedback constante: as ações no simulador traduzem-se em métricas imediatas no dashboard, incentivando a otimização do espaço através de tentativa e erro."
      },
      {
        type: 'quote',
        value: "Mapear a sustentabilidade urbana através de uma interface de manipulação direta do utilizador."
      }
    ],

    practiceBlocks: [
      {
        type: 'text',
        title: "Arquitetura MPA & Persistência Nativa",
        value: "Sendo o primeiro contacto estruturado com lógica de programação, o desafio residiu em partilhar dados entre diferentes ficheiros .html sem um backend. \n\nA solução passou pelo uso intensivo da Web Storage API. O estado do simulador e as respostas do formulário são serializados em objetos JSON e armazenados no LocalStorage, garantindo que a varanda é renderizada dinamicamente com as proporções reais (fator de escala x1.5) injetadas pelo JavaScript."
      },
      {
        type: 'video-body',
        value: "https://drive.google.com/uc?export=download&id=119UYv12U-ZOL3NEkTMdKTrVhmaS-66zu",
        caption: "Demonstração funcional do simulador e persistência de dados entre módulos."
      },
      {
        type: 'text',
        title: "Retrospectiva Técnica",
        value: "A lógica do simulador baseia-se em manipulação direta do DOM e eventos de teclado (ArrowKeys/WASD) para o posicionamento absoluto de elementos. Embora hoje a abordagem passasse por uma arquitetura de componentes (React), este projeto foi o alicerce fundamental para compreender o ciclo de vida de uma aplicação e o fluxo de dados no lado do cliente."
      }
    ],

    colors: [
      { name: "Forest Green", hex: "#2D5A27" },
      { name: "Terracotta", hex: "#E2725B" },
      { name: "Deep Earth", hex: "#3E2723" }
    ],

    brandbookTitle: "Documentação de Design",
    presentationImages: generateFrames('hortaranda', 12),
    viewerType: "hybrid",
    repoLink: "https://github.com/CarlT09/Hortaranda",
    
    teamMembers: [
      { name: "Carlos Teixeira", photo: "/assets/team/hortaranda/carlos.png" },
      { name: "Francisco Seabra", photo: "/assets/team/hortaranda/francisco.png" },
      { name: "Maria Leonor Frias", photo: "/assets/team/hortaranda/maria.png" },
      { name: "Mariana Tavares", photo: "/assets/team/hortaranda/mariana.png" }
    ]
  },
  //nabu
  {
    id: 2,
    title: "NABU",
    subtitle: "Plataforma web full-stack para transação de excedentes alimentares",
    logo: "/apresentacoes/nabu/logo_nabu.png",
    year: "2025",
    role: "UX/UI Design & Full-Stack Development",
    team: "4 elementos",
    coverImage: "/apresentacoes/nabu/cover.png",
    description: "Plataforma de economia circular desenvolvida em PHP/MySQL. Destaque para comunicação assíncrona (AJAX), Mapbox API e design centrado no utilizador com testes de usabilidade.",
    tags: ["PHP / MySQL", "AJAX Polling", "UX Research", "Mapbox API"],
    
    // CONTEXTO GERAL (Resumo da Metodologia CBL e Desafio)
    fullDescription: "Desenvolvida no âmbito de um projeto CBL (Challenge-Based Learning) para o município da Lousã, a NABU é uma solução digital criada para gerir a transação de excedentes alimentares locais. O projeto funde os conhecimentos de duas unidades curriculares distintas (Fundamentos de Interação e Tecnologias Server-Side), garantindo que uma arquitetura de backend complexa seja servida por uma interface altamente testada e acessível.",

    // --- SISTEMA EDITORIAL ---

    // TAB 01: TEORIA (Baseado no Relatório de Fundamentos de Interação)
    theoryBlocks: [
      {
        type: 'text',
        title: "Design Centrado no Utilizador & Acessibilidade",
        value: "O design da NABU foi conduzido pelas necessidades específicas da população da Lousã. Através da construção de protótipos de alta fidelidade (Hi-fi), realizámos testes de usabilidade rigorosos com utilizadores reais. \n\nEste processo iterativo permitiu-nos identificar pontos de fricção precocemente, resultando em melhorias diretas na interface, como o aumento da área de toque de botões (touch targets) e a simplificação da arquitetura de informação no dashboard de gestão de anúncios."
      },
      {
        type: 'quote',
        value: "Proporcionar um contexto autêntico de resolução de problemas, onde o processo iterativo é tão valioso quanto o produto final."
      },
      {
        type: 'text',
        title: "Promover a Economia Circular",
        value: "Visualmente, a plataforma necessitava de inspirar confiança para trocas locais. A interface foi desenhada para ser limpa e direta, eliminando a dependência da manutenção contínua por parte da autarquia e capacitando os próprios cidadãos a gerirem as suas transações de forma autónoma."
      }
    ],

    // PALETA CROMÁTICA (Atualiza os códigos HEX com as cores reais da NABU)
    colors: [
      { name: "Primary Green", hex: "#4CAF50" }, // Exemplo: Substitui pelo teu verde
      { name: "Harvest Orange", hex: "#FF9800" }, // Exemplo: Substitui pelo teu laranja/secundária
      { name: "Light Background", hex: "#F5F7FA" },
      { name: "Dark Text", hex: "#2C3E50" }
    ],

    // TAB 02: PRÁTICA (Baseado no Relatório de Bases de Dados e Server-Side)
    practiceBlocks: [
      {
        type: 'text',
        title: "Arquitetura Backend & Segurança (PHP/MySQL)",
        value: "A infraestrutura da NABU assenta num servidor Apache com PHP e uma base de dados relacional MySQL. \n\nA segurança foi uma prioridade desde o dia zero: implementámos Prepared Statements em todas as queries para neutralizar ataques de SQL Injection e aplicámos rotinas estritas de sanitização de inputs para prevenir vulnerabilidades de Cross-Site Scripting (XSS)."
      },
      {
        type: 'text',
        title: "Comunicação Assíncrona e Geolocalização",
        value: "O destaque técnico da plataforma é o seu sistema de mensagens em tempo real. Em vez de forçar reloads de página, desenvolvemos um sistema de AJAX Polling cíclico que atualiza os chats e injeta notificações nativas diretamente no browser de forma invisível para o utilizador.\n\nAdicionalmente, integrámos a API do Mapbox. O sistema processa a geocodificação das moradas inseridas pelos vendedores, convertendo-as em coordenadas exatas (Latitude/Longitude) para renderizar os produtos dinamicamente num mapa interativo."
      }
    ],

    // --- VISUALIZADORES TÉCNICOS ---
    presentationImages: generateFrames('nabu', 32),
    viewerType: "hybrid",
    repoLink: "https://github.com/MLT05/NABU-24-25",
    liveLink: "",
    
    // --- EQUIPA (Extraída dos relatórios) ---
    teamMembers: [
      { name: "Carlos Teixeira", photo: "/assets/team/nabu/carlos.png" },
      { name: "Francisco Seabra", photo: "/assets/team/nabu/seabra.png" },
      { name: "Mariana Tavares", photo: "/assets/team/nabu/mariana.png" },
      { name: "Maria Leonor", photo: "/assets/team/nabu/maria.png" },
    ],

    galleryImages: [
      "https://placehold.co/800x800/000000/FFFFFF/png?text=UI+MAPA+INTERATIVO",
      "https://placehold.co/800x800/000000/FFFFFF/png?text=UI+MENSAGENS"
    ]
  },
  //recipe finder
  {
    id: 3,
    title: "Smart Recipe Finder & Nutrition Analyzer",
    logo: "/apresentacoes/recipe-finder/logo_rf.png",
    year: "2026",
    role: "Software Architecture & Frontend Development",
    team: "Solo Project",
    coverImage: "https://placehold.co/1920x1080/000000/FFFFFF/png?text=SMART+RECIPE+HERO+16:9", // Placeholder da capa
    description: "Single Page Application (SPA) que cruza gestão de dados nutricionais com IA (Gemini). Destaque para a aplicação de Design Patterns, Caching e uso simultâneo de Firebase e Supabase.",
    tags: ["React", "Firebase / Supabase", "Gemini AI", "Design Patterns"],
    
    // CONTEXTO GERAL
    fullDescription: "O Smart Recipe Finder transcende o conceito tradicional de um livro de receitas digital. Desenvolvida em React, a aplicação opera num ecossistema de dados altamente estruturado, aplicando a estrita Separação de Responsabilidades (Separation of Concerns). O motor lógico atua como um maestro, orquestrando três serviços externos simultâneos (Gemini AI, CalorieNinjas e YouTube Data) para entregar planos alimentares dinâmicos e análises nutricionais precisas em tempo real.",

    // --- SISTEMA EDITORIAL ---

    // TAB 01: TEORIA (Arquitetura e Padrões)
    theoryBlocks: [
      {
        type: 'text',
        title: "Design Patterns & Performance",
        value: "Para gerir a complexidade do sistema, a arquitetura foi desenhada em torno de Design Patterns clássicos. O padrão 'Facade' foi crucial para abstrair a lógica das APIs externas (Gemini, YouTube), criando interfaces limpas para os componentes React consumirem.\n\nA performance foi otimizada através de estratégias de 'Caching' em memória na API de nutrição, evitando chamadas HTTP redundantes, enquanto os filtros de receitas foram construídos estritamente como 'Pure Functions', garantindo imutabilidade e alta testabilidade do fluxo de dados."
      },
      {
        type: 'image-body',
        value: "/apresentacoes/recipe-finder/listagem.png",
        caption: "Interface de filtragem dinâmica suportada por Pure Functions e ordenação em tempo real."
      },
      {
        type: 'quote',
        value: "Garantir previsibilidade de dados e performance através de funções puras e gestão de estado centralizada."
      }
    ],

    // PALETA CROMÁTICA (Sugestão Placeholder: adapta para as cores reais da tua UI)
    colors: [
      { name: "Foodie Orange", hex: "#FF7043" },
      { name: "Fresh Mint", hex: "#4DB6AC" },
      { name: "Slate Gray", hex: "#37474F" },
      { name: "Clean White", hex: "#FAFAFA" }
    ],

    // TAB 02: PRÁTICA (Engenharia e Backend)
    practiceBlocks: [
      {
        type: 'text',
        title: "Backend Híbrido: Supabase + Firebase",
        value: "Um dos maiores desafios de engenharia foi a segregação de dados. Implementou-se um modelo híbrido: o Supabase (PostgreSQL) atua como o repositório público de acesso rápido para todas as receitas globais. Paralelamente, o Firebase foi integrado como uma solução fechada para gerir a autenticação de utilizadores e persistir dados privados no Firestore (como Receitas Guardadas e Planos Alimentares), aplicando o padrão 'Singleton' para evitar múltiplas instâncias de ligação."
      },
      {
        type: 'image-body',
        value: "/apresentacoes/recipe-finder/Diagrama_Projeto.png", // A usar o diagrama que enviaste!
        caption: "Diagrama de Arquitetura: Fluxo de dependências, Context API e orquestração de serviços externos. Made using Mermaid"
      },
      {
        type: 'text',
        title: "Meal Logger & Fetching Assíncrono",
        value: "A monitorização de objetivos (ex: Cut ou Bulk) é suportada por um 'Meal Logger' inteligente. A verdadeira inovação da interface reside na automação da recolha de dados: caso o utilizador não saiba a informação nutricional de um alimento ou receita, o sistema comunica de forma assíncrona com a API externa CalorieNinjas.\n\nAtravés de uma função de 'fetching' dinâmico, o motor identifica o alimento inserido, calcula os macronutrientes exatos com base na gramagem e atualiza o estado da aplicação. Esta arquitetura permite que o 'Nutrition Summary' (gráfico de macros) e a barra de progresso diário reajam em tempo real sem necessidade de recarregar a página."
      },
      {
        type: 'image-body',
        value: "/apresentacoes/recipe-finder/meal_logger.png", // SUBSTITUI PELO NOME DO FICHEIRO DESTA IMAGEM QUE MANDASTE
        caption: "Dashboard de objetivos com Meal Logger e cálculo automático de macronutrientes via API."
      }
    ],

    // --- VISUALIZADORES TÉCNICOS ---
    // Se tiveres um Figma com os layouts deste projeto, podes colocar aqui.
    // presentationImages: generateFrames('recipe', 10), 
    viewerType: "hybrid",
    
    repoLink: "https://github.com/CarlT09/Recipe-Finder",
    liveLink: "", // Colocar se estiver alojado
    
    galleryImages: [
      "/apresentacoes/recipe-finder/macros.png",
      "/apresentacoes/recipe-finder/filters.png"
    ]
  },
  //tuts
  {
  id: 4,
  title: "Tut'S",
  logo: "/apresentacoes/tuts/cover.png",
  status: "wip", 
  // PROJECT CARD
  description: "Plataforma de auto-tutoria com IA orientada para apoiar o estudo autónomo no ensino superior. Foco em fiabilidade e redução de sobrecarga cognitiva através de arquitetura RAG.",
  tags: ["UX/UI Design", "Figma", "Branding", "RAG / IA"],
  subtitle: "Plataforma de auto-tutoria com IA para apoio ao estudo autónomo no ensino superior",
  year: "2026",
  role: "UX/UI Design & Developer · Investigação",
  team: "4 elementos",
  coverImage: "/apresentacoes/tuts/cover2.png",
  socialLinks: {
      instagram: "https://www.instagram.com/tuts.ai/",
      linkedin: "https://www.linkedin.com/in/tut-s-7899103b7"
  },
  
  // CONTEXTO GERAL (Mantido para a secção de topo)
  fullDescription: "A Tut'S surge no âmbito do projeto final da Licenciatura em MTC na Universidade de Aveiro, orientada pelo Professor David Oliveira. O projeto responde à crescente necessidade de autonomia no ensino superior, combatendo a dispersão de materiais e a falta de fiabilidade nas ferramentas de IA generativa através de uma arquitetura RAG (Retrieval-Augmented Generation).",

  // --- NOVO SISTEMA EDITORIAL (TABS) ---

  // TAB 01: TEORIA
  theoryBlocks: [
    {
      type: 'text',
      title: "Branding & Fundamentos Visuais",
      value: "A identidade visual da Tut'S foi projetada para transmitir clareza mental e segurança académica. O logótipo, centrado na figura do camaleão, simboliza a adaptabilidade do sistema a diferentes perfis de estudante.\n\nA paleta cromática foi estrategicamente construída para otimizar a experiência de estudo e reduzir o 'cognitive load':\n• Verdes Principais (#009957, #54A64E): Representam foco, vitalidade e crescimento académico. Servem como núcleo da marca e orientam os elementos de destaque na interface.\n• Tons de Suporte (#6CB295, #A7C68E): Aplicados para criar hierarquia visual suave, diferenciando elementos UI e reduzindo a fadiga ocular durante a leitura prolongada.\n• Dark Charcoal (#1E1E1E): Utilizado como base estrutural de alto contraste, garantindo máxima legibilidade e um ambiente imersivo (Dark Mode) adequado a longas sessões de estudo."
    },
    {
      type: 'quote',
      value: "Um ecossistema visual que equilibra a inovação tecnológica da IA com o rigor e a serenidade exigidos pelo contexto académico."
    }
  ],

  // PALETA CROMÁTICA REAL (Para gerar os círculos na página)
  colors: [
    { name: "Deep Green", hex: "#009957" },
    { name: "Core Green", hex: "#54A64E" },
    { name: "Muted Teal", hex: "#6CB295" },
    { name: "Soft Sage", hex: "#A7C68E" },
    { name: "Charcoal", hex: "#1E1E1E" }
  ],

  // TAB 02: PRÁTICA
  practiceBlocks: [
    {
      type: 'text',
      title: "UX/UI & Arquitetura de Dados",
      value: "O desenvolvimento técnico foca-se na fiabilidade. Diferente de modelos genéricos, a plataforma implementa uma arquitetura RAG, onde o 'cérebro' do sistema é alimentado exclusivamente por fontes verificadas.\n\nA implementação prioriza a Redução de Ruído com interfaces minimalistas, a Curadoria de Dados para respeitar a integridade académica e a Personalização através de algoritmos que se ajustam ao ritmo de cada estudante."
    },
    {
      type: 'image-body',
      value: "/apresentacoes/tuts/Rag_system.png",
      caption: "Diagrama da arquitetura de recuperação de dados (RAG) integrada na plataforma."
    },
    {
      type: 'text',
      title: "Lógica de Processamento (RAG)",
      value: "O diagrama ilustra o mecanismo de 'Grounding' da plataforma. O processo inicia-se com o input do utilizador via WebApp, que é intercetado pelo motor RAG. \n\nEm vez de gerar uma resposta imediata, o sistema realiza uma consulta semântica à nossa Base de Dados de Conhecimento (fontes curadas). Este contexto recuperado é então injetado no Large Language Model (LLM), garantindo que a resposta final seja tecnicamente fundamentada, rastreável e livre das 'alucinações' típicas de modelos de IA não ancorados."
    }
  ],

  // --- VISUALIZADORES TÉCNICOS ---
  brandbookTitle: "Manual de Identidade Visual",
  brandBookImages: generateFrames('tuts/manual', 39),
  
  viewerType: "hybrid",
  
  // --- REDES E EQUIPA ---
  socialLinks: {
      instagram: "https://www.instagram.com/tuts.ai/",
      linkedin: "https://www.linkedin.com/in/tut-s-7899103b7"
  },

  teamMembers: [
      { name: "Carlos Teixeira", photo: "/assets/team/tuts/carlos.png" },
      { name: "Mariana Tavares", photo: "/assets/team/tuts/mariana.png" },
      { name: "Maria Leonor Frias", photo: "/assets/team/tuts/leonor.png" },
      { name: "Gil Almeida", photo: "/assets/team/tuts/gil.png" }
  ],

  galleryImages: [
    "/apresentacoes/tuts/Rag_system.png",
    "https://placehold.co/800x800/000000/FFFFFF/png?text=UI+MACROS+VIDEOS"
  ]
},
];