import { subsetSum } from "./subset_sum"

describe('subsetSum', () => {
  it('Works on a simple case', () => {
    expect(subsetSum([1,5,11,5])).toEqual(true)
    expect(subsetSum([1,3,5])).toEqual(false)
  })  
})
