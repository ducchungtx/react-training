import { LIST_TODO, ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

let todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });

const toDoReducer = (data = todoItems, action) => {
  switch (action.type) {
    case LIST_TODO:
      return data;
    case ADD_TODO:
      let todosAfterAdd = data.unshift({
        index: data.length + 1,
        value: action.item.newItemValue,
        done: false
      });
      return todosAfterAdd;
    case DELETE_TODO:
      let todosAfterDelete = todoItems.splice(action.index, 1);
      return todosAfterDelete;
    default:
      return data;
  }
};

export default toDoReducer;
