import { merge, mergeSort } from "./merge_sort"

describe('Merge sort', () => {
  it('works', () => {
    expect(mergeSort([1,6,7,10,2,8,9])).toEqual([1,2,6,7,8,9,10])    
    expect(mergeSort([1,3,6,20,1,4,5])).toEqual([1,1,3,4,5,6,20])    
    expect(mergeSort([-1,-6,7,-10,2,8,9])).toEqual([-10,-6,-1,2,7,8,9])    
  })

  it('merge', () => {
    expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
    expect(merge([1,3,6], [2,4,5])).toEqual([1,2,3,4,5,6])
    expect(merge([3,4,6], [1,2,5])).toEqual([1,2,3,4,5,6])
  })
})
