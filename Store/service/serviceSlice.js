import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	services: [],
}

const serviceSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {
		getServices: (state, action) => {
			state.services = action.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },
		
	},
})

export const serviceActions = serviceSlice.actions
export default serviceSlice.reducer
