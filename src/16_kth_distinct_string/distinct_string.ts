export function distinctString (arr: string[], k: number) {
  let counter = 0;
  let str = ""
  let elem = ""
  const nonDistinct: string[] = []
  const distinct: string[] = []
  let isDuplicate = false

  for(let i = 0; i < arr.length; i++) {
    isDuplicate = false 
    str = arr[i]
    for(let j = i + 1; j < arr.length; j++ ) {
      elem = arr[j]
      if(elem === str) {
        isDuplicate = true
        nonDistinct.push(str)
      }
    }
    if(isDuplicate) {
      nonDistinct.push(str)
    } else if(!nonDistinct.some(elem => elem === str)){
      distinct.push(str) 
    }
  }
  if(distinct.length < k) {
    return ""
  }
  return distinct[k-1]
}
