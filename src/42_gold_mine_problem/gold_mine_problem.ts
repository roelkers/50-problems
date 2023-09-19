export const goldMine = (mat: number[][]) => {
  const table = new Array(mat.length).fill(new Array(mat.length).fill(0))
  const n = table.length
  
  for (let col = table.length - 1; col >= 0 ; col--) {
    for (let row = 0; row < table.length; row++) {
      const right = (col == n-1) ? 0 : table[row][col+1] 

      const rightUp = (row == 0 || col == n-1) ? 0 : table[row-1][col+1]

      const rightDown = (row == n-1 || col == n-1) ? 0 : table[row+1][col+1]
      console.log(right, rightUp,rightDown)
      
      table[row][col] = mat[row][col] + Math.max(right, Math.max(rightUp, rightDown))
    } 
  }

  console.log(table)
  let res = table[0][0]
  for (let index = 1; index < table.length; index++) {
    res = Math.max(res, table[index][0]) 
  }
  return res
}


//                    {0, 6, 4}};
//                    {2, 1, 4},
// Input : mat[][] = {{1, 3, 3},
