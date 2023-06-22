//https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
//
export interface Item {
  value: number;
  next: Item | null
  visited?: boolean
}

export const detectLoop = (list: Item) => {
  let current: Item | null = list.next;
  if(current === null) {
    return false 
  }
  while(current) {
    if(current.visited) {
      return true 
    }
    current.visited = true 
    current = current.next
  }
  return false
}
