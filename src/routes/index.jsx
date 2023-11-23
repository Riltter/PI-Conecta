import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../components/pages/Register/Register";
import Profile from "../components/pages/UserProfile/UserProfile";
import Feed from "../components/pages/Feed/Feed";
import Login from "../components/pages/Login/Login";
import RegisterProject from "../components/pages/RegisterProject/RegisterProject";
import useAuth from "../hooks/useAuth";
import UserProfile from "../components/pages/UserProfile/UserProfile";

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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerproject" element={<Private item={RegisterProject} />} />
        <Route path="/userprofile" element={<UserProfile/>}> </Route>
      </Routes>
    </Router>
  );
};

export default RoutesApp;
