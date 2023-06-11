export interface Item {
  next: Item | null;
  value: number;
}

export const deleteDuplicatesFromLinkedList = (list: Item): Item => {
  let currItem: Item | null = list
  let prev: Item | null = null 

  const dict: Record<number,number> = {}

  while(currItem) {
    if(dict[currItem.value]) {
      if(prev){
        prev.next = currItem.next 
      }
    } else { 
      dict[currItem.value] = 1;
      prev = currItem 
    }
    currItem = currItem.next
  }
  return list
}
