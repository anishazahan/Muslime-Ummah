import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	donations: [],
}

const donationSlice = createSlice({
	name: 'donation',
	initialState,
	reducers: {
		getDonations: (state, actions) => {
			state.donations = actions.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },

	},
})

export const donationActions = donationSlice.actions
export default donationSlice.reducer
