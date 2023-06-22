//https://www.geeksforgeeks.org/deletion-in-binary-search-tree/

export interface Item {
  left: Item | null;
  right: Item | null;
  value: number;
  parent: Item | undefined
}
export const insert = (tree: Item | null, value: number) => {
  const newItem: Item =  { left: null, right: null, value, parent: undefined }
  if(!tree) {
    return newItem
  } 
  if(value >= tree.value) {
    if(!tree.right) {
      tree.right = newItem
      newItem.parent = tree;
      return 
    }
    insert(tree.right, value)
  } else {
    if(!tree.left) {
      tree.left = newItem
      newItem.parent = tree;
      return
    }
    insert(tree.left, value)
  }
}

export const deleteFromBinTree = (item: Item) => {
  //Simple case if leaf
  if(!item.parent) {
    return
  }
  if(!item.left && !item.right) {
    const parent = item.parent
    if(parent!.value < item.value) {
      parent.right = null   
    } else {
      parent.left = null
    }
    return
  }
  //Complex with two children
  if(item.left && item.right) {
    let currItem: Item = item 
    currItem = item.right
    while(currItem.left) {
      currItem = currItem.left
    }
    deleteFromBinTree(currItem)
    item.value = currItem.value
    return;
  }
  //simple left or righ
  if(item.left || item.right) {
    const child = item.left || item.right
    const parent = item.parent
    if(parent!.value < item.value) {
      parent.right  = child 
    } else {
      parent.left = child
    }
  }
}
