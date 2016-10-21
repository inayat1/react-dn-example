import React from 'react';
import dataList from './data/products';
import List from './ProductList';
import NavBar from './navBar';

export default class DesignerNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dataList,
      unstarred : []
    }
  }

  updateCount(id) {
    var dataList = this.state.dataList.slice(0).map(product => Object.assign({}, product));
    var listItem = dataList.find(list => list.id === id);
    listItem.count=listItem.count+1;
    this.setState({
      dataList
    });
  }

  markImportant(id) {
    var dataList = this.state.dataList.slice(0).map(product => Object.assign({}, product));
    var listItem = dataList.find(list => list.id === id);
    if(listItem.status=== false) {
      listItem.status=true;
    }
    else {
      listItem.status=false;
    }
    this.setState({
      dataList
    });
  }

  ShowAllItems() {
    var dataList = this.state.dataList.slice(0).map(product => Object.assign({}, product));
    this.setState({
      dataList,
      unstarred : []
    });
  }

  ShowStarredItems() {
    var dataList = this.state.dataList.slice(0).map(product => Object.assign({}, product));
    var unstarred = this.state.unstarred.slice(0).map(product => Object.assign({}, product));
    dataList.forEach(item => {
      if(item.status===false) {
        unstarred.push(item.id);
      }
    })
    console.log(unstarred);
    this.setState({
      unstarred
    });
  }

  render() {
    return (
      <div>
        <NavBar ShowAllItems={this.ShowAllItems.bind(this)} ShowStarredItems={this.ShowStarredItems.bind(this)}  />
        <List items={this.state.dataList} unstarred={this.state.unstarred} updateCount={this.updateCount.bind(this)} markImportant={this.markImportant.bind(this)}/>
      </div>
      )
  }
}