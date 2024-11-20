import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
