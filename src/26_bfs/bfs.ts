
export const bfs = (list: number[][]) => {
  const queue = []
  const visited = [] 
  queue.push(list[0][0])
  while(queue.length > 0) {
    const next = queue.pop()
    if(next === undefined) {
      throw new Error("queue empty!")
    }
    visited.push(next)
    for(const edge of list) {
      if(edge[0] === next) {
        queue.unshift(edge[1])
      }
    }
  }

  return visited
}
