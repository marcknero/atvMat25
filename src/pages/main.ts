import { ProductKnnSuggester } from "../core/knnSuggester";
import { TrainingProduct, ProductOption } from "../core/types";

// --- Definindo Nossas Opções e Produtos de Treinamento ---

// Todas as opções possíveis para nossos produtos de supermercado.
const allProductOptions: ProductOption[] = [
  { id: "tipo_grao", name: "Tipo: Grão" },
  { id: "tipo_fatiado", name: "Tipo: Fatiado" },
  { id: "tipo_doce", name: "Tipo: Doce" },
  { id: "tipo_salgado", name: "Tipo: Salgado" },
  { id: "origem_animal", name: "Origem: Animal" },
  { id: "origem_vegetal", name: "Origem: Vegetal" },
  { id: "refrigerado_sim", name: "Refrigerado: Sim" },
  { id: "refrigerado_nao", name: "Refrigerado: Não" },
  { id: "embalagem_kg", name: "Embalagem: Kg" },
  { id: "embalagem_unidade", name: "Embalagem: Unidade" },
  { id: "embalagem_lata", name: "Embalagem: Lata" },
  { id: "sem_gluten", name: "Sem Glúten" },
  { id: "organico", name: "Orgânico" },
  { id: "categoria_lacteo", name: "Categoria: Lácteo" }, // Nova opção
  { id: "sabor_natural", name: "Sabor: Natural" }, // Nova opção
  { id: "categoria_proteina", name: "Categoria: Proteína" }, // Nova opção
  { id: "uso_culinario", name: "Uso: Culinário" }, // Nova opção
];

