export const polyCoeffs = (n: number, k: number) => {
  const table: number[][] = new Array(n+1) 
  for (let index = 0; index < table.length; index++) {
    table[index] = new Array(k+1).fill(undefined)
  }

  const polyRecur = (n: number, k: number): number => {
    if(k === 0 || n === k)  {
      return 1
    }
    let left: number | undefined = table[n-1][k-1]
    if(!left) {
      left = polyRecur(n-1,k-1)
    }
    let right: number | undefined = table[n-1][k]
    if(!right) {
      right = polyRecur(n-1,k)
    }
    table[n][k] = left! + right!
    return left! + right!
  }
  return polyRecur(n,k)
}

//5
//2
