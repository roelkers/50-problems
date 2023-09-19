export const overlappingIntervals = (intervals: number[][]) => {
  intervals.sort((a,b) => a[0]- b[0])
  let runningIntervalIndex = 0
  const result = []

  for (let index = 0; index < intervals.length; index++) {
    const currentInterval = intervals[index];
    if(currentInterval[0] > intervals[runningIntervalIndex][1]) {
      const intervalStart = intervals[runningIntervalIndex][0] 
      const intervalEnd = intervals[index-1][1]
      result.push([intervalStart,intervalEnd])

      // new start
      runningIntervalIndex = index
    }
    if(index === intervals.length - 1) {
      const intervalStart = intervals[runningIntervalIndex][0] 
      const intervalEnd = intervals[index][1]
      result.push([intervalStart,intervalEnd])
    }
  }
  return result
}

// [[1,3],[2,4],[6,8],[9,10]]
// [[1,3],[2,4],[6,8],[9,10]]
// cI [9,10]
// rIi 3 
//
// 
