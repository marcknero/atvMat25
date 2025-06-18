import { ProductOption, TrainingProduct, SuggestedProduct } from "./types"; // Importe se usar o types.ts

export class ProductKnnSuggester {
  private trainingProducts: TrainingProduct[];
  private allPossibleOptionIds: string[];

  constructor(trainingProducts: TrainingProduct[], allPossibleOptions: ProductOption[]) {
    this.trainingProducts = trainingProducts;
    this.allPossibleOptionIds = allPossibleOptions.map((opt) => opt.id);
  }

  convertOptionsToVector(selectedOptionIds: string[]): number[] {
    const vector = new Array(this.allPossibleOptionIds.length).fill(0);
    selectedOptionIds.forEach((optionId) => {
      const index = this.allPossibleOptionIds.indexOf(optionId);
      if (index !== -1) {
        vector[index] = 1;
      }
    });
    return vector;
  }

  euclideanDistance(vec1: number[], vec2: number[]): number {
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

  suggestProducts(queryProductOptionsIds: string[], k: number = 3): SuggestedProduct[] {
    if (k <= 0) {
      console.error("K deve ser um número positivo.");
      return [];
    }

    const queryVector = this.convertOptionsToVector(queryProductOptionsIds);

    const distances = this.trainingProducts.map((product) => {
      const productVector = this.convertOptionsToVector(
        product.selectedOptionIds
      );
      const distance = this.euclideanDistance(queryVector, productVector);
      return { product, distance };
    });

    distances.sort((a, b) => a.distance - b.distance);
    const nearestNeighbors = distances.slice(0, k);

    const suggestionCounts: { [key: string]: { name: string; count: number } } = {};

    nearestNeighbors.forEach(({ product }) => {
      product.frequentlyBoughtWith.forEach((suggestedProductId) => {
        const suggestedProductInTraining = this.trainingProducts.find(
          (p) => p.id === suggestedProductId
        );
        const suggestedProductName =
          suggestedProductInTraining?.name ||
          `Produto Desconhecido (ID: ${suggestedProductId})`;

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

    const suggestions = Object.keys(suggestionCounts)
      .map((id) => ({
        id: id,
        name: suggestionCounts[id].name,
        similarityScore: suggestionCounts[id].count,
      }))
      .sort((a, b) => b.similarityScore - a.similarityScore);

    return suggestions;
  }
}