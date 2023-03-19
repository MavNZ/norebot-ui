import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import { Temp } from "./components/temp/temp";

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
