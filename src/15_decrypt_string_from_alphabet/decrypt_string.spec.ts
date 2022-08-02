import { decrypt } from "./decrypt_string"

describe('decrypt string', () => {
  it('works', () => {
    expect(decrypt("123")).toEqual("abc")
    expect(decrypt("10#11#12")).toEqual("jkab")
  })
})
