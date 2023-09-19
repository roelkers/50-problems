import _  from "lodash"
import { coinChange, coinChangeDP } from "./coin_change_problem"

describe('Coin change', () => {
  it('works on simple cases', () => {
    const res = coinChange([1,2,3],4)
    expect(res).toEqual(4)
  })
})

// describe('Coin change DP', () => {
//   it('works on simple cases', () => {
//     const res = coinChangeDP([1,2,3],4)
//     expect(res).toEqual(4)
//   })

//   it('works on simple cases 2', () => {
//     const res = coinChangeDP([2,5,3,6],10)
//     expect(res).toEqual(5)
//   })
// })
