import { detectLoop, Item } from "./detect_loop_in_linked_list"

describe('Detect Loop', () => {
  it('Detects a loop', () => {
    const list: Item = { value: 1, next: { value : 2, next: null } }
    list!.next!.next = list

    expect(detectLoop(list)).toEqual(true)
  })

  it('Detects a loop 2', () => {
    const list: Item = { value: 1, next: null }

    expect(detectLoop(list)).toEqual(false)
  })

  it('Detects a loop 3', () => {
    const list: Item = { value: 1, next: null }
    list.next = list

    expect(detectLoop(list)).toEqual(true)
  })

  it('Detects a loop 4', () => {
    const list: Item = { value: 1, next: { value : 2, next: null } }
    list!.next!.next = list.next

    expect(detectLoop(list)).toEqual(true)
  })
})
