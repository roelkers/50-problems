import { longestPalindromicSubseq } from "./longest_palindromic_subsequence"

describe('longestPalindromicSubseq', () => {
  it('works', () => {
    expect(longestPalindromicSubseq("aaaabbaa")).toEqual("aabbaa")    
  })
})
