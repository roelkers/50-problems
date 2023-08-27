export const arraySubset = (target: number[], toCheck: number[]) => {

  const targetDict :Record<string, number> = {}

  for (let index = 0; index < target.length; index++) {
    const element = target[index];
    if(targetDict[element]) {
      targetDict[element]++
    } else {
      targetDict[element] = 1
    }
  }

  for (let index = 0; index < toCheck.length; index++) {
    const element = toCheck[index];
    if(!targetDict[element]) {
      return false
    } else if(targetDict[element] > 1 ) {
      targetDict[element] --;
    } else if(targetDict[element] === 1 ) {
      delete targetDict[element]
    }
  }

  return true
}
