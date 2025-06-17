import { TrainingProduct, SuggestedProduct, ProductOption } from "./types"; // Importa as interfaces TrainingProduct

// Classe que implementa a lógica do KNN para sugerir produtos.
export class ProductKnnSuggester {
  private trainingProducts: TrainingProduct[];
  private allPossibleOptionIds: string[]; // Lista de todos os IDs de opções únicas presentes no conjunto de dados.

  /**
   * Construtor da classe ProductKnnSuggester.
   * @param trainingProducts Os produtos existentes que serão usados para "treinar" o modelo KNN.
   * @param allPossibleOptions Todas as opções de produtos que podem existir.
   */
  constructor(
    trainingProducts: TrainingProduct[],
    allPossibleOptions: ProductOption[]
  ) {
    this.trainingProducts = trainingProducts;
    this.allPossibleOptionIds = allPossibleOptions.map((opt) => opt.id);
  }

  /**
   * Converte as opções selecionadas de um produto em um vetor binário (one-hot encoding).
   * O vetor terá 1 na posição da opção presente e 0 se ausente.
   * @param selectedOptionIds Lista de IDs das opções selecionadas para o produto.
   * @returns Um array de números (vetor binário).
   */
  private convertOptionsToVector(selectedOptionIds: string[]): number[] {
    const vector: number[] = new Array(this.allPossibleOptionIds.length).fill(
      0
    );
    selectedOptionIds.forEach((optionId) => {
      const index = this.allPossibleOptionIds.indexOf(optionId);
      if (index !== -1) {
        vector[index] = 1;
      }
    });
    return vector;
  }

  /**
   * Calcula a distância Euclidiana entre dois vetores.
   * Para vetores binários (one-hot), é a raiz quadrada da soma dos quadrados das diferenças.
   * @param vec1 Primeiro vetor.
   * @param vec2 Segundo vetor.
   * @returns A distância Euclidiana.
   */
  private euclideanDistance(vec1: number[], vec2: number[]): number {
    if (vec1.length !== vec2.length) {
      throw new Error(
        "Vetores devem ter o mesmo comprimento para calcular a distância Euclidiana."
      );
    }
    let sumOfSquares = 0;
    for (let i = 0; i < vec1.length; i++) {
      sumOfSquares += Math.pow(vec1[i] - vec2[i], 2);
    }
    return Math.sqrt(sumOfSquares);
  }

  /**
   * Sugere produtos com base nas opções selecionadas de um produto de consulta.
   * @param queryProductOptionsIds As opções selecionadas para o produto atual do usuário (o produto para o qual queremos sugestões).
   * @param k O número de vizinhos mais próximos a considerar.
   * @returns Uma lista de produtos sugeridos, ordenados por relevância (similarityScore).
   */
  public suggestProducts(
    queryProductOptionsIds: string[],
    k: number = 3
  ): SuggestedProduct[] {
    if (k <= 0) {
      console.error("K deve ser um número positivo.");
      return [];
    }

    const queryVector = this.convertOptionsToVector(queryProductOptionsIds);

    // 1. Calcular a distância do produto de consulta para todos os produtos de treinamento.
    const distances = this.trainingProducts.map((product) => {
      const productVector = this.convertOptionsToVector(
        product.selectedOptionIds
      );
      const distance = this.euclideanDistance(queryVector, productVector);
      return { product, distance };
    });

    // 2. Ordenar os produtos por distância (menor distância = mais próximo).
    distances.sort((a, b) => a.distance - b.distance);

    // 3. Pegar os K vizinhos mais próximos.
    const nearestNeighbors = distances.slice(0, k);

    // 4. Agregação para sugestões: Contar a frequência dos produtos sugeridos pelos vizinhos.
    // Isso ajuda a dar mais peso a produtos que aparecem nas sugestões de múltiplos vizinhos.
    const suggestionCounts: {
      [productId: string]: { name: string; count: number };
    } = {};

    nearestNeighbors.forEach(({ product }) => {
      product.frequentlyBoughtWith.forEach((suggestedProductId) => {
        // Encontrar o nome do produto sugerido, ou usar um nome genérico se não encontrado.
        const suggestedProductName =
          this.trainingProducts.find((p) => p.id === suggestedProductId)
            ?.name || `Produto Desconhecido (ID: ${suggestedProductId})`;
        if (suggestionCounts[suggestedProductId]) {
          suggestionCounts[suggestedProductId].count++;
        } else {
          suggestionCounts[suggestedProductId] = {
            name: suggestedProductName,
            count: 1,
          };
        }
      });
    });

    // 5. Converter as contagens para o formato SuggestedProduct e ordenar por score.
    const suggestions: SuggestedProduct[] = Object.keys(suggestionCounts)
      .map((id) => ({
        id: id,
        name: suggestionCounts[id].name,
        similarityScore: suggestionCounts[id].count, // Usamos a contagem como score de similaridade/relevância.
      }))
      .sort((a, b) => b.similarityScore - a.similarityScore); // Ordenar do mais sugerido para o menos.

    return suggestions;
  }
}
