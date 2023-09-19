import { kadanesAlgorithm } from "./kadanes_algorithm"

describe('kadanes algorithm', () => {
  it('works on a simple case', () => {
    expect(kadanesAlgorithm([-2,-3,4,-1,-2,1,5,-3])).toEqual(7) 
  })
})
