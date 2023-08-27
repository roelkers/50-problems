//https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1

import { isNaN } from "lodash"

export const swap = (input: string, left: number, right: number) => {
  const splitInput = input.split("")
  const temp = splitInput[left]
  splitInput[left] = splitInput[right]
  splitInput[right] = temp
  return splitInput.join("")
}

interface QueueItem {
  swaps: number,
  item: string
}
export const largestNumberInKSwaps = (k: number, input: string): number => {
  const queue:QueueItem[] = []
  let largest = 0
  queue.unshift({ item: input, swaps: 0 })

  while(queue.length > 0 ) {
    const { item, swaps } = queue.pop()! 

    for (let i = 0; i < item.length; i++) {
      for (let j = i; j < item.length; j++) {
        const swapped = swap(item, i, j)
        const number = Number.parseInt(swapped,10)
        if(isNaN(number)) {
          throw new Error("nan")
        }
        if(number > largest) {
          largest = number
        }
        if(swaps < k) {
          queue.unshift({ item: swapped, swaps: swaps + 1 })
        }
      }
    }
  }

  return largest
}

// expect(largestNumberInKSwaps(3, "345335")).toEqual(5543333)
//

435335
