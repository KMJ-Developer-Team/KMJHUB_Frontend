import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/Resetpassword";

function App() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

     
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App