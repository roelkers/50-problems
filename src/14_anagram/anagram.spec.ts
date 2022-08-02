import {anagram} from './anagram'

describe('anagram', () => {
  it('runs', () => {
    expect(anagram("snafu", "funsa")).toEqual(true)
    expect(anagram("hi", "wa")).toEqual(false)
  })
})
