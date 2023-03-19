import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import { Temp } from "./components/temp/temp";
import { Temp2 } from "./components/temp/temp2";

function App(): JSX.Element {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="/one" element={<Temp2 />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
