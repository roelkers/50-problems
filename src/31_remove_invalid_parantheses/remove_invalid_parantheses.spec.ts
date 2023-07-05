import { removeInvalidParantheses, test } from "./remove_invalid_parantheses"

describe('test', () => {
  it('tests a string', () => {
    expect(test('()()()')).toEqual(true)
    expect(test('(())()')).toEqual(true)
  })
})

describe('invalidParentheses', () => {
  expect(removeInvalidParantheses('()())()')).toEqual(['()()()', '(())()'])
})
