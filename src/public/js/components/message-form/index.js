'use strict';

import React, { PropTypes } from 'react';

const charCodes = {
	enter: 13
};

const MessageForm = ({onChange, onSend}) => {
	const onKeyPress = (e) => {
		if (e.charCode === charCodes.enter) {
			onSend(e);
		}
	};

	return (
		<div className="message-form">
			<input type="text"
				className="message-input"
				onChange={onChange}
				onKeyPress={onKeyPress}/>

			<input type="submit"
				value="Send"
				className="message-submit"
				onClick={onSend}/>
		</div>
	);
};

MessageForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSend: PropTypes.func.isRequired
};

export default MessageForm;
