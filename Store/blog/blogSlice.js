import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	blogs: [],
}

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		getBlogs: (state, actions) => {
			state.blogs = actions.payload
		},
		// updateUser: state => {
		// 	state.message = 'user Details updated Successfully'
		// },

	},
})

export const blogActions = blogSlice.actions
export default blogSlice.reducer
