import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, REQUEST_ITEMS} from "../actions/types";
 
const initialState = {
	items: [],
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case REQUEST_ITEMS:
			return {
				...state,
				loading: true
			}
		case GET_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false
			}
		case ADD_ITEM:
			return {
				...state,
				items: [action.payload, ...state.items]
			}
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item._id !== action.payload)
			}
		default:
			return state;
	}
}