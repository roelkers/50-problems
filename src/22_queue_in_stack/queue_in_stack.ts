//https://www.geeksforgeeks.org/queue-using-stacks/
//
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

export class QueueInStack2 {
  private stack: number[] = new Array(QUEUE_SIZE)
  private tmpStack: number[] = []

  enqueue(input: number) {
    let elem: number | undefined

    elem = this.stack.pop()
    while(elem) {
      this.tmpStack.push(elem)
      elem = this.stack.pop()
    }
    this.stack.push(input)

    elem = this.tmpStack.pop()
    while(elem) {
      this.stack.push(elem)
      elem = this.tmpStack.pop()
    }
  } 

  dequeue() {
    const item = this.stack.pop()
    if(!item) {
      return -1 
    }
    return item
  } 
}



