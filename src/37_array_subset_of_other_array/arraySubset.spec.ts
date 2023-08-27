import { arraySubset } from "./arraySubset"

describe('arraySubset', () => {
  it('works for a simple case', () => {
    expect(arraySubset([11,7,1,13,21,3,7,3], [11,3,7,1,7])).toEqual(true)
    expect(arraySubset([1,2,3,4,4,5,6], [1,2,4])).toEqual(true)
  })
})
