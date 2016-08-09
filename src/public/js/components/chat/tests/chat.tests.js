'use strict';

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Chat } from '../../chat';


describe('Components: <Chat />', () => {
	var wrapper, textInput, submitInput,
		messageList;

	beforeEach(() => {
		spyOn(window, 'setTimeout').and.callFake(function(fn) {
			arguments[0]();
		});

		const props = {
			actor: 'Johnny',
			target: 'bob',
			messages: [],
			numReplies: 0,
			actions: {
				sendMessage: jasmine.createSpy('sendMessage').and.callFake(() => {
					return {
						then: () => { return Promise.resolve(); }
					};
				})
			}
		};

		wrapper = mount(<Chat {...props} />);
		textInput = wrapper.find('input').first();
		submitInput = wrapper.find('input').last();
		messageList = wrapper.find('.messages');
	});

	it('should have a message list with a receiver name', () => {
		const receiverName = messageList.find('.receiver-name').text();
		expect(messageList).toBeDefined();
		expect(receiverName).toEqual('Bob');
	});

	it('should have a message form with a text input and a submit input', () => {
		expect(textInput.prop('type')).toBe('text');
		expect(submitInput.prop('type')).toBe('submit');
	});

	it('should update message state when typing in text input', () => {
		textInput.simulate('change', { target: { value: 'foo bar' } });
		expect(wrapper.state().message).toBe('foo bar');

	});

	it('should call sendMessage async action when submitting message', () => {
		textInput.simulate('change', { target: { value: 'hello bob!' } });
		submitInput.simulate('click');
		expect(wrapper.props().actions.sendMessage).toHaveBeenCalled();
	});

	it('should not call sendMessage if text input is empty', () => {
		submitInput.simulate('click');
		expect(wrapper.props().actions.sendMessage).not.toHaveBeenCalled();
	});
});
