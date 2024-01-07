// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Navbar/>
  );
};

export default App;
