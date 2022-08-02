

interface Item {
  val : number;
  next: Item | null
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
