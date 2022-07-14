import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideBar';
import CreateForm from "./components/CreateForm";
import ReceivePage from "./components/ReceivePage";

function App() {
  return (
    <div className="App" class="flex flex-row">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<CreateForm />} />
          <Route path="/receive" element={<ReceivePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
