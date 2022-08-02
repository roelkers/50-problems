import { findDuplicate, reverse, secondBiggest } from './reverse_string'

describe('reverse a string', () => {
  it('works', () => {
    expect(reverse("asnad")).toEqual("dansa")
  })
})

describe('second biggest element', () => {
  it('works', () => {
    expect(secondBiggest([1,3,5,7,44,22,11])).toEqual(22)
  })
})

describe('find duplicate in array', () => {
  it('works', () => {
    expect(findDuplicate([1,3,5,3,6])).toEqual([3])
    expect(findDuplicate([1,3,5,3,1])).toEqual([1,3])
  })
})
