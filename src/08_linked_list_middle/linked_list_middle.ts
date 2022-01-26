
interface Item {
  val: number;
  next: Item | null
}

let root: Item | null = null

export const reset = () => {
  root = null
}

export const insert = (val: number) => {
  const newItem = { val, next: null }
  if(!root) {
    root = newItem;
    return;
  }
  let current = root
  while(current.next !== null) {
    current = current.next
  }
  current.next = newItem
}

export const print = () => {
  if(!root) {
    return;
  }
  let current = root
  while(current.next !== null) {
    console.log(current.val)
    current = current.next
  }
  console.log(current.val)
}

export const getMiddle = () => {

  if(!root) {
    return;
  }
  let length = 1 
  let current = root
  while(current.next !== null) {
    length++;
    current = current.next
  }
  let index = 1 
  current = root
  while(index < length/2 && current.next) {
    current = current.next
    index++; 
  }
  return current.val
}
