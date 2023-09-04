import { useState } from 'react'
import ReactDOM from 'react-dom'
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Feed from './components/pages/Feed';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'

const App = () => {

  return (
    <>

      <Router>
        <ul>
          <Link to="/">Register</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/profile">Profile</Link>
        </ul>
        <Routes>
          <Route exact path='/' element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
