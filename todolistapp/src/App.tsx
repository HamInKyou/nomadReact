import React from "react";
import GlobalStyle from "./GlobalStyle";
import ToDoList from "./components/TodoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
