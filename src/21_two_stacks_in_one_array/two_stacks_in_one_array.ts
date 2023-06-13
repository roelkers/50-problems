
const STK_INIT = 200 

export class DoubleStack {
  private stack: number[] = Array(STK_INIT)
  private index1 = 0
  private index2 = 1 

  push1 (input: number) {
    this.stack[this.index1] = input
    this.index1 += 2;
  }

  push2(input: number) {
    this.stack[this.index2] = input
    this.index2 += 2;
  }

  pop1() {
    if(this.index1 === 0) {
      return -1
    }
    this.index1 -= 2;
    const n = this.stack[this.index1] 
    return n
  }

  pop2 () {
    if(this.index2 === 1) {
      return -1
    }
    this.index2 -= 2;
    const n = this.stack[this.index2] 
    return n
  }
}


