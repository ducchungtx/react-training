import { LIST_TODO, ADD_TODO, DELETE_TODO } from "./actionTypes";

export const listTodo = () => {
  return {
    type: LIST_TODO
  };
};

export const addTodo = item => {
  console.log('item', item);
  return {
    type: ADD_TODO,
    item
  };
};

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    index
  };
};
