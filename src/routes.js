import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TodoApp from "./components/TodoApp";
import TodoRedux from "./components/ToDoAppRedux";
import CallApi from "./components/CallApi";

const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  { path: "/about", exact: false, main: () => <About /> },
  { path: "/contact", exact: false, main: () => <Contact /> },
  { path: "/todo", exact: false, main: () => <TodoApp /> },
  { path: "/todo-redux", exact: false, main: () => <TodoRedux /> },
  { path: "/call-api", exact: false, main: () => <CallApi /> }
];

export default routes;
