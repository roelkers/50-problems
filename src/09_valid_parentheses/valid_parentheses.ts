export const validate = (str: string) => {
  const chars = str.split('')
  let prevChars = []
  let char = "" 
  let prev: string | undefined = ""
  for(let i = 0; i < chars.length; i++) {
    char = chars[i]
    //opening
    if(char === "(") {
      prevChars.push(char)
    }
    //angled
    if(char === "[") {
      prevChars.push(char)
    }
    //squirly
    if(char === "{") {
      prevChars.push(char)
    }
    //
    //closing
    //
    if(char === ")") {
      prev = prevChars.pop()
      if(prev !== "(") {
        return false
      }
    }
    //angled
    if(char === "]") {
      prev = prevChars.pop()
      if(prev !== "[") {
        return false
      }
    }
    //squirly
    if(char === "}") {
      prev = prevChars.pop()
      if(prev !== "{") {
        return false
      }
    }

  }
  if(prevChars.length !== 0) {
    return false
  }
  return true
}
