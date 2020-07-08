import React from "react";
import { AppHeader } from "./components/appHeader";
import { ToDo } from "./containers/todo/todo";

import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <ToDo />
    </>
  );
}

export default App;
