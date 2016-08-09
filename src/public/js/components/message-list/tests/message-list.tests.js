'use strict';

import React from 'react';
import { mount } from 'enzyme';
import MessageList from '../../message-list';
import { SEND_MESSAGE } from '../../../constants/action-types';
import moment from 'moment';


describe('Components: <MessageList />', () => {
	var wrapper, messageList, props;

	beforeEach(() => {
		props = {
			actor: 'Johnny',
			target: 'bob',
			messages: [
				{ id: 1, type: SEND_MESSAGE, user: 'Johnny', text: 'have some food', timestamp: moment().unix() }
			],
			numReplies: 0
		};

		wrapper = mount(<MessageList {...props} />);
		messageList = wrapper.find('.messages');
	});

	it('should have a date', () => {
		const dateGroup = messageList.find('.date-group');
		const date = dateGroup.find('.date');
		expect(date.text()).toBeDefined();
	});

	it('should contain a message from actor', () => {
		const messages = messageList.find('.message');
		const messageSent = messages.first();
		expect(messageSent.find('.bubble').text()).toBe('have some food');
		expect(messageSent.hasClass('message')).toBe(true);
		expect(messageSent.hasClass('received')).toBe(false);
		expect(messageSent.find('.time').text()).toBeDefined();
	});

	it('should contain a message from target', () => {
		props.messages[0].user = 'bob';
		wrapper = mount(<MessageList {...props} />);
		const messages = wrapper.find('.message');
		const messageSent = messages.first();
		expect(messageSent.find('.bubble').text()).toBe('have some food');
		expect(messageSent.hasClass('message')).toBe(true);
		expect(messageSent.hasClass('received')).toBe(true);
		expect(messageSent.find('.time').text()).toBeDefined();
	});

	it('should contain a reply status bubble', () => {
		props.numReplies = 1;
		wrapper = mount(<MessageList {...props} />);
		const replyBubble = wrapper.find('.reply-status');
		expect(replyBubble.html()).toBeDefined();
	});
});
