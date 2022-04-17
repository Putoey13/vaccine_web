import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './pages/admin/login/LoginPage.js'
import HomePage from './pages/admin/home/HomePage.js'
import DashboardPage from './pages/admin/dashboard/DashboardPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} > </Route>
          <Route path="/login" element={<LoginPage />} > </Route>
          <Route path="/dashboard" element={<DashboardPage />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
