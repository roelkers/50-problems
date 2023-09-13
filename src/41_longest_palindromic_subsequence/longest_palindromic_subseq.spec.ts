import { longestPalindromicSubseq } from "./longest_palindromic_subsequence"
import { longestPalindromicIter } from "./longest_palindromic_iterative"


describe('longestPalindromicSubseq', () => {
  it('works', () => {
    expect(longestPalindromicSubseq("aaaabbaa")).toEqual("aabbaa")    
  })
})

describe('longestPalindromicSubseqIter', () => {
  // it('works', () => {
  //   expect(longestPalindromicIter("aaaabbaa")).toEqual(6)    
  // })
})
