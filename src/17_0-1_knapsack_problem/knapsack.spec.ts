import { maxKnapsack } from "./knapsack"

describe('knapsack', () => {

  // it('Test 1', () => {
  //   const items = [
  //     { value: 20, weight: 1 },
  //     { value: 5, weight: 2 },
  //     { value: 10, weight: 3 },
  //     { value: 40, weight: 8 },
  //     { value: 15, weight: 7 },
  //     { value: 25, weight: 4 },
  //   ]
  //   expect(knapsack(items,10)).toEqual(60)
  // })

  // it('Test 2', () => {
  //   const items = [
  //     { value: 20, weight: 1 },
  //     { value: 5, weight: 2 },
  //     { value: 10, weight: 3 },
  //     { value: 400, weight: 8 },
  //     { value: 15, weight: 7 },
  //     { value: 25, weight: 4 },
  //   ]
  //   expect(knapsack(items,8)).toEqual(400)
  // })

  it('Test 2', () => {
    const items = [ 10, 400, 25 ]
    const weights = [3, 8, 4]
    expect(maxKnapsack(items,weights, 8, 2)).toEqual(400)
  })
})
