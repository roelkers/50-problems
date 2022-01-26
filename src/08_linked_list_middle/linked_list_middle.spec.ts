import { getMiddle, insert, print, reset } from "./linked_list_middle"


describe('linked list middle', () => {
  it('finds middle of linked list', () => {
    reset();
    insert(1)
    insert(5)
    insert(10)
    insert(15)
    expect(getMiddle()).toEqual(5);
  })

  it('find for uneven number', () => {
    reset();
    insert(1)
    insert(5)
    insert(10)
    expect(getMiddle()).toEqual(5);
  })

  it('find for uneven number', () => {
    reset();
    insert(1)
    insert(1)
    insert(5)
    insert(1)
    insert(10)
    expect(getMiddle()).toEqual(5);
  })
})
