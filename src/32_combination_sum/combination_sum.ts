import { isEqual, sortBy, uniqWith } from 'lodash'

export const addAll = (numbers: number[]) => numbers.reduce((acc,num) => acc + num,0)

const combinationSumRecur = (input: number[], sum: number, current: number[]): number[][] => {
  if(addAll(current) === sum) {
    return [current]
  } 
  if(addAll(current) > sum) {
    return []
  }
  let solutions: number[][] = []
  for (let index = 0; index < input.length; index++) {
    solutions = [...solutions, ...combinationSumRecur(input, sum, [...current, input[index]])]
  } 
  return solutions
}

export const combinationSum = (input: number[], sum: number) => {
  const arr = combinationSumRecur(input, sum, [])
  const sorted = arr.map(sol => sol.sort()) 
  return sortBy(uniqWith(sorted, isEqual), arr => -arr.length)
}

