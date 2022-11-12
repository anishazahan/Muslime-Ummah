import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './blog/blogSlice'
import eventSlice from './event/eventSlice'
import serviceslice from './service/serviceslice'
import userSlice from './user/userSlice'
import teamSlice from './team/teamSlice'
import donationSlice from './donation/donationSlice'

export const store = configureStore({
	reducer: {
		user: userSlice,
		service: serviceslice,
		blog: blogSlice,
		event: eventSlice,
		team:teamSlice,
		donation:donationSlice,
	},
})

export default store


