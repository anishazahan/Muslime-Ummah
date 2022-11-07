import { configureStore } from '@reduxjs/toolkit'
import serviceslice from './service/serviceslice'
import userSlice from './user/userSlice'

export const store = configureStore({
	reducer: {
		user: userSlice,
		service : serviceslice,
	},
})

export default store


