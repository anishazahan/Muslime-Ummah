import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './blog/blogSlice'
import eventSlice from './event/eventSlice'
import serviceslice from './service/serviceslice'
import userSlice from './user/userSlice'

export const store = configureStore({
	reducer: {
		user: userSlice,
		service: serviceslice,
		blog: blogSlice,
		event: eventSlice,
	},
})

export default store


