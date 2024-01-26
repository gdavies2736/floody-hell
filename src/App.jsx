import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import SearchPostcode from './components/SearchPostcode';

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
    </div>
    
      <div className='mapAndAlerts'> 
        
        <Footer />
      </div>
    </>
  )
}

export default App
