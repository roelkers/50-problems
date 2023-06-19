import { LRUCache } from "./lru_cache"

describe('LRU cache', () => {
  it('sets keys', () => {
    const cache = new LRUCache(2)

    cache.set(1,2)
    cache.set(2,3)
    expect(cache.get(1)).toEqual(2)
    expect(cache.get(2)).toEqual(3)
  })

  it('invalidates', () => {
    const cache = new LRUCache(2)

    cache.set(1,2)
    cache.set(2,3)
    cache.set(3,4)
    expect(cache.get(3)).toEqual(4)
    expect(cache.get(1)).toEqual(-1)
  })

  it('refreshes cache', () => {
    const cache = new LRUCache(2)

    cache.set(1,2)
    cache.set(2,3)
    expect(cache.get(1)).toEqual(2)
    expect(cache.get(1)).toEqual(2)
    cache.set(3,4)
    expect(cache.get(3)).toEqual(4)
    expect(cache.get(1)).toEqual(2)
    expect(cache.get(2)).toEqual(-1)
  })
})
