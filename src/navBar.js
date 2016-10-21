import React from 'react';

export default class NavBar extends React.Component {
	ShowAll(event) {
		this.props.ShowAllItems();
	}
	ShowStarred(event) {
		this.props.ShowStarredItems();
	}
	render() {
		return (
			<div>
			<input type="button" ref="all" onClick={this.ShowAll.bind(this)} value="All"/>
			<input type="button" ref="starred" onClick={this.ShowStarred.bind(this)} value="Starred"/>
			</div>
			)
	}
}