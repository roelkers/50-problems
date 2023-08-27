export const wordbreak = (input: string, dict: string[]) => {
  return wordbreakRecur(input, new Set(dict), 1)
}

const wordbreakRecur = (input: string, dict: Set<string>, end: number): boolean => {
  if(input === "") {
    return true
  }
  if(end > input.length) {
    return false
  }
  
  if(dict.has(input.substring(0,end))){
    let remaining = input.slice(end, input.length)
    return wordbreakRecur(remaining,dict,1)
  }

  return wordbreakRecur(input,dict, end+1)
}

