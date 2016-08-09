'use strict';

import { BEGIN_REPLY, REPLY_SUCCESS } from '../../constants/action-types';
import initialState from './initialState';

export default function replyStatusReducer(state = initialState, action) {
	switch (action.type) {
		case BEGIN_REPLY:
			return state + 1;
		case REPLY_SUCCESS:
			if (state <= 0) return 0;
			return state - 1;
		default:
			return state;
	}
}
