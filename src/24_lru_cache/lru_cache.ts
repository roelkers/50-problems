export interface ListItem {
  key: number
  value: number,
  next?: ListItem;
  prev?: ListItem;
}

export class LRUCache {
  constructor(size: number) {
    this.MAX_SIZE = size 
  }

  private MAX_SIZE: number
  private dict: Record<number,ListItem> = {}
  private size = 0

  private prioQueueStart?: ListItem
  private prioQueueEnd?: ListItem

  evict() {
      const evicted = this.prioQueueEnd
      this.prioQueueEnd = evicted!.prev
      evicted!.prev!.next = undefined
      delete this.dict[evicted!.key]
  }

  moveToBeginning(item: ListItem) {
      if(item.prev)  {
        item.prev.next = item.next
      }
      if(item === this.prioQueueEnd) {
        this.prioQueueEnd = item.prev
      }
      item.next = this.prioQueueStart
      item.prev = undefined
      this.prioQueueStart!.prev = item
      this.prioQueueStart = item
  }

  set(key: number, value: number) {
    const item: ListItem = { key, value }
    this.dict[key] = item
    console.log(this.prioQueueStart)

    if(!this.prioQueueStart) {
      this.prioQueueStart = item;
      this.prioQueueEnd = item;
      this.size++;
    } else if(this.size >= this.MAX_SIZE) {
      this.evict()
      this.moveToBeginning(item)
    } else {
      this.size++;
      this.moveToBeginning(item)
    }
  }

  get(key: number): number {
    const item = this.dict[key] 
    if(!item) {
      return -1
    }
    if(item !== this.prioQueueStart) {
      this.moveToBeginning(item)
    }
    return item.value
  }
}
