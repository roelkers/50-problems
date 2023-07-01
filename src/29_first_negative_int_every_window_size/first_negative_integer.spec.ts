import { firstNegative } from "./first_negative_integer"

describe('First Negative', () => {
  it('works for a simple case', () => {
    expect(firstNegative([-8,2,3,-6,10],2)).toEqual([-8,0,-6,-6])
  })
})
