import { longestCommonSubseq } from "./longest_common_subseq"

describe('longestCommonSubseq', () => {
  it('works on simple case', () => {
    expect(longestCommonSubseq("ABCDGH","AEDFHR")).toEqual(3)
  })
})
