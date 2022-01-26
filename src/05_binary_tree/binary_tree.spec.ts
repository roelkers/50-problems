import { print, reset, insert, search } from './binary_tree'

describe('binary tree', () => {
  it('put', () => {
    reset();
    insert(5)    
    insert(10)    
    insert(11)    
    insert(12)    
    // print();
  })

  it('print', () => {
    reset();
    insert(3)
    insert(1)
    insert(5)
    // print();

  })
  
  it('put many vals', () => {
    reset();
    insert(4)
    insert(1)
    insert(7)
    insert(10)
    insert(30)
    insert(0)
    insert(16)
    // print();
  })

  it('returns -1 if val exists', () => {
    reset();
    insert(1)
    expect(insert(1)).toEqual(-1)

    reset();
    insert(1)
    insert(5)
    insert(6)
    expect(insert(1)).toEqual(-1)
  })

  describe('search', () => {
    it('finds a value in tree', () => {
      reset();
      insert(4)
      insert(3)
      insert(6)
      insert(7)
      insert(9)
      insert(10)
      expect(search(6)).toEqual(true)
      expect(search(9)).toEqual(true)
      expect(search(10)).toEqual(true)
    })
  })
})
