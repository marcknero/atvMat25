// --- 1. Definições de Tipos (types.ts) ---
// Representa uma opção de produto, como "Cor: Vermelho" ou "Tamanho: M".
export interface ProductOption {
  id: string; // ID único da opção (ex: 'cor_vermelho')
  name: string; // Nome legível da opção (ex: 'Cor: Vermelho')
}

// Representa um produto em nosso conjunto de dados de treinamento.
export interface TrainingProduct {
  id: string; // ID único do produto
  name: string; // Nome legível do produto
  // As opções selecionadas para este produto (servem como as características para o KNN).
  selectedOptionIds: string[];
  // Uma lista de IDs de outros produtos que foram frequentemente comprados/sugeridos junto com este.
  // Isso é o que o nosso KNN tentará aprender a sugerir.
  frequentlyBoughtWith: string[];
}

// Representa um produto sugerido pelo sistema KNN.
export interface SuggestedProduct {
  id: string; // ID do produto sugerido
  name: string; // Nome do produto sugerido
  // Um score que indica a similaridade ou relevância (neste caso, a frequência nos vizinhos).
  similarityScore: number;
}
