
interface Item {
  next: Item | null
  key: string;
  val : number;
}

interface Bucket {
  item: Item 
}


export let hashTable : Array<Bucket | null> = []

const SIZE = 100;

const M = 100

const BASE = 31

export function polynomialHash(key: string): number {
  const chars = key.split('');
  const val = chars.reduce(function(acc: number, char: string, i): number { 
    return char.charCodeAt(0) * Math.pow(BASE, i) + acc; 
  }, 0) 

  return val % M;
} 

export const insert = (key: string, val: number ) => {
  const hash = polynomialHash(key);

  const newItem = { next: null, key, val}

  let bucket = hashTable[hash];
  if(!bucket){
    hashTable[hash] = { item: newItem }
    return;
  }
  let item = bucket.item
  while(item.next) {
    item = item.next
  }
  item.next = { next: null, key, val}
}

export const get = (key: string) => {
  const hash = polynomialHash(key);

  let bucket = hashTable[hash];
  if(!bucket){
    return null
  }
  let item = bucket.item
  while(item.next) {
    if(item.key === key) {
      break;
    }
    item = item.next
  }
  if(item.key === key) {
    return item.val
  }
  return null
}

export const init = () => {
  hashTable = []
  for(let i = 0; i < SIZE; i++) {
    hashTable[i] = null;
  }
}
