import React from 'react';

export default class RecipeListItem extends React.Component{
  render(){
    return(
      <tr>{this.props.name}</tr>
    )
  }
}