// Dados de treinamento: Produtos de supermercado existentes com suas opções e o que foi comprado junto.
// Estes dados simulam o histórico de compras e associações de produtos.
const trainingProductsData: TrainingProduct[] = [
  {
    id: "pao_frances",
    name: "Pão Francês",
    selectedOptionIds: [
      "tipo_grao",
      "tipo_salgado",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
    ],
    frequentlyBoughtWith: [
      "manteiga",
      "queijo_prato",
      "leite_integral",
      "tomate",
      "presunto",
      "mussarela",
      "cafe_po",
    ],
  },
  {
    id: "queijo_minas",
    name: "Queijo Minas Frescal",
    selectedOptionIds: [
      "tipo_fatiado",
      "tipo_salgado",
      "origem_animal",
      "refrigerado_sim",
      "embalagem_kg",
      "categoria_lacteo", // Adicionado
    ],
    frequentlyBoughtWith: ["goiabada", "cafe_po", "torradas"],
  },
  {
    id: "ovo_branco",
    name: "Ovo Branco Grande",
    selectedOptionIds: [
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "categoria_proteina", // Adicionado
      "uso_culinario", // Adicionado
    ],
    frequentlyBoughtWith: [
      "bacon",
      "farinha_trigo",
      "oleo_vegetal",
      "sal_fino",
      "fermento",
    ],
  },
  {
    id: "leite_integral",
    name: "Leite Integral",
    selectedOptionIds: [
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "categoria_lacteo", // Adicionado
    ],
    frequentlyBoughtWith: ["cafe_po", "acucar", "bolacha_cream_cracker"],
  },
  {
    id: "manteiga",
    name: "Manteiga com Sal",
    selectedOptionIds: [
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "categoria_lacteo", // Adicionado
    ],
    frequentlyBoughtWith: ["pao_frances", "geleia_morango", "cafe_po"],
  },
  {
    id: "tomate",
    name: "Tomate Italiano",
    selectedOptionIds: [
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
    ],
    frequentlyBoughtWith: ["pao_frances", "queijo_minas", "presunto"],
  },
  {
    id: "presunto",
    name: "Presunto Saboroso",
    selectedOptionIds: [
      "tipo_fatiado",
      "tipo_salgado",
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "categoria_proteina", // Adicionado
    ],
    frequentlyBoughtWith: ["pao_frances", "queijo_minas", "mussarela"],
  },
  {
    id: "mussarela",
    name: "Queijo Mussarela Fatiado",
    selectedOptionIds: [
      "tipo_fatiado",
      "tipo_salgado",
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "categoria_lacteo", // Adicionado
    ],
    frequentlyBoughtWith: ["pao_frances", "presunto", "molho_tomate"],
  },
  {
    id: "geleia_morango",
    name: "Geleia de Morango",
    selectedOptionIds: [
      "tipo_doce",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
    ],
    frequentlyBoughtWith: ["pao_frances", "manteiga", "torradas"],
  },
  {
    id: "cafe_po",
    name: "Café em Pó Tradicional",
    selectedOptionIds: [
      "tipo_grao",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
    ],
    frequentlyBoughtWith: [
      "pao_frances",
      "leite_integral",
      "acucar",
      "bolo_coco",
    ],
  },
  {
    id: "fermento",
    name: "Fermento Biológico Seco",
    selectedOptionIds: [
      "tipo_grao",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
      "uso_culinario", // Adicionado
    ],
    frequentlyBoughtWith: ["farinha_trigo", "sal_fino", "ovo_branco"],
  },

  {
    id: "arroz_parboilizado",
    name: "Arroz Parboilizado 5kg",
    selectedOptionIds: [
      "tipo_grao",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_kg",
    ],
    frequentlyBoughtWith: ["feijao_carioca", "oleo_vegetal", "sal_fino"],
  },
  {
    id: "macarrao_espaguete",
    name: "Macarrão Espaguete",
    selectedOptionIds: [
      "tipo_grao",
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
      "sem_gluten",
    ],
    frequentlyBoughtWith: ["molho_tomate", "carne_moida", "queijo_ralado"],
  },
  {
    id: "iogurte_natural",
    name: "Iogurte Natural",
    selectedOptionIds: [
      "tipo_doce",
      "origem_animal",
      "refrigerado_sim",
      "embalagem_unidade",
      "organico",
      "categoria_lacteo", // Adicionado
      "sabor_natural", // Adicionado
    ],
    frequentlyBoughtWith: ["granola", "frutas_vermelhas", "mel"],
  },
  {
    id: "sabonete_barra",
    name: "Sabonete em Barra",
    selectedOptionIds: [
      "origem_vegetal",
      "refrigerado_nao",
      "embalagem_unidade",
    ], // Apenas para ter opções no vetor, embora não "comestível"
    frequentlyBoughtWith: ["shampoo", "condicionador", "creme_dental"],
  },
  // Adicionando alguns produtos que podem ser sugeridos (não precisam ter opções próprias se não forem o foco principal de similaridade)
  {
    id: "bacon",
    name: "Bacon Defumado",
    selectedOptionIds: [],
    frequentlyBoughtWith: ["feijao_carioca"],
  },
  {
    id: "farinha_trigo",
    name: "Farinha de Trigo",
    selectedOptionIds: [],
    frequentlyBoughtWith: ["fermento", "ovo_branco", "acucar"],
  },
  {
    id: "oleo_vegetal",
    name: "Óleo Vegetal",
    selectedOptionIds: [],
    frequentlyBoughtWith: ["sal_fino", "arroz_parboilizado", "feijao_carioca"],
  },
  {
    id: "queijo_prato",
    name: "Queijo Prato Fatiado",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },

  {
    id: "goiabada",
    name: "Goiabada Cascão",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "torradas",
    name: "Torradas Integral",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "acucar",
    name: "Açúcar Refinado",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "bolacha_cream_cracker",
    name: "Bolacha Cream Cracker",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "bolo_coco",
    name: "Bolo de Coco Caseiro",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "feijao_carioca",
    name: "Feijão Carioca 1kg",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "sal_fino",
    name: "Sal Fino",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "tomate",
    name: "Tomate Italiano",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },

  {
    id: "presunto",
    name: "Presunto Saboroso",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "mussarela",
    name: "Queijo Mussarela Fatiado",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },

  {
    id: "molho_tomate",
    name: "Molho de Tomate",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "carne_moida",
    name: "Carne Moída Patinho",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "queijo_ralado",
    name: "Queijo Ralado Parmesão",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "granola",
    name: "Granola Crocante",
    selectedOptionIds: [],
    frequentlyBoughtWith: ["mel", "iogurte_natural"],
  },
  {
    id: "frutas_vermelhas",
    name: "Frutas Vermelhas Congeladas",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "mel",
    name: "Mel Puro",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "shampoo",
    name: "Shampoo Neutro",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "condicionador",
    name: "Condicionador Hidratante",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "creme_dental",
    name: "Creme Dental Menta",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
  {
    id: "geleia_morango",
    name: "Geleia de Morango",
    selectedOptionIds: [],
    frequentlyBoughtWith: [],
  },
];

// --- Inicializando o Sugeridor KNN ---
const suggester = new ProductKnnSuggester(
  trainingProductsData,
  allProductOptions
);

// --- Cenários de Sugestão ---
// Testando o sistema com diferentes opções selecionadas pelo usuário para produtos de supermercado.

console.log(
  "--- Cenário 1: Usuário seleciona Pão Francês (características de pão) ---"
);
const userSelectedOptions1 = [
  "tipo_grao",
  "tipo_salgado",
  "origem_vegetal",
  "refrigerado_nao",
  "embalagem_unidade",
];
const suggestions1 = suggester.suggestProducts(userSelectedOptions1, 3); // Busca 3 vizinhos mais próximos
console.log(
  "Opções selecionadas:",
  userSelectedOptions1.map(
    (id) => allProductOptions.find((o) => o.id === id)?.name
  )
);
console.log("Sugestões:");
suggestions1.forEach((s) =>
  console.log(`- ${s.name} (Score: ${s.similarityScore})`)
);
console.log("\n");

console.log(
  "--- Cenário 2: Usuário seleciona um tipo de Queijo (características de queijo) ---"
);
const userSelectedOptions2 = [
  "tipo_fatiado",
  "tipo_salgado",
  "origem_animal",
  "refrigerado_sim",
  "embalagem_kg",
];
const suggestions2 = suggester.suggestProducts(userSelectedOptions2, 3);
console.log(
  "Opções selecionadas:",
  userSelectedOptions2.map(
    (id) => allProductOptions.find((o) => o.id === id)?.name
  )
);
console.log("Sugestões:");
suggestions2.forEach((s) =>
  console.log(`- ${s.name} (Score: ${s.similarityScore})`)
);
console.log("\n");

console.log(
  "--- Cenário 3: Usuário seleciona Leite Integral (características de leite) ---"
);
const userSelectedOptions3 = [
  "origem_animal",
  "refrigerado_sim",
  "embalagem_unidade",
];
const suggestions3 = suggester.suggestProducts(userSelectedOptions3, 3);
console.log(
  "Opções selecionadas:",
  userSelectedOptions3.map(
    (id) => allProductOptions.find((o) => o.id === id)?.name
  )
);
console.log("Sugestões:");
suggestions3.forEach((s) =>
  console.log(`- ${s.name} (Score: ${s.similarityScore})`)
);
console.log("\n");

console.log(
  "--- Cenário 4: Usuário seleciona Iogurte Orgânico (características de iogurte) ---"
);
const userSelectedOptions4 = [
  "tipo_doce",
  "origem_animal",
  "refrigerado_sim",
  "embalagem_unidade",
  "organico",
];
const suggestions4 = suggester.suggestProducts(userSelectedOptions4, 2); // K alterado para 2 vizinhos
console.log(
  "Opções selecionadas:",
  userSelectedOptions4.map(
    (id) => allProductOptions.find((o) => o.id === id)?.name
  )
);
console.log("Sugestões:");
suggestions4.forEach((s) =>
  console.log(`- ${s.name} (Score: ${s.similarityScore})`)
);
console.log("\n");
