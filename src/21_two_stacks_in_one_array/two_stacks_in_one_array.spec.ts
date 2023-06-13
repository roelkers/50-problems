import { DoubleStack } from "./two_stacks_in_one_array"

describe('Two Stacks in one array', () => {
  it('Push1 Push2', () => {
     const stack = new DoubleStack() 
     stack.push1(1)
     stack.push2(1)
     stack.push1(2)
     stack.push1(3)

     expect(stack.pop1()).toEqual(3)
     expect(stack.pop1()).toEqual(2)
     expect(stack.pop1()).toEqual(1)
     expect(stack.pop2()).toEqual(1)
     expect(stack.pop1()).toEqual(-1)
     expect(stack.pop2()).toEqual(-1)
  })
})
