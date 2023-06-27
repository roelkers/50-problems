import { ratInAMaze } from "./ratInAMaze"

describe('Rat in a maze', () => {
  it('Finds a path', () => {
    const maze = [[1, 0, 0, 0],
             [1, 1, 0, 1], 
             [1, 1, 0, 0],
             [0, 1, 1, 1]]
    expect(ratInAMaze(maze)).toEqual(["DDRDRR","DRDDRR"])
  })
})
