import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import Sidebar, { DrawerHeader } from "./components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Temp } from "./components/temp/temp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

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
