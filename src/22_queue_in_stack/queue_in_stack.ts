const QUEUE_SIZE = 100

export class QueueInStack {
  private stack: number[] = new Array(QUEUE_SIZE)
  private tmpStack: number[] = []

  enqueue(input: number) {
    this.stack.push(input)
  } 

  dequeue() {
    let elem: number | undefined

    elem = this.stack.pop()
    if(!elem) {
      return -1 
    }
    while(elem) {
      this.tmpStack.push(elem)
      elem = this.stack.pop()
    }
    const item = this.tmpStack.pop()

    elem = this.tmpStack.pop()
    while(elem) {
      this.stack.push(elem)
      elem = this.tmpStack.pop()
    }

    return item
  } 

}
