import { bfs } from "./bfs"

describe('BFS', () => {
  it('Visits items in correct order', () => {
    expect(bfs([[0,1],[0,2],[0,3],[2,4]])).toEqual([0,1,2,3,4])
  })
})
