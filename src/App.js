import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widgests */}
      </div>
    </div>
  );
}

export default App;
