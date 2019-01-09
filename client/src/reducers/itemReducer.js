import uuid from "uuid";
import { ADD_ITEMS, GET_ITEMS, DELETE_ITEMS} from "../actions/types";
 
const initialState = {
	data: [
		{ id : uuid(), name: "Sugar"},
		{ id : uuid(), name: "Water"},
		{ id : uuid(), name: "Milk"}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		default:
			return state;
	}
}