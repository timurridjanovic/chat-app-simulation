'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import messageInitialState from '../../../reducers/message-reducer/initialState';
import replyStatusInitialState from '../../../reducers/reply-status-reducer/initialState';
import * as messageActions from '../../message-actions';
import { SEND_MESSAGE, BEGIN_REPLY, REPLY_SUCCESS } from '../../../constants/action-types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Action creators: message-actions', () => {
	it('should handle sendMessageSuccess', () => {
		const expectedAction = {
			type: SEND_MESSAGE, text: 'foo', user: 'Timur'
		};

		const action = messageActions.sendMessageSuccess({ user: 'Timur', text: 'foo' });
		expect(action.type).toEqual(expectedAction.type);
		expect(action.text).toEqual(expectedAction.text);
		expect(action.user).toEqual(expectedAction.user);
		expect(action.timestamp).toBeDefined();
	});

	it('should handle beginReply', () => {
		expect(messageActions.beginReply().type).toEqual(BEGIN_REPLY);
	});

	it('should handle replySuccess', () => {
		expect(messageActions.replySuccess().type).toEqual(REPLY_SUCCESS);
	});
});

describe('Thunks: message-actions', () => {
	beforeEach(() => {
		spyOn(window, 'setTimeout').and.callFake(function(fn){
			fn.apply(null, [].slice.call(arguments, 0, 1).concat(0));
		});
	});

	it('should handle sendMessage async action', (done) => {
		const expectedActions = [
			{ type: SEND_MESSAGE, text: 'hello foo bar', user: 'John' }
		];
		const store = mockStore(messageInitialState);

		return store.dispatch(messageActions.sendMessage('John', 'hello foo bar')).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(expectedActions[0].type);
			expect(actions[0].text).toEqual(expectedActions[0].text);
			expect(actions[0].user).toEqual(expectedActions[0].user);
			expect(actions[0].timestamp).toBeDefined();
			done();
		});
	});

	it('should handle sendReply async action', (done) => {
		const expectedActions = [
			{ type: BEGIN_REPLY },
			{ type: REPLY_SUCCESS },
			{ type: SEND_MESSAGE, text: 'how are you?', user: 'Bobby' }
		];
		const store = mockStore(replyStatusInitialState);

		return store.dispatch(messageActions.sendReply('Bobby', 'how are you?')).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(expectedActions[0].type);
			expect(actions[1].type).toEqual(expectedActions[1].type);
			expect(actions[2].type).toEqual(expectedActions[2].type);
			expect(actions[2].text).toEqual(expectedActions[2].text);
			expect(actions[2].user).toEqual(expectedActions[2].user);
			expect(actions[2].timestamp).toBeDefined();
			done();
		});
	});
});
