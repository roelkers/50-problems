import { overlappingIntervals } from "./overlapping_intervals"

describe('Overlapping Intervals', () => {
  it('works on a simple case', () => {
    expect(overlappingIntervals([[1,3],[2,4],[6,8],[9,10]])).toEqual([[1,4],[6,8],[9,10]])
    expect(overlappingIntervals([[1,3],[2,4],[6,8],[7,10]])).toEqual([[1,4],[6,10]])
  })
})
