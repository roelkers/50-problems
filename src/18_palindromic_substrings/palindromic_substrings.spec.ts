import { palindromicSubstrings } from "./palindromic_substring"
import { optimalPalindromicSubstr } from './optimal_palindromic_substr'

describe('Palindromic substring', () => {
  it('Test 1', () => {
    expect(
      palindromicSubstrings('google').sort())
      .toEqual(["e","l","g","o","oo","goog"].sort()
    )
  })
})

// describe('Optimal Palindromic substring', () => {
//   it('Test 1', () => {
//     expect(
//       optimalPalindromicSubstr('google').sort())
//       .toEqual(["e","l","g","o","oo","goog"].sort()
//     )
//   })
// })
