import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <div className='container-fluid movie-app'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
