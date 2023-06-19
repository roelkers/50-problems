
//[1],[0,2,4],[1,3],[2,4],[1,3]
// 0
// [1]
// []

//[1],[0,2,4],[1,3],[2,4],[1,3]
// [2,4]
// 1
// [0]


//[1],[0,2,4],[1,3],[2,4],[1,3]
// [1,3]
// 2 
// [0,2]


//[1],[0,2,4],[1,3],[2,4],[1,3]
// [1,3]
// 4 
// [0,4]
//
import { detectCycleInUndirectedGraph } from "./detect_cycle_in_undirected_graph"

describe('Detect Cycle in Undirected Graph', () => {
  it('Detects a cycle', () => {
    expect(detectCycleInUndirectedGraph([
      [1],[0,2,4],[1,3],[2,4],[1,3]
    ])).toEqual(true)
  })

  it('returns false if there is no cycle', () => {
    expect(detectCycleInUndirectedGraph([
      [],[2],[1,3],[2]
    ])).toEqual(false)
  })
})
