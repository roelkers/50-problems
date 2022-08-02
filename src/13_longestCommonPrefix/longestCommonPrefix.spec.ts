import { longesCommonPrefix } from "./longestCommonPrefix"

describe('longest common', () => {
  it('runs', () => {
    expect(longesCommonPrefix(["car", "caller", "catapult"])).toEqual("ca")
    expect(longesCommonPrefix(["alleskann", "alleskönner", "alleskaputt"])).toEqual("allesk")
    expect(longesCommonPrefix(["obl", "ak", "umv"])).toEqual("")
  })
})
