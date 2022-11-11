import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	teams: [],
}

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		getTeam: (state, actions) => {
			state.team = actions.payload
		},
		

	},
})

export const teamAction = teamSlice.actions
export default teamSlice.reducer
