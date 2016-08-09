'use strict';

import { SEND_MESSAGE } from '../../constants/action-types';
import initialState from './initialState';

export default function messageReducer(state = initialState, action) {
	switch (action.type) {
		case SEND_MESSAGE:
			return [
				...state,
				Object.assign({ id: state.length + 1 }, action)
			];
		default:
			return state;
	}
}
