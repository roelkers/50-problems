

interface Item {
  val: number;
  left: Item | null;
  right: Item | null;
}

export let root: Item | null = null;

export const reset = () => {
  root = null
}

const insertHelper = (item: Item, next: Item) => {
  if(item.val === next.val) {
    return -1;
  } 
  if(item.val > next.val) {
    if(next.right) {
      insertHelper(item, next.right);
      return 1;
    }
    next.right = item 
    return 1;
  }
  if(item.val < next.val) {
    if(next.left) {
      insertHelper(item, next.left);
      return 1;
    }
    next.left = item 
    return 1;
  }
}

export const insert = (val: number) => {
  const item = { val, left: null, right: null }
  if(!root) {
    root = item
    return;
  } 
  insertHelper(item, root);

}

const searchHelper = (val: number, item: Item) :number => {
  if(val === item.val) {
    return 1;
  }
  if(val > item.val) {
    if(item.right) {
      return searchHelper(val, item.right)
    }
    return -1
  }
  if(val < item.val) {
    if(item.left) {
      return searchHelper(val, item.left)
    }
    return -1
  }
  return -1
}

export const search = (val: number) : number => {
  if(!root) {
    return -1
  } 
  return searchHelper(val, root)
}

const printHelper = (item: Item) => {
  if(item.left) {
    printHelper(item.left) 
  }
  console.log(item.val)
  if(item.right) {
    printHelper(item.right) 
  }
}

export const print = () => {
  if(!root) {
    return;
  } 
  printHelper(root)
}

interface LLItem {
  val: number;
  next: LLItem | null
}

let list: LLItem | null = null 

const toLinkedListHelper = (item: Item) => {
  if(item === null) {
    return
  }
  if(item.left === null || item.right === null) {
    return
  }

  if(item.left !== null) {
    toLinkedListHelper(item.left)

    const temp = item.right
    item.right = item.left
    item.left = null
    let curr = item.right

    while(curr.right !== null) {
      curr = curr.right
    }

    curr.right = temp
  }

  toLinkedListHelper(item.right)
}

export const toLinkedList = () => {
  if(!root) {
    return null 
  }
  toLinkedListHelper(root)
}
