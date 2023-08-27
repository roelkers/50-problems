import { largestNumberInKSwaps } from "./largest_number_in_k_swaps"

describe('Largest Number in K swaps', () => {
  it('solves a simple test case', () => {
    expect(largestNumberInKSwaps(3, "345335")).toEqual(554333)
  })

  // it('solves another', () => {
  //   expect(largestNumberInKSwaps(4, "1234567")).toEqual(7654321)
  // })
})
