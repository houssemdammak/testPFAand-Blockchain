// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ShipperDemo from "./pages/ShipperPage";
import BinsDemo from "./pages/BinsPage";
import CitizensDemo from "./pages/CitizensPage";
import Home from "./pages/Home";
import Login from "./pages/login";
import Sidebar from "./pages/Sidebar";
import { Web3Provider } from './contexts/web3Context';
import PrivateRoute from "./components/PrivateRoute";
import { PageProvider } from "./contexts/pageContext";
import { AuthProvider } from "./contexts/authSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Index from "./pages/index";
function App() {
  return (
      <Routes>
        <Route path="*" element={<PrivateRoute element={<Index />} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
