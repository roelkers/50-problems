import { swap } from "./largest_number_in_k_swaps"

export const largestNumberInKSwapsOptimal = (input: string, k: number) => {

}

const largestNumberOptRecur = (input: string, k: number, max: string, index: number) => {
  if(k === 0) {
    return
  }
  let currentMax = input[index]
  for (let i = 0; i < input.length; i++) {
    if(parseInt(input[i]) > parseInt(currentMax)) {
      currentMax = input[i]
    }
  }
  if(currentMax !== input[index]){
    k = k - 1;
  }
  for(let i = 0; i < input.length; i++) {
    if(input[i] === currentMax) {
     const next = swap(input, index, i) 
    }
  }
}
