import { findPair } from "./find_pair_sort"
import { findPairHash } from "./find_pair_hash"

it('find_pair_sort', () => {
  expect(findPair([8, 7, 2, 5, 3, 1], 10)).toEqual([2,8])
  expect(findPair([1,18,3,17,25,4], 21)).toEqual([17,4])
  expect(findPair([3,6,8,1,2,17], 21)).toEqual([null,null])
  expect(findPair([1,3], 2)).toEqual([null,null])
})

it('find_pair_hash', () => {
  expect(findPairHash([8, 7, 2, 5, 3, 1], 10)).toEqual([2,8])
  expect(findPairHash([1,18,3,17,25,4], 21)).toEqual([3,18])
  expect(findPairHash([3,6,8,1,2,17], 21)).toEqual([null,null])
  expect(findPairHash([1,3], 2)).toEqual([null,null])
})
