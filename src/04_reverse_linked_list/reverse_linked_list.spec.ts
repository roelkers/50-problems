import { put, get, reverse } from './reverse_linked_list'

describe('reverse linked list', () => {
  it('reverses', () => {
    put(5)
    put(10)
    put(1)
    reverse();
    expect(get()).toEqual(1);
    expect(get()).toEqual(10);
    expect(get()).toEqual(5);
  })
})
