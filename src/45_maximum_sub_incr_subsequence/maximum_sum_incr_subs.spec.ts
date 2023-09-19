import { maximumSumIncrSubs } from "./maximum_sum_incr_subs"

describe('Maximum Sum', () => {
  it('works a simple case', () => {
    expect(maximumSumIncrSubs([1,101,2,3,100])).toEqual(106)
  })
})
