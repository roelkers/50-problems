import {get, init, insert, hashTable, polynomialHash} from './dictionary_hashtable'

describe('polynomial hash', () => {
  it('appropriate value', () => {
    expect(polynomialHash("a")).toEqual(97) 
    expect(polynomialHash("ab")).toEqual(3135 % 100); 
  })
})

describe('insert', () => {
  it('adds a key and value', () => {
    init();
    insert("hello", 5)
  })

  it('stress', () => {
    init();
    let s: string = ""
    for(let i = 0; i < 1000; i++) {
      s = String.fromCharCode(Math.random() * 100, Math.random() * 100, Math.random() * 100); 
      insert(s, i);
    }
  })

})

describe('get', () => {
  it('gets a previously added item', () => {
    init();
    insert('hi', 1)
    expect(get('hi')).toEqual(1)
  })

  it('gets two items from same bucket', () => {
    init();
    insert('n', 1)
    insert('\n', 2)
    expect(get('n')).toEqual(1)
    expect(get('\n')).toEqual(2)
  })
})
