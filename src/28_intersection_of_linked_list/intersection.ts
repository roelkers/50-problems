
export interface ListItem {
  value : number;
  next?: ListItem
}

export const intersection = (left: ListItem, right: ListItem) => {
  let int: ListItem | undefined
  let toReturn: ListItem | undefined
  let leftItem: ListItem | undefined = left
  let rightItem: ListItem | undefined = right

  while(leftItem || rightItem) {
    let toInsert : ListItem | undefined
    if((leftItem && rightItem && leftItem.value < rightItem.value) || (leftItem && !rightItem) ) {
      toInsert = leftItem
      leftItem = leftItem.next
    } else if ((leftItem && rightItem && leftItem.value >= rightItem.value) || (rightItem && !leftItem)) {
      toInsert = rightItem
      rightItem = rightItem.next
    } 

    if(int) {
      int.next = toInsert
      int = int.next
    } else {
      int = toInsert
      toReturn = int
    }
  }
  return toReturn
}

