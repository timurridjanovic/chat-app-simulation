'use strict';

import { combineReducers } from 'redux';
import messages from './message-reducer';
import numReplies from './reply-status-reducer';

const rootReducer = combineReducers({
	messages,
	numReplies
});

export default rootReducer;
