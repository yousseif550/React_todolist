import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ToDo } from "./components/Todo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <a> ToDoList </a>
      <ToDo/>
    </div>
  );
}

export default App;
