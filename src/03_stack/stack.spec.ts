import { push, reset, pop } from './stack'

describe('stack', () => {
  it('push', () => {
    reset();
    push(5);
    push(3);
    push(1);
  })

  it('pop', () => {
    reset();
    push(5),
    push(10);
    push(1);
    expect(pop()).toEqual(1);
    expect(pop()).toEqual(10);
    expect(pop()).toEqual(5);
    expect(pop()).toEqual(null);
  })
})
