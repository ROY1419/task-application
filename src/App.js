import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { setUser, clearUser } from './app/slices/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Home from "./app/components/Home";

import { logout } from "./app/slices/auth";

import eventBus from "./app/common/eventBus";
import Brands from "./app/components/Brands";
import Header from "./app/components/Header";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    eventBus.on("logout", () => {
      logOut();
    });

    return () => {
      eventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-3">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/brands" element={<Brands />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
};

export default App;
