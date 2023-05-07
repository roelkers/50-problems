// 0-1 knapsack
//

    // const items = [
    //   { value: 20, weight: 1 },
    //   { value: 5, weight: 2 },
    //   { value: 10, weight: 3 },
    //   { value: 40, weight: 8 },
    //   { value: 15, weight: 7 },
    //   { value: 25, weight: 4 },
    // ]
    
    // expect(knapsack(items,10)).toEqual(60)

    //   { value: 25, weight: 4 }, cap = 6
//

    //   { value: 15, weight: 7 },
//
      // { value: 10, weight: 3 },
      // { value: 400, weight: 8 },
      // { value: 25, weight: 4 },
//

export interface Item {
  value: number,
  weight: number
}

const getValue = (items: Item[]): number => {
  return items.map(i => i.value).reduce((val, acc) => acc + val, 0)
}

export const knapsackRec = (items: Item[], capacity: number, currItems: Item[]): number => {
  console.log(capacity)
  const curr = items.shift();

  if(!curr) {
    return getValue(currItems)
  }
  let maxWith = -Infinity
  if(capacity - curr.weight >= 0) {
    maxWith = knapsackRec(items, capacity - curr.weight, [...currItems, curr]) 
  }
  
  const maxWithout = knapsackRec(items, capacity, currItems) 

  return maxWith > maxWithout ? maxWith : maxWithout
} 

export const knapsack= (items: Item[], weight: number): number => {
  console.log(weight)
  return knapsackRec(items,weight,[])
}

