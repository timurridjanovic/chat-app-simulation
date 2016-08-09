'use strict';

class MessageService {
	static sendMessage(user, text) {
		return MessageService._fake_service({ user: user, text: text }, 0);
	}

	static sendReply(user, text) {
		return MessageService._fake_service({ user: user, text: text }, 4000);
	}

	static _fake_service(obj, delay) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(obj);
			}, delay);
		});
	}
}

export default MessageService;
