

export const findPairHash = (input: number[], target: number): [number, number] | [null,null] => {
  const hash: Record<number,boolean> = {}
  for(const value of input) {
    if(hash[target - value]) {
      return [value, target-value]; 
    } 
    hash[value] = true
  }
  return [null,null]
}
