import { deleteFromBinTree, insert, Item } from "./delete_from_binary_tree"

describe('Delete from Binary Tree', () => {
  it('Insert', () => {
    const root: Item = { value: 5, left: null, right: null, parent: undefined }
    insert(root, 2)
    insert(root, 7)
    insert(root, 3)
    insert(root, 10)

    expect(root).toMatchObject({
      value: 5, 
      left: {
        value: 2,
        left: null,
        right: { 
          value: 3,
          left: null,
          right: null
        }
      },
      right: {
        value: 7,
        left: null,
        right: {
          value: 10,
          left: null,
          right: null
        }
      }
    })
  })

  describe('Delete', () => {
    it('Simple case: leaf node left', () => {
      const root: Item = { value: 5, left: null, right: null, parent: undefined }
      insert(root, 2)
      insert(root, 7)
      insert(root, 1)
      insert(root, 10)

      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      })

      deleteFromBinTree(root.left!.left!)
      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: null,
        },
        right: {
          value: 7,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      })
    }) 
    it('Simple case: leaf node right', () => {
      const root: Item = { value: 5, left: null, right: null, parent: undefined }
      insert(root, 2)
      insert(root, 7)
      insert(root, 1)
      insert(root, 10)

      deleteFromBinTree(root.right!.right!)
      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      })
    }) 
    it('Simple case: node with right child', () => {
      const root: Item = { value: 5, left: null, right: null, parent: undefined }
      insert(root, 2)
      insert(root, 7)
      insert(root, 1)
      insert(root, 10)

      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      })

      deleteFromBinTree(root.right!)
      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: null
        },
        right: {
          value: 10,
          left: null,
          right: null
        }
      })
    })
    it('Simple case: node with left child', () => {
      const root: Item = { value: 5, left: null, right: null, parent: undefined }
      insert(root, 2)
      insert(root, 7)
      insert(root, 1)
      insert(root, 10)

      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      })

      deleteFromBinTree(root.left!)
      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 1,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      })
    })

    it('Complex case: node with two children', () => {
      const root: Item = { value: 5, left: null, right: null, parent: undefined }
      insert(root, 3)
      insert(root, 0)
      insert(root, 2)

      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 3,
          left: {
            value: 0,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: null,
            right: null
          }
        },
        right: null,
      })

      deleteFromBinTree(root.left!)
      expect(root).toMatchObject({
        value: 5, 
        left: {
          value: 2,
          right: null,
          left: {
            value: 0,
            left: null,
            right: null
          },
        },
        right: null 
      })
    })

    // it('Complex case: node with two children', () => {
    //   const root: Item = { value: 5, left: null, right: null, parent: undefined }
    //   insert(root, 3)
    //   insert(root, 1)
    //   insert(root, 0)
    //   insert(root, 2)
    //   insert(root, 7)
    //   insert(root, 10)

    //   expect(root).toMatchObject({
    //     value: 5, 
    //     left: {
    //       value: 3,
    //       left: {
    //         value: 1,
    //         left: {
    //           value: 0,
    //           left: null,
    //           right: null
    //         },
    //         right: {
    //           value: 2,
    //           left: null,
    //           right: null
    //         }
    //       },
    //       right: null
    //     },
    //     right: {
    //       value: 7,
    //       left: null,
    //       right: {
    //         value: 10,
    //         left: null,
    //         right: null
    //       }
    //     }
    //   })

    //   deleteFromBinTree(root.left!.left!)
    //   expect(root).toMatchObject({
    //     value: 5, 
    //     left: {
    //       value: 3,
    //       left: {
    //         value: 2,
    //         left: {
    //           value: 0,
    //           left: null,
    //           right: null
    //         },
    //       },
    //       right: null
    //     },
    //     right: {
    //       value: 7,
    //       left: null,
    //       right: {
    //         value: 10,
    //         left: null,
    //         right: null
    //       }
    //     }
    //   })
    // })
  })
})
