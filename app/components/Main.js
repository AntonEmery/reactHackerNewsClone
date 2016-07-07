var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');


var Main = React.createClass({
	puke: function(obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	},
	getInitialState: function() {
		return {
			info: 'blah'
		}
	},
	componentDidMount: function() {
		var that = this;
		helpers.getHackerData()
			.then(function(info) {
				that.setState({
					info: info.data
				})
				console.log(info.data);
			})
	},
	render: function() {
		return (
			<div className="container">
				<header>
					<a id="ycLogo" href="http://www.ycombinator.com">
						<img src="https://news.ycombinator.com/y18.gif" />
					</a>
					<h1 id="title">Hacker News</h1>
				</header>
					{this.props.children}
				<footer>
					<p>Footer</p>
					{this.puke(this.state.info)}
				</footer>
			</div>
		);
	}
});

module.exports = Main;