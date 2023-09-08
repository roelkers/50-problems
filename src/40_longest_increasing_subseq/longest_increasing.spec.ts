import { longestIncreasingSubsequence } from "./longest_increasing_subsequence"

describe('longestIncr', () => {
  it('works', () => {
    expect(longestIncreasingSubsequence([3,10,2,1,20])).toEqual(3)
    // expect(longestIncreasingSubsequence([ 0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15 ])).toEqual(6)
  })
})
