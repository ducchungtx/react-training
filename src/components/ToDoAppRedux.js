import React, { Component } from "react";
import { connect } from "react-redux";
import { listTodo, addTodo, deleteTodo } from "../actions/toDoActions";
import TodoHeader from "./Todo/TodoHeader";

export class ToDoAppRedux extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div id="main">
        <TodoHeader />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { toDoReducer } = state;
  return {
    toDoReducer
  };
};
export default connect(
  mapStateToProps,
  { listTodo, addTodo, deleteTodo }
)(ToDoAppRedux);
