
let heap: number[] = []

export function reset() {
  heap = []
}

export function get() {
  return heap
}

function swap(indexA: number, indexB: number) {
  const temp = heap[indexA] 
  heap[indexA] = heap[indexB]
  heap[indexB] = temp
  return;
}

function heapParent(index: number) {
  if(index === 0) {
    return -1
  } 
  return Math.floor(index/2)
}

function child(index: number) {
  return index*2 ;
}

export function makeHeap(items: number[]){
  for(let i = 0; i < items.length; i++) {
    insert(items[i])
  }
}

function insert(item: number) {
  heap.push(item)
  bubbleUp(heap.length - 1)
}

export function extractMin(): number {
  let min = -1;
  if(heap.length === 0) {
    return -1
  }
  min = heap[0]
  heap[0] = heap.pop() as number;
  bubbleDown(0)
  return min
}

export function heapSort(searchArray: number[], ) {
  makeHeap(searchArray) 
  const sorted = []
  for(let i = 0; i < searchArray.length; i++) {
    sorted.push(extractMin());
  }
  return sorted
}

function bubbleUp(index: number) {
  if(heapParent(index) === -1) {
    return
  }
  if(heap[heapParent(index)] > heap[index]) {
    swap(index, heapParent(index)); 
    bubbleUp(heapParent(index))
  }
}

function bubbleDown(index: number) {
  let current = child(index)

  let minIndex = index

  for(let i = 0; i <= 1; i++) {
    if((current + i) <= heap.length - 1) {
      if(heap[minIndex] < heap[current + i]) {
        minIndex = current + i
      }  
    }
  }

  if(minIndex !== index) {
    swap(index, minIndex)
    bubbleDown(minIndex)
  }
}
