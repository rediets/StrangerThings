import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/NavBar";
import Profile from "./Pages/Profile";

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<App />} />
          <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
