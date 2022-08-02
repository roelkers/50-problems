export function longesCommonPrefix(strings: string[]) {
  let minLength = 1000000 
  for(let i = 0; i < strings.length; i++) {
    if(minLength > strings[i].length) {
      minLength = strings[i].length
    }
  } 
  let substring: string = ""
  let wasSubstring = false
  for(let i = 1; i < minLength; i++) {
    substring = strings[0].substring(0,i) as string
    if(!strings.every(val => val.substring(0,i) === substring)) {
      if(wasSubstring) {
        return substring.substring(0,i-1);
      } else {
        return ""
      }
    } else {
      wasSubstring = true
    }
  }
  return substring
}
