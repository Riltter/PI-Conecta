import { useState } from 'react'
import ReactDOM from 'react-dom'
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Feed from './components/pages/Feed';
import RegisterProject from './components/pages/RegisterProject';
import ProjectPage from './components/pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './App.css'
import Login from './components/pages/Login';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/Register' element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerproject" element={<RegisterProject />} />
          <Route path="/" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
