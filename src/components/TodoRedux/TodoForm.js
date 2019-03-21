import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo, listTodo } from '../../actions/toDoActions';

export class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      componentDidMount() {
        this.refs.itemName.focus();
      }
      onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
          this.props.addTodo({newItemValue});
          this.refs.form.reset();
        }
        this.props.listTodo();
      }
      render () {
        return (
          <form ref="form" onSubmit={this.onSubmit} className="form-inline">
            <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
            <button type="submit" className="btn btn-default">Add</button> 
          </form>
        );   
      }
}

export default connect(
  null,
  { addTodo, listTodo }
)(TodoForm);
