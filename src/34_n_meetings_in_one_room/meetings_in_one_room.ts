export const meetingsInOneRoom = (start: number[], end: number[]) => {
  const meetings: [number,number][] = []
  let currentEnd = 0

  while(start.length > 0) {

    let bestIndex: number | undefined = undefined 
    let bestMeeting: [number,number] | undefined = undefined 

    for (let index = 0; index < start.length; index++) {
      if(start[index] > currentEnd && (!bestMeeting || end[index] < bestMeeting[1])) { 
         bestIndex = index 
         bestMeeting = [start[bestIndex],end[bestIndex]]
      }
    }
    if(bestMeeting !== undefined && bestIndex !== undefined) {
      meetings.push(bestMeeting)
      start.splice(bestIndex, 1)
      end.splice(bestIndex, 1)
      currentEnd = bestMeeting[1]
    } else {
      return meetings.length
    }
  }
  return meetings.length
}
