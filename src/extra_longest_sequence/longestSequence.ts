// given a sorted array, print the length of the longest sequence of characters that are repeating for character X

export const getLongestSequence = (seq: number[], searched: number) => {
  const firstOccurence = binarySearchFirst(seq, searched, 0, seq.length - 1)
  console.log("right")
  const right = boundaryBinarySearch(seq, searched, firstOccurence, seq.length - 1, 1)
  console.log("left")
  const left = boundaryBinarySearch(seq, searched, 0, firstOccurence, -1)

  return right - left
}

export const binarySearchFirst = (seq: number[], searched: number, low: number, high: number): number => {
  const index = Math.round((high + low) / 2)
  if(low > high) {
    return -1
  }
  if(seq[index] === searched) {
    return index
  }
  if(seq[index] > searched) {
    return binarySearchFirst(seq, searched, low, index - 1) 
  } else {
    return binarySearchFirst(seq, searched, index + 1, high)
  } 
}

const boundaryBinarySearch = (seq: number[], searched: number, low: number, high: number, direction : 1 | -1): number => {
  const index = Math.round((high + low) / 2)
  console.log("low",low)
  console.log("high", high)
  if(low > high) {
    if(direction === 1) {
      return low
    } else {
      return high
    }
  }
  if(direction === 1) {
    return boundaryBinarySearch(seq, searched, index + 1, high, direction)
  } else {
    return boundaryBinarySearch(seq, searched, low, index - 1, direction)
  }
}
