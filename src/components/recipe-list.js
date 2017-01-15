import React from 'react';
import _ from 'lodash';
import RecipeListItem from './recipe-list-item'

export default class RecipeList extends React.Component{
  renderItems(){
    return _.map(this.props.list, (list, index) => <RecipeListItem key={index} {...list} />);
  };

  render(){
    return(
      <table>
        <tbody>
            {this.renderItems()}
        </tbody>
      </table>
    )
  }
}
