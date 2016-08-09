'use strict';

import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import classNames from 'classnames';
import { toCamelCase } from '../../utils';

const MessageList = ({messages, actor, target, numReplies}) => {
	const dateGroups = _.map(_.groupBy(messages, (message) => {
		return moment.unix(message.timestamp).format('dddd MMMM Do YYYY');
	}), (message) => {
		return message;
	});


	const getMessagesByDate = (group) => {
		return group.map(message =>
			<div className={classNames({
				'message': true,
				'received': message.user === target ? true : false
			})} key={message.id}>
				<div className="body">
					<div className="bubble">
						{message.text}
					</div>
				</div>
				<div className="time">{moment.unix(message.timestamp).format('LT')}</div>
			</div>
		);
	};

	return (
		<div className="messages">
			<div className="receiver-name">
				{toCamelCase(target)}
			</div>
			{dateGroups.map((group, id) =>
				<div key={id} className="date-group">
					<div className="date">{moment.unix(group[0].timestamp).format('dddd, MMMM Do YYYY')}</div>
					{getMessagesByDate(group)}
					{numReplies > 0 ?
						<div className="message">
							<div className="reply-wrapper">
								<div className="reply-status">
									<span className="one"></span><span className="two"></span><span className="three"></span>
								</div>
							</div>
						</div>
					: ''}
				</div>
			)}
		</div>
	);
};

MessageList.propTypes = {
	actor: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	numReplies: PropTypes.number.isRequired
};

export default MessageList;
