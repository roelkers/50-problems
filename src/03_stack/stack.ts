interface Item {
  val : number,
  next: Item | null
}

let root : Item | null = null

export function reset() {
  root = null
}

export function push(val: number) {
  if(!root) {
    root = { val, next: null }
  } else {
    const temp = root;
    root = { val, next: temp }
  }
}

export function pop() {
  if(!root) {
    return null;
  }
  const temp = root;
  root = root.next;
  return temp.val
}
