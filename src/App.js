
import './App.css';
import React, { useContext,useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import FeaturePḥotos from './components/FeaturePhotos';
import {Route,Routes} from "react-router-dom"

import { noteContext } from './components/NoteState';
const App = () => {
  
const {searchEnable,query,updateContextState}=useContext(noteContext);
  const [i,setI]=useState(0);
  console.log(searchEnable,query,updateContextState)
    // if(i==0)
    // setTimeout(() => {
    //   updateContextState({searchEnable: true,query: 'gaming'});
    //     setI(1)
    // }, 10000);

  useEffect(() => {
    console.log("render")
  }, [searchEnable,query]);
  
  return (
    <div>
      
        <Navbar/>
        {
          (searchEnable)?<FeaturePḥotos query={query} />:
          
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
          }
      
      
    </div>
  );
};

export default App;
