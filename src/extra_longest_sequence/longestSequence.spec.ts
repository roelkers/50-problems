import { binarySearchFirst, getLongestSequence } from "./longestSequence"

describe('Boundary Binary Search', () => {
  it('finds first occurence', () => {
    expect(binarySearchFirst([0,0,0,1,2,2,2,2,2,2,2,2,2], 1, 0, 12)).toEqual(3)
    expect(binarySearchFirst([0,1,2,2,2],1,0,4)).toEqual(1)
    expect(binarySearchFirst([0,1,2,2,2,2],1,0,5)).toEqual(1)
  })

  it('gets number of occurences', () => {
    // expect(getLongestSequence([0,1,2,2,2],1)).toEqual(1)
    // expect(getLongestSequence([0,1,1,2,2,2],1)).toEqual(1)
    // expect(getLongestSequence([0,1,1,1,1,1,1,1,2,2,2],1)).toEqual(7)
  })
})
