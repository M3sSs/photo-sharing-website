
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';


const App = () => {
  
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <Photos/>
    </div>
  );
};

export default App;
