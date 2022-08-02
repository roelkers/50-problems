import { reset, get, put } from './queue'

describe('puts', () => {
  it('inserts items', () => {
    reset();
    put(5);
    put(10);
    put(7);
  })
})

describe('get', () => {
  it('gets items in fifo order', () => {
    reset();
    put(3);
    put(5);
    put(10);
    expect(get()).toEqual(3);
    expect(get()).toEqual(5);
    expect(get()).toEqual(10);
  })
})
