import { partition } from "./partition_equal_subset_sum"

describe('Partition Equal Subset Sum', () => {
  it('works fine', () => {
    expect(partition([1,5,11,5])).toEqual(true)     
    expect(partition([1,3,5])).toEqual(false)     
    expect(partition([1,3,5,6,5])).toEqual(true)     
  })
})

