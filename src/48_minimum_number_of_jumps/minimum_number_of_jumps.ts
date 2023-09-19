const getMaxNewPos = (pos: number,array: number[]) => {
  return pos + array[pos] 
}

const getMaxNewNewPos = (pos: number,array: number[]) => {
  const newPos = getMaxNewPos(pos,array)
  return newPos + array[newPos]
}

export const minimumNumberOfJumps = (array: number[]) => {
  let currentPos = 0
  let jumps = 0
  while(currentPos < array.length) {
    // let maxNewPos = currentPos + array[currentPos] 
    // let maxNewNewPos = maxNewPos + array[currentPos + array[currentPos]]
    let maxNewPos = getMaxNewPos(currentPos, array)
    let maxNewNewPos = getMaxNewNewPos(currentPos,array)
    let bestPos = maxNewPos

    for (let index = currentPos; index < maxNewPos; index++) {
      if(getMaxNewPos(index,array) - (maxNewPos - index) > maxNewNewPos) {
        maxNewNewPos = getMaxNewPos(index,array) - (maxNewPos - index)
        bestPos = index
      } 
    }

    currentPos = bestPos
    jumps++
  }

  return jumps

}

// 0  1  2  3   4  5  6  7  8  9  10  
// ------------------------------------ 
// 1, 3, 5, 20, 1, 2, 6, 7, 6, 8, 9
//
// currentPos 3 
// maxNewPos 4
// maxNewNewPos = 5 
//
// 5 - (4-2)
// 20 - (4-3) 
// 19


