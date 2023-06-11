// google
// 012345
//
//

const checkPalindromeFromPoint = (str: string, lower: number, higher: number, set: Set<string>): void => {
    console.log(str)
    const array = str.split("")
    console.log(array[lower], array[higher])
    while(lower >=0 && higher < array.length && array[lower] === array[higher]) {
      set.add(str.substring(lower,higher+1))
      lower--;
      higher++;
      console.log(lower, higher)
      console.log(array[lower], array[higher])
    }
}


export const optimalPalindromicSubstr = (str: string): string[] => {
  const array = str.split("")
  const even = array.length % 2 === 0;
  const set = new Set<string>()
  for (let index = 0; index < array.length; index++) {
    checkPalindromeFromPoint(str, index, index, set)
    if(even) {
      checkPalindromeFromPoint(str, index, index+1, set)
    }
  }
  return [...str]
}
