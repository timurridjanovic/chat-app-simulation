'use strict';

import React from 'react';

import Chat from '../chat';

class HomePage extends React.Component {
	render() {
		return (
			<div className="home-page">
				<div className="page-header">
					<h1>Messages</h1>
				</div>
				<Chat actor="you" target="computer"/>
			</div>
		);
	}
}

export default HomePage;
