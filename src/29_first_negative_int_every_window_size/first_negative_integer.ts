export const firstNegative = (list: number[], k: number) => {
  const dequeue: number[] = []
  const returns = []
  let firstNegativeIndex: number | undefined
  for (let index = 0; index < list.length; index++) {
    if(index >= k && (firstNegativeIndex !== undefined && (firstNegativeIndex + k == index))) {
      dequeue.pop()
    } 
    if(list[index] < 0) {
      firstNegativeIndex = index
      dequeue.unshift(list[index])
    }
    if(index >= k - 1) {
      if(dequeue.length > 0) {
        returns.push(dequeue[0])
      } else {
        returns.push(0)
      }
    }
  }
  return returns
}
