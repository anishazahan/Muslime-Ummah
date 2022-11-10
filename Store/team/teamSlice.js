import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	team: [],
}

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		getTeam: (state, actions) => {
			state.team = actions.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },

	},
})

export const teamAction = teamSlice.actions
export default teamSlice.reducer
