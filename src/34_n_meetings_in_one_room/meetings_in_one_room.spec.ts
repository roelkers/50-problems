//https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
//
import { meetingsInOneRoom } from "./meetings_in_one_room"
import { meetingsInOneRoomOpt } from "./meetings_in_one_room_opt"

describe('MeetingsInOneRoom', () => {
  it('Simple case', () => {
    expect(meetingsInOneRoom([1,3,0,5,8,5],[2,4,6,7,9,9])).toEqual(4)
  })
  it('Another case', () => {
    expect(meetingsInOneRoom([10,12,20],[20,25,30])).toEqual(1)
  })

})

describe('MeetingsInOneRoomOpt', () => {
  it('Simple case', () => {
    expect(meetingsInOneRoomOpt([1,3,0,5,8,5],[2,4,6,7,9,9])).toEqual(4)
  })
})
