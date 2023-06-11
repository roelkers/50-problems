import { deleteDuplicatesFromLinkedList } from "./delete_duplicates_from_linked_list"

describe('Delete Duplicates from Linked List', () => {
  it('Does nothing on a normal list', () => {
    const list = { value: 1 , next: { value: 2, next : null }}
    expect(deleteDuplicatesFromLinkedList(list)).toEqual({ value: 1 , next: { value: 2, next : null }})
  })

  it('Delete Duplicates from Linked List 1', () => {
    const list = { value: 1 , next: { value: 1, next : null }}
    expect(deleteDuplicatesFromLinkedList(list)).toEqual({ value: 1 , next: null })
  })

  it('Delete Duplicates from Linked List 2', () => {
    const list = { value: 1 , next: { value: 1, next : { value: 3, next: { value: 3, next: { value: 5, next: null }}} }}
    expect(deleteDuplicatesFromLinkedList(list)).toEqual({ value: 1 , next: { value: 3, next : { value: 5, next: null }}})
  })
})
