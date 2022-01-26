import { search, reset, print, insert } from './bin_tree_to_linked_list'
import { toLinkedList } from './bin_tree_to_linked_list'

describe('balanced_tree', () => {
  it('insert', () => {
    insert(1)
    insert(6)
    insert(86)
    insert(10)
    print()
  })

  it('search', () => {
    reset(); 
    insert(2)
    insert(4)
    insert(6)
    insert(13)
    expect(search(13)).toEqual(1)
  })
  
  it('toLinkedList', () => {
    reset(); 
    insert(2)
    insert(4)
    insert(6)
    insert(13)
    toLinkedList();
    console.log(list)
  })
})
