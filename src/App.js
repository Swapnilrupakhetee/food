import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {css} from "@emotion/core";

import PropagateLoader from 'react-spinners/PropagateLoader';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';

function App() {
  const[loading,setLoading] =useState(false);
  const override=css`
  
  `;
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[]);
    
  
  return (
    <div className="App">
      {
        loading ?<div className='loader'> <PropagateLoader  id='loader' color={"#000000"} Loading={loading} size={30} /></div>
        :
        <div className='entire'>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        </div>
      }

      
    </div>
  );
}

export default App;
