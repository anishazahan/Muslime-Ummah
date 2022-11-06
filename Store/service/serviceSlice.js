import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	services: [],
}

const serviceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		getServices: (state, actions) => {
			state.services = actions.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },
		
	},
})

export const serviceActions = serviceSlice.actions
export default serviceSlice.reducer
