//https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

export const detectCycleRecursively = (list: number[][], current: number, nextNodes:number[], visited: number[]) => {
    let result = false
    for(const node of nextNodes) {

      const alreadyVisited = visited.find(v => v === node)
      if(alreadyVisited) {
        return true
      }
      visited.push(node)

      const nextEdges = list[node].filter(item => item !== current)
      result = detectCycleRecursively(list, node, nextEdges, visited)
      if(result === true){ 
        return true
      }
    }
    return false
}

export const detectCycleInUndirectedGraph = (list: number[][]) => {
  let result = false
  for (let index = 0; index < list.length; index++) {
    result = detectCycleRecursively(list, index, list[index], [])
    if(result === true){ 
      return true
    }
  }
  return false
}
