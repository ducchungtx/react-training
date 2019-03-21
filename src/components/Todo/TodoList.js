import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export class TodoList extends Component {
    render () {
        var items = this.props.items.map((item, index) => {
          return (
            <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
          );
        });
        console.log('this.props', this.props);
        return (
          <ul className="list-group"> {items} </ul>
        );
    }
}

export default TodoList
