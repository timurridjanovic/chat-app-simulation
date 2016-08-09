'use strict';

import enzyme from 'enzyme';
import replyStatusReducer from '../index';
import * as actions from '../../../actions/message-actions';
import { BEGIN_REPLY, REPLY_SUCCESS } from '../../../constants/action-types';
import initialState from '../initialState';

describe('Reducers: replyStatusReducer', () => {
	it('should return initial state', () => {
		expect(replyStatusReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle beginReply', () => {
		const action = actions.beginReply();
		const newState = replyStatusReducer(initialState, action);
		expect(newState).toEqual(1);

		const secondState = replyStatusReducer(1, action);
		expect(secondState).toEqual(2);
	});

	it('should handle replySuccess', () => {
		const action = actions.replySuccess();
		const newState = replyStatusReducer(initialState, action);
		expect(newState).toEqual(0);

		const secondState = replyStatusReducer(1, action);
		expect(secondState).toEqual(0);

		const thirdState = replyStatusReducer(2, action);
		expect(thirdState).toEqual(1);

		const fourthState = replyStatusReducer(-1, action);
		expect(fourthState).toEqual(0);
	});
});
