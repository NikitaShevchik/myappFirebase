import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userSlice";
import { useAuth } from "./hooks/use-auth";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from "./components/elements/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/elements/footer/Footer";
import styles from './App.module.scss';
import Login from "./pages/login/Login";

function App() {


    return (
        <div className={styles.app}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;