//https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1
//
//
//
type Job = [number,number,number]

export const sortJobs = (jobs: Job[]) => {
  return jobs.sort((left: Job, right: Job) => {
    // if(right[1] !== left[1]) {
    //   return left[1] - right[1] 
    // }
    return right[2] - left[2] 
  })
}

export const jobScheduling = (jobs: Job[]) => {
  sortJobs(jobs)
  let currentDeadline = 0  
  const result: Job[] = []
  let nJobs = 0
  let totalProfit = 0;

  while(jobs.length > 0) {
    let added = false
    for (let index = 0; index < jobs.length; index++) {
      if(jobs[index][1] > currentDeadline) {
        const [job] = jobs.splice(index,1)
        result.push(job) 
        currentDeadline += 1
        nJobs++;
        totalProfit+= job[2]
        added = true
      } 
    }
    if(added === false) {
      return [nJobs,totalProfit]
    }
  }

  return [nJobs,totalProfit]
}
