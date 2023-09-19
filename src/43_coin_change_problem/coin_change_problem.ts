import _, { uniqWith } from "lodash"

export const coinChange = (coins: number[], sum: number): number => {
  const combos: number[][] = []
  // const table = new Array(coins.length).fill(new Array(coins.length).fill(0))

  const coinChangeRecur = (index: number, value: number, current: number[]) => {
    if(value === sum) {
      combos.push(current)
    }
    if(value > sum) {
      return
    }
    if(index >= coins.length) {
      return
    }
    coinChangeRecur(index+1,value,current)
    coinChangeRecur(index,value + coins[index],[...current,coins[index]])
    coinChangeRecur(index+1,value + coins[index],[...current,coins[index]])
  }

  coinChangeRecur(0,0,[])
  return uniqWith(combos, _.isEqual).length
}


export const coinChangeDP = (coins: number[], sum: number): number => {
  const table = new Array(coins.length).fill(new Array(coins.length).fill(0))

  // let added = true

  // for (let i = 0; i < coins.length; i++) {
  //   while (added == true) {
  //     let j = 0
  //     added = false 
  //     if(table[i]) {

  //     }
  //     j = j +1
  //   }
  // }

  const coinChangeRecur = (index: number, value: number): number => {
    if(value === 0) {
      table[index][value] = 1
    }
    if(value < 0) {
      return 0
    }
    if(index <= 0) {
      return 0
    }

    if(table[index][value]) {
      return table[index][value]
    }

    table[index][value] = 
      coinChangeRecur(index, value - coins[index-1]) 
    + coinChangeRecur(index-1,value)
    return table[index][value]
  }

  return coinChangeRecur(coins.length-1,sum)
}

// 1
// 1 2
// 1 1
// 1 1

// [1,2,3],4
// 0,1,[1]
// 1,1,[1]

// 0, 2, [1,1]
// 1, 2, [1,1]
// 1, 3, [1,2]
// 1, 3, [1,2]
