
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import FeaturePḥotos from './components/FeaturePhotos';
import {Route,Routes} from "react-router-dom"

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Photos/>}/>
      <Route path='/travel' element={<FeaturePḥotos query='travel'/>}/>
      <Route path='/space' element={<FeaturePḥotos query='space'/>}/>
      <Route path='/landscapes' element={<FeaturePḥotos query='landscapes'/>}/>
      <Route path='/animals' element={<FeaturePḥotos query='animals'/>}/>
      <Route path='/cinema' element={<FeaturePḥotos query='movies'/>}/>
      <Route path='/scifi' element={<FeaturePḥotos query='scifi'/>}/>
      <Route path='/inspiring' element={<FeaturePḥotos query='inspiring'/>}/>
      <Route path='/seasonal' element={<FeaturePḥotos query='seasonal'/>}/>
      <Route path='/artistic' element={<FeaturePḥotos query='artisitic'/>}/>
      <Route path='/anime' element={<FeaturePḥotos query='anime'/>}/>
      <Route path='/fantasy' element={<FeaturePḥotos query='fantasy'/>}/>

      </Routes>
      {/* <Home/> */}
      {/* <Photos/> */}
      {/* <FeaturePḥotos query='cat'/> */}
    </div>
  );
};

export default App;
