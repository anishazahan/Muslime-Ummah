// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { teamAction } from './teamSlice';

const getTeam = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('team.json')
			if (data) {
				dispatch(teamAction. getTeam(data))
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


export default getTeam
