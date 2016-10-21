import React from 'react';
import Items from './Product';

export default class List extends React.Component {

  checkForIndex (id) {
    var length=this.props.unstarred.length;
    while (--length>=0) {
      if (this.props.unstarred[length]===id){
        return false
      }
    }
    return true
  }
  render () {
    this.props.items.sort(function(a, b) {
      return b.count - a.count;
    });
    var list=this.props.items.filter(item => this.checkForIndex(item.id));
    var starredList = list.map(item => <Items key={item.id} id={item.id} updateCount={this.props.updateCount.bind(this)}
          markImportant={this.props.markImportant.bind(this)}
          {...item}/>
          )
        
    return (
      <ul>{starredList}</ul>)
  }
}