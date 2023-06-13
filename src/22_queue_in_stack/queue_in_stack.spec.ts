import { QueueInStack } from "./queue_in_stack"

describe('Queue from stack',() => {
  it('Can implement queue in stack', () => {
    const q = new QueueInStack()

    q.enqueue(1)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(5)
    expect(q.dequeue()).toEqual(1)
    expect(q.dequeue()).toEqual(3)
    expect(q.dequeue()).toEqual(4)
    expect(q.dequeue()).toEqual(5)
    expect(q.dequeue()).toEqual(-1)

  })
})
