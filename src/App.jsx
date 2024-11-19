import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
