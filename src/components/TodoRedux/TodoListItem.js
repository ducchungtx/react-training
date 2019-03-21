import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTodo } from '../../actions/toDoActions';

export class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
      }
      onClickClose() {
        var index = parseInt(this.props.index);
        console.log('index', index);
        this.props.deleteTodo(index);
      }
      onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
      }
      render () {
        var todoClass = this.props.item.done ? 
            "done" : "undone";
        return(
          <li className="list-group-item ">
            <div className={todoClass}>
              <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
              {this.props.item.value}
              <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            </div>
          </li>     
        );
    }
}

export default connect(
  null,
  { deleteTodo }
)(TodoListItem);
