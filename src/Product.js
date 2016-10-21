import React from 'react';

export default class Items extends React.Component {
  addCount(event) {
    this.props.updateCount(this.props.id);
  }
  changeStarColor() {
    this.props.markImportant(this.props.id);
  }
  render() {
    return (
      <li><img src="arrow.png" onClick={this.addCount.bind(this)}/><span>{this.props.count}</span>{this.props.text}<div onClick={this.changeStarColor.bind(this)} className={this.props.status?"rating color-blue":"rating color-white"}></div></li>
      )
  }
}