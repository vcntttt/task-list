import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import {TaskList} from "./TaskList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header/>
    <TaskList/>
  </>
);
