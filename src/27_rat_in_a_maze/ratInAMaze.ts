
export const ratInAMaze = (input: number[][]): string[] => {
  const paths : string [] = []
  ratInAMazeRecur(input, [0,0],"",paths,[])
  return paths
}

const checkIfVisited = (visited: [number,number][],next: [number,number]): boolean => {
    return visited.some(node => node[0] === next[0] && node[1] === next[1])
}

export const ratInAMazeRecur = (input: number[][], next: [number,number], currentPath: string, paths: string[], visited: [number,number][]): boolean => {
  const [i,j] = next
  const nextVisited = [next,...visited]

  if(i+1 < input.length && input[i+1][j] === 1 && !checkIfVisited(nextVisited,[i+1,j])) {
    if(ratInAMazeRecur(input,[i+1,j],currentPath.concat("D"),paths,nextVisited)) {
      paths.push(currentPath.concat("D"))
    }
  }
  if(i > 0 && input[i-1][j] === 1 && !checkIfVisited(nextVisited,[i-1,j])) {
    if(ratInAMazeRecur(input,[i-1,j],currentPath.concat("U"),paths,nextVisited)) {
      paths.push(currentPath.concat("U"))
    }
  }
  if(j+1 < input.length && input[i][j+1] === 1 && !checkIfVisited(nextVisited,[i,j+1])) {
    if(ratInAMazeRecur(input,[i,j+1],currentPath.concat("R"),paths,nextVisited)) {
      paths.push(currentPath.concat("R"))
    }
  }
  if(j > 0 && input[i][j-1] === 1 && !checkIfVisited(nextVisited,[i,j-1])) {
    if(ratInAMazeRecur(input,[i,j-1],currentPath.concat("L"),paths,nextVisited)) {
      paths.push(currentPath.concat("L"))
    }
  }

  if(i === input.length -1 && j === input.length -1) {
    return true
  }
  return false
}
