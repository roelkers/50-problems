
interface Item {
  val: number;
  left: Item | null;
  right: Item | null;
}

let root: Item | null

export function reset() {
  root = null
}

export function insertHelper(item: Item, current: Item): number {
    const val = item.val
    if(current.val === val) {
      return -1
    }
    else if(current.val > val) {
      if(current.right) {
        return insertHelper(item, current.right)
      }
      current.right = item; 
    }
    else if(current.val < val) {
      if(current.left) {
        return insertHelper(item, current.left)
      }
      current.left = item
    }
    return 1;
}

export function insert(val: number) {
  if(!root) {
    root = { val, left: null, right: null }
    return;
  } 
  let current: Item | null = root;

  const newItem = { val, left: null, right: null }
  
  return insertHelper(newItem, current);
}

export function searchHelper(val: number, item: Item | null): boolean {
  if(!item) {
    return false
  }
  if(item.val === val) {
    return true
  } 
  if(item.val > val) {
    return searchHelper(val, item.right);
  }
  if(item.val < val) {
    return searchHelper(val, item.left);
  }
  return false
}

export function search(val: number) {
  if(!root) {
    return false 
  }

  return searchHelper(val, root);
}

export function printHelper(item : Item | null) {
  if(!item) {
    return;
  }
  printHelper(item.left);
  console.log(item.val)
  printHelper(item.right);
}

export function print() {
  if(!root) {
    return;
  }
  printHelper(root)
}
