import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export class TodoList extends Component {
    render () {
        let items = this.props.items.map((item, index) => {
            return (
              <TodoListItem key={index} item={item} index={index} />
            );
          });
        
        console.log('this.props.items', this.props.items);
        if(items) {
          return (
            <ul className="list-group"> {items} </ul>
          );
        } else {
          return null;
        }
    }
}

export default TodoList
