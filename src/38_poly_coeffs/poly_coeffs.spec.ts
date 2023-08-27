import { polyCoeffs } from './poly_coeffs'
describe('poly', () => {
  it('Should run a computation', () => {
    expect(polyCoeffs(5,2)).toEqual(10)
  })
})
