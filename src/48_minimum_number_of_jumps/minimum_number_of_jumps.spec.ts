import { minimumNumberOfJumps } from "./minimum_number_of_jumps"

describe('Min number of jumps', () => {
  it('works', () => {
    expect(minimumNumberOfJumps([1,3,5,20,1,2,6,7,6,8,9])).toEqual(3)
    expect(minimumNumberOfJumps([1,3,5,8,9,2,6,7,6,8,9])).toEqual(3)
  })
})
