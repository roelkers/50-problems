interface Item {
  val: number;
  next: Item | null;
}

let root: Item | null = null

export function reset() {
  root = null
}

export function put (val: number) {
  if(!root) {
    root = { val, next : null}
  } else {
    let current = root
    while(current.next) {
      current = current.next
    }
    current.next = { val, next: null}
  }
}

export function get() {
  if(!root) {
    return null
  }
  let tmp = root
  root = root.next;
  return tmp.val
}

function reverseHelper(list: Item, newItem: Item | null): Item {
  if(!newItem) {
    return list
  }
  const tmpNext = newItem.next;
  newItem.next = list
  return reverseHelper(newItem, tmpNext)
}

export function reverse() {
  if(!root) {
    return null
  }
  // if(!root.next) {
  //   return root
  // }
  const newRoot = reverseHelper(root, root.next)
  root = newRoot
}
