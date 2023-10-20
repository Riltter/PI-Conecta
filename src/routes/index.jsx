import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../components/pages/Register";
import Profile from "../components/pages/Profile";
import Feed from "../components/pages/Feed";
import Login from "../components/pages/Login";
import useAuth from "../hooks/useAuth";

const Private = ({ item: Item }) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/feed" element={<Private item={Feed} />} />
        <Route path="/profile" element={<Private item={Profile} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerproject" element={<RegisterProject />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
