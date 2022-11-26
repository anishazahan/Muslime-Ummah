// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { teamAction } from './teamSlice';

const getTeam = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('http://localhost:5001/api/team/allTeams')
			if (data) {
				dispatch(teamAction. getTeam(data.teams))
			}
		} catch (error) {
			console.log(error)
		}
	}
}



export default getTeam
