// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { donationActions } from './donationSlice';

const getDonations = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('donations.json')
			if (data) {
				dispatch(donationActions.getDonations(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

// export const updateEvent = ({ id, ...rest }) => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.patch(`/api/user/updateEvent/${id}`, rest)
// 			console.log({id, rest});
// 			console.log(data);
// 			if (data) {
// 				dispatch(userActions.updateEvent())
// 				dispatch(getEvents())
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }


export default getDonations
