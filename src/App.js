import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginUserPage from './pages/users/login/LoginPage'
import LoginLayout from './layout/LoginLayout'
import LoginPage from './pages/admin/login/LoginPage.js'
import HomePage from './pages/admin/home/HomePage.js'
import DashboardPage from './pages/admin/dashboard/DashboardPage'
import RegisterPage from './pages/users/register/RegisterPage'
import VaccineLayout from './layout/VaccineLayout'
import DashboardUserPage from './pages/users/dashboard/DashboardPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} > </Route> */}

          {/* <Route path="/staff/staff" element={<LoginPage />} > </Route>
          <Route path="/staff/dashboard" element={<DashboardPage />} > </Route> */}
          <Route element={<LoginLayout /> }>
            <Route path="" element={<LoginUserPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="" element={<VaccineLayout /> }>
          <Route path="dashboard" element={<DashboardUserPage />} />
            <Route path="test" element={<LoginUserPage />} />
          </Route>

          <Route path="staff">
            <Route path="" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
