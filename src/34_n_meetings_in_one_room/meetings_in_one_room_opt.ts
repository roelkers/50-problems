// 
export const meetingsInOneRoomOpt = (start: number[], end: number[]) => {
    let i, j;
    const meetings = []
     
    // The first activity always gets selected
    i = 0;
    meetings.push(i)
     
    // Consider rest of the activities
    for (j = 1; j < start.length; j++)
    {
     
         // If this activity has start time greater than or
         // equal to the finish time of previously selected
         // activity, then select it
         if (start[j] >= end[i])
         {
              meetings.push(j)
              i = j;
          }
    }
    return meetings.length
}
