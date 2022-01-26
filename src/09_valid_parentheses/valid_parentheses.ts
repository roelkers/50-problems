export const validate = (str: string) => {
  const chars = str.split('')
  let prevChars = []
  let char = "" 
  for(let i = 0; i < chars.length; i++) {
    char = chars[i]
    console.log(i)
    console.log("char", char)
    //opening
    if(char === "(") {
      normalDepth++
      lastOpen = char
    }
    //angled
    if(char === "[") {
      angledDepth++
      lastOpen = char
    }
    //squirly
    if(char === "{") {
      squirlyDepth++
      lastOpen = char
    }
    //
    //closing
    //
    if(char === ")") {
      if(lastOpen !== "(") {
        return false
      }
      normalDepth--
    }
    //angled
    if(char === "]") {
      if(lastOpen != "[") {
        return false
      }
      angledDepth--
    }
    //squirly
    if(char === "}") {
      console.log(lastOpen)
      if(lastOpen !== "{") {
        return false
      }
      squirlyDepth--
    }

  }
  console.log("finish")
  if(normalDepth !== 0|| squirlyDepth !== 0 || angledDepth !== 0) {
    return false
  }
  return true
}
