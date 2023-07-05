import { combinationSum } from "./combination_sum"

describe('Combination Sum', () => {
  it('works fine on a simple case', () => {
    expect(combinationSum([7,2,6,5],16)).toEqual([
        [2,2,2,2,2, 2, 2, 2],
        [2,2,2,2,2, 6],
        [2,2,2,5,5],
        [2,2,5,7],
        [2,2,6,6],
        [2,7,7],
        [5,5,6]
      ]
    )
  })
})
