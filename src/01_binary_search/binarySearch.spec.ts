import {binarySearch} from './binarySearch'

describe('binarySearch', () => {
  it('finds target', () => {
    expect(binarySearch([1,3,6,7,9,10], 7)).toEqual(3);
    expect(binarySearch([1,3,6,7,9,10], 3)).toEqual(1);
    expect(binarySearch([1,3,6,7,9,10], 6)).toEqual(2);
  })
  it('returns -1 when not found', () => {
    expect(binarySearch([1,3,6,7,9,10], 5)).toEqual(-1);
  })
})
