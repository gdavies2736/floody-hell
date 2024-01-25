import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import SearchPostcode from './components/SearchPostcode';
import FloodAlert from './components/FloodAlert';
import Map from './components/Map';
import PolygonObject from './components/PolygonObject';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  const handleSearchResult = (result) => {
    console.log('Search result:', result);
  };

  return (
    <>
    <div  className='dark:bg-slate-900 dark:text-white bg-neutral-300'>
      <Header />
      <Section />
      <SearchPostcode onSearchResult={handleSearchResult} />
<<<<<<< HEAD
      <div className='mapAndAlerts'> 
      <Map />
      </div>
      <Footer />
=======
>>>>>>> 8b39c8041f90e433a9663f02743dd4b2e64c0fc7
    </div>
      <div className='mapAndAlerts'> 
        <Map />
        <Footer />
      </div>
    </>
  )
}

export default App
