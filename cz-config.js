module.exports = {
  types: [
    { value: "feat", name: "✨ feat:     Uma nova funcionalidade" },
    { value: "fix", name: "🐛 fix:      Correção de bug" },
    { value: "docs", name: "📚 docs:     Apenas mudanças na documentação" },
    {
      value: "style",
      name: "🎨 style:    Mudanças que não afetam o significado do código (espaços em branco, formatação, etc)",
    },
    {
      value: "refactor",
      name: "🔨 refactor: Mudança no código que não corrige um bug nem adiciona uma funcionalidade",
    },
    {
      value: "perf",
      name: "🚀 perf:     Mudança de código que melhora a performance",
    },
    {
      value: "test",
      name: "✅ test:     Adicionando testes ausentes ou corrigindo testes existentes",
    },
    {
      value: "build",
      name: "📦 build:    Mudanças que afetam o sistema de build ou dependências externas (ex: gulp, npm)",
    },
    {
      value: "ci",
      name: "🔧 ci:       Mudanças na configuração de CI e scripts (ex: Travis, Circle, Jenkins)",
    },
    {
      value: "chore",
      name: "📝 chore:    Outras mudanças que não modificam src ou arquivos de teste",
    },
    { value: "revert", name: "↩️ revert:   Reverte um commit anterior" },
  ],
  scopes: [
    { name: "frontend" },
    { name: "backend" },
    { name: "api" },
    { name: "config" },
    { name: "tests" },
    { name: "docs" },
    { name: "build" },
  ],
  messages: {
    type: "Selecione o tipo de mudança que você está cometendo:",
    customScope: "Denomine o escopo desta mudança (opcional):",
    subject: "Escreva uma descrição breve e imperativa da mudança:\n",
    body: 'Forneça uma descrição detalhada da mudança (opcional). Use "|" para quebras de linha:\n',
    breaking:
      "Liste quaisquer mudanças que quebram a compatibilidade (opcional):\n",
    footer:
      "Liste quaisquer issues fechadas por esta mudança (ex: #31, #34) (opcional):\n",
    confirmCommit: "Tem certeza que deseja continuar com o commit acima?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
};
