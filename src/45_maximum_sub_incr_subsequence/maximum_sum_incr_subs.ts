
// 1, 101, 2, ,3, 100
// 100
// fn(4,4,0)
// fn(3,4,100)
// fn(2,3,103)
// fn(1,2,103)
// fn(1,3,103)

export const maximumSumIncrSubs = (numbers: number[]): number => {
  const table = new Array(numbers.length).fill(new Array(numbers.length).fill(undefined))

  const maximumSumRecur = (index: number, prevIndex: number, sum: number): number => {
    if(index < 0) {
      return sum
    }
    let take = -1
    if (prevIndex === -1 || numbers[index] < numbers[prevIndex]) {
      take = maximumSumRecur(index-1,index, sum + numbers[index])
    }
    return Math.max(
      take,
      maximumSumRecur(index-1,prevIndex, sum)
    )
  }

  return maximumSumRecur(numbers.length-1,-1,0)
} 


// fn(index, prevIndex, sum)
//
// if ( index < 0) {
// return sum
// }
// if (item[index] > item[prevIndex]) {
// return sum
// }
// return max(
//   fn(index-1,index, sum + item[index]),
//   fn(index-1,prevIndex, sum)
// )
// 
