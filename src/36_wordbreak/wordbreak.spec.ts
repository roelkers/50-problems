import { wordbreak } from './wordbreak'

describe('Wordbreak', () => {
  it('works on simple case', () => {
    expect(wordbreak("ilike", ["i","like", "samsung", "sam", "sung", "mobile","ice", "cream", "icecream", "man", "go", "mango"])).toEqual(true)   
    expect(wordbreak("iiiiii", ["i","like", "samsung", "sam", "sung", "mobile","ice", "cream", "icecream", "man", "go", "mango"])).toEqual(true)   
    expect(wordbreak("ilikebigballs", ["i","like", "samsung", "sam", "sung", "mobile","ice", "cream", "icecream", "man", "go", "mango"])).toEqual(false)   
  })
})
