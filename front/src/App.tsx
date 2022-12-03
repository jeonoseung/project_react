import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}
export default App;
