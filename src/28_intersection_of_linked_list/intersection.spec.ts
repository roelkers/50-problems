import { intersection, ListItem } from "./intersection"

describe('Intersection of list items', () => {
  it('works for a simple case', () => {
    const left: ListItem = { value: 0, next: { value: 2 }}
    const right : ListItem = { value: 1, next: { value: 3 }}
    
    expect(intersection(left, right)).toEqual({
      value: 0, next: { value: 1, next: { value: 2, next: { value: 3 }}}
    })
  })
})
