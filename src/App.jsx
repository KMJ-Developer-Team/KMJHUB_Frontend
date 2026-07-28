import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/Resetpassword";
import ForgotPassword from './pages/auth/ForgotPassword';
import Profile from './pages/profile/Profile';
import ProductDetail from './pages/products/ProductDetail';
import AdminProducts from './admin/AdminProducts';
function App() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/admin/products/" element={<AdminProducts />} />
        
      </Route>

     
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App