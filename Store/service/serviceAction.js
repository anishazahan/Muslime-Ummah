// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { serviceActions } from './serviceslice';

const getServices = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('services.json')
			if (data) {
				dispatch(serviceActions.getServices(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

// export const updateService = ({ id, ...rest }) => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.patch(`/api/user/updateService/${id}`, rest)
// 			console.log({id, rest});
// 			console.log(data);
// 			if (data) {
// 				dispatch(userActions.updateService())
// 				dispatch(getServices())
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

// export const getAdmins = () => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.get('/api/admin/admins')
// 			if (data) {
// 				dispatch(userActions.getAdmins(data?.admins))
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

// const getFavourites = () => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.get('/api/user/favourite-room')
// 			if (data) {
// 				dispatch(userActions.getFavourites(data?.favouriteRoom))
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

// export const postFavourites = (body) => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.post(`/api/user/favourite-room`, body)
// 			if (data) {
// 				dispatch(getFavourites())
// 				dispatch(userActions.updateFavaourite())
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

// export const deleteFavourites = ({ id }) => {
// 	return async dispatch => {
// 		try {
// 			console.log({ id })
// 			const { data } = await tokenClient.delete(`/api/user/favourite-room/${id}`)
// 			if (data) {
// 				dispatch(getFavourites())
// 				dispatch(userActions.deleteFavaourite())
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

export default getServices
// export { getFavourites }
