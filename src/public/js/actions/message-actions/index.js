'use strict';

import moment from 'moment';
import { SEND_MESSAGE, BEGIN_REPLY, REPLY_SUCCESS } from '../../constants/action-types';
import MessageService from '../../services/message-service';

export function sendMessageSuccess(message) {
	return { type: SEND_MESSAGE, text: message.text, timestamp: moment().unix(), user: message.user };
}

export function beginReply() {
	return { type: BEGIN_REPLY };
}

export function replySuccess() {
	return { type: REPLY_SUCCESS };
}

export function sendMessage(user, text) {
	const message = { user: user, text: text };
	return (dispatch, getState) => {
		dispatch(sendMessageSuccess(message));
		return MessageService.sendMessage(user, text);
	};
}

export function sendReply(user, text) {
	return (dispatch, getState) => {
		dispatch(beginReply());
		return MessageService.sendReply(user, text).then(message => {
			dispatch(replySuccess());
			dispatch(sendMessageSuccess(message));
		});
	};
}
