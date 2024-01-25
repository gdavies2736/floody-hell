import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Map from './components/PolygonMap';
import SearchPostcode from './components/SearchPostcode';
import FloodAlert from './components/FloodAlert';
import Maptest from './components/Maptest';
import PolygonObjectTest from './components/ObjectTest';

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
      {/* <Map /> */}
      <PolygonObjectTest />
      <Maptest />   
=======
      <Map />
>>>>>>> 0cedd11359bd340414dca3195194be3565a9b27e
      <FloodAlert />
    </div>
    </>
  )
}

export default App
