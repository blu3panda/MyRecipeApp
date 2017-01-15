import React, { Component } from 'react';
import RecipeList from './recipe-list.js'

const list = [
  {
    name: "example1",
  }
]

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      list
    };
  }


  render() {
    return (
      <div>
        <h1>My App 3</h1>
        <RecipeList list={this.state.list}/>
      </div>
    );
  }
}
