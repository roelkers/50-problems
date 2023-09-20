import { countPairsWithSum } from "./count_pairs_with_given_sum"

describe('countPairsWithSum', () => {
  it('works', () => {
    expect(countPairsWithSum([1,5,7,-1],6)).toEqual(2)
  })
})
