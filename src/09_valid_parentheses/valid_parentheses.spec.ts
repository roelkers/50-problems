import { validate } from './valid_parentheses'

describe('valid_parentheses', () => {
  it('works for valid input', () => {
    expect(validate('(())')).toEqual(true)
    expect(validate('({[]})')).toEqual(true)
  })

  it('does not work for invalid input', () => {
    expect(validate('(()')).toEqual(false)
    expect(validate('())')).toEqual(false)
    expect(validate('())()')).toEqual(false)
    expect(validate('([)]')).toEqual(false)
    expect(validate('({[])}')).toEqual(false)
  })
})
