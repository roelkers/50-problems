import {distinctString} from './distinct_string'

describe('disting string', () => {
  it('runs', () => {
    expect(distinctString(["d","b","c","b","c","a"],2)).toEqual("a")
    expect(distinctString(["d","d","a", "a"],1)).toEqual("")
    expect(distinctString(["d","d","a"],1)).toEqual("a")
  })
})
