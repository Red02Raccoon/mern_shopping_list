import axios from "axios";
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, REQUEST_ITEMS} from "./types";

export const getItems = () => dispatch => {
	dispatch(requestItems());
	axios
		.get('/api/items')
		.then(res => dispatch({
			type: GET_ITEMS,
			payload: res.data
		}))
}

export const addItem = (item) => dispatch => {
	axios
		.post('/api/items', item)
		.then(res => 
			dispatch({
				type: ADD_ITEM,
				payload: res.data
			}) 
		)
}

export const deleteItem = id => dispatch => {
	axios
		.delete(`/api/items/${id}`)
		.then(res => 
			dispatch({
				type: DELETE_ITEM,
				payload: id
			})
		)
}

export const requestItems = () => ({
	type: REQUEST_ITEMS
})