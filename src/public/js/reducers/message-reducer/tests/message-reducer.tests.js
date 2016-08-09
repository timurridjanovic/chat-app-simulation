'use strict';

import enzyme from 'enzyme';
import messageReducer from '../index';
import * as actions from '../../../actions/message-actions';
import { SEND_MESSAGE } from '../../../constants/action-types';
import initialState from '../initialState';

describe('Reducers: messageReducer', () => {
	it('should return initial state', () => {
		expect(messageReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle sendMessageSuccess', () => {
		const action = actions.sendMessageSuccess({ user: 'Timur', text: 'hello world' });
		const messages = messageReducer(initialState, action);

		expect(messages[0].text).toEqual('hello world');
		expect(messages[0].user).toEqual('Timur');
		expect(messages[0].type).toEqual(SEND_MESSAGE);
	});
});
