import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { Temp } from "./components/temp/temp";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Temp />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
