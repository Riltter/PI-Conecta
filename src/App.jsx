import { useState } from 'react'
import ReactDOM from 'react-dom'
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Feed from './components/pages/Feed';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './App.css'
import Login from './components/pages/Login';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
