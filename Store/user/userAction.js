// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { userActions } from './userSlice'

const getUsers = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('data.json')
			// console.log("dispatch :",data);
			if (data) {
				dispatch(userActions.getUsers(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}


export default getUsers
// export { getFavourites }
