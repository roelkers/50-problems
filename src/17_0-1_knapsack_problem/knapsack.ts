export function maxKnapsack(values: number[], weights: number[], W: number, i:number): number {
    if (W === 0 || i === 0) {
         return 0;
    }
    if (weights[i] > W) {
         return maxKnapsack(values, weights, W, i-1);
    }
    let included = values[i] + maxKnapsack(values, weights, W-weights[i], i-1);
    let excluded = maxKnapsack(values, weights, W, i-1);
    return Math.max(included, excluded);
}
