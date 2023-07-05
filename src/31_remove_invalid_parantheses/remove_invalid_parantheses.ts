export const test = (input: string) => {
  const stack = []
  const arr = input.split('')
  let open = 0;
  for(const sym of arr) {
     if(sym === '(') {
        open++;
     } else if (sym === ')') {
       if(open <= 0) {
         return false
       }
       open--;
     } else {
       return false
     }
  }
  return open === 0;
} 

const isParenthese = (s: string) => s === '(' || s === ')'

export const removeInvalidParantheses = (input: string) => {

  const queue = []
  const visited = new Set() 
  const results = []
  let foundSol = false
  queue.push(input)

  while(queue.length > 0) {
    const current = queue.pop()!
    if(test(current)) {
      results.push(current) 
      foundSol = true
    }
    if(foundSol) {
      continue
    }
    for (let index = 0; index < input.length; index++) {
      if(!isParenthese(input[index])) {
        continue
      }
      const temp = input.substring(0,index) + input.substring(index+1)
      if(!visited.has(temp)) {
        queue.push(temp)
        visited.add(temp)
      }
    }
  }

  return results
}
