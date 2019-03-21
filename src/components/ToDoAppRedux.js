import React, { Component } from "react";
import { connect } from "react-redux";
import { listTodo } from "../actions/toDoActions";
import TodoHeader from "./TodoRedux/TodoHeader";
import TodoList from './TodoRedux/TodoList';
import TodoForm from './TodoRedux/TodoForm';

export class ToDoAppRedux extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const { listTodo } = this.props;
    listTodo();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { toDoReducer } = nextProps;
    console.log('toDoReducer', toDoReducer);
    return { data: toDoReducer };
  } 

  render() {
    const { data } = this.state;
    console.log('this.state', this.state);
    console.log('data', data);
    return (
      <div id="main">
        <TodoHeader />
        <TodoList
          items={data}
        />
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { toDoReducer } = state;
  return { toDoReducer };
};
export default connect(
  mapStateToProps,
  { listTodo }
)(ToDoAppRedux);
