export function anagram(stringA: string, stringB : string) {
  const dictionary: Record<string,number> = {}
  
  stringA.split("").forEach((char) => {
     if(dictionary[char]) {
       dictionary[char]++;
     } else {
       dictionary[char] = 1;
     }
  })
  let result = true
  stringB.split("").forEach((char) => {
     if(dictionary[char] && dictionary[char] !== 0) {
       dictionary[char]--;
     } else {
      return result = false
     }
  })
  return  result
}
