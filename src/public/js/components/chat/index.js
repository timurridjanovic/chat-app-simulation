'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../actions/message-actions';

import MessageList from '../message-list';
import MessageForm from '../message-form';

export class Chat extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			message: ''
		};

		this.sendMessage = this.sendMessage.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.getMessenger = this.getMessenger.bind(this);

		this.getComputerMessage = this.getMessenger();
	}

	getMessenger() {
		const messages = [
			'Hi how are you?',
			'Do you want to chat?',
			'What is your ASL?',
			'My name is ' + this.props.target,
			'What is your name?'
		];

		var index = messages.length - 1;

		return () => {
			index = (index + 1) % messages.length;
			return messages[index];
		};
	}

	sendMessage(e) {
		if (!this.state.message) return;
		this.props.actions.sendMessage(this.props.actor, this.state.message).then(message => {
			this.props.actions.sendReply(this.props.target, this.getComputerMessage());
		});
	}

	onInputChange(e) {
		this.setState({message: e.target.value});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!this.props.messages) return false;
		return this.props.messages.length !== nextProps.messages.length
			|| this.props.numReplies !== nextProps.numReplies;
	}

	render() {
		const { messages, numReplies } = this.props;
		return (
			<div className="chat">
				<MessageList messages={messages}
					actor={this.props.actor}
					target={this.props.target}
					numReplies={numReplies} />
				<MessageForm onSend={this.sendMessage} onChange={this.onInputChange} />
			</div>
		);
	}
}

Chat.propTypes = {
	actor: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		messages: state.messages,
		numReplies: state.numReplies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(messageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
