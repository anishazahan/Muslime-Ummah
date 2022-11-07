import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	events: [],
}

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		getEvents: (state, actions) => {
			state.events = actions.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },

	},
})

export const eventActions = eventSlice.actions
export default eventSlice.reducer
