import { jobScheduling, sortJobs } from "./job_scheduling"


describe('JobScheduling', () => {
  it('Works for a simple case', () => {
    expect(jobScheduling([[1,4,20],[2,1,10],[3,1,40],[4,1,30]])).toEqual([2,60])
  })

  it('Works for another case', () => {
    expect(jobScheduling([[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]])).toEqual([2,127])
  })
})
