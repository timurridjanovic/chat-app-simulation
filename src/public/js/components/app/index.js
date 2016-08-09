'use strict';

import React, { PropTypes } from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="application">
				<div className="wrapper">
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
