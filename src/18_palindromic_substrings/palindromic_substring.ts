export const isPalindrome = (str: string): boolean => {
  const array = str.split("")
  for (let index = 0; index < array.length; index++) {
    const j = array.length - 1 - index 
    if(array[index] !== array[j]) {
      return false
    }
  }
  return true
}

export const palindromicSubstrings = (str: string): string[] => {
  const array = str.split('')
  const set = new Set<string>()
  for (let index = 0; index < array.length; index++) {
    for (let j = array.length -1; j >= index ; j--) {
      const substr = str.substring(index, j+1)
      if(isPalindrome(substr)) {
        set.add(substr)
      }
    }
  }
  return [...set]
}
