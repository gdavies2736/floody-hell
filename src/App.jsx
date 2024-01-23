import React, { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  const handleSearchResult = (result) => {
    console.log('Search result:', result);
  };

  return (
    <>
      <Header />
      <Section />
      <Map />
      <Maptest />
      <SearchPostcode onSearchResult={handleSearchResult} />     
      <FloodAlert />
    </>
  )
}

export default App
