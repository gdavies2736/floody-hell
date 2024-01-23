import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import PolygonMap from './components/PolygonMap';
import SearchPostcode from './components/SearchPostcode';
import FloodAlert from './components/FloodAlert';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
      <PolygonMap />
      <SearchPostcode />
      <FloodAlert />
    </>
  )
}

export default App
