import { useState,useEffect } from 'react'
import './App.css'
import NewsFeed from './Components/NewsFeed'
import CurencyConverter from './Components/CurencyConverter'
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="home">
        <h1>Crypto Currency Converter</h1>
      </div>
      <div className="app">
        <div className= "app-wrapper">
          <CurencyConverter />
          <NewsFeed />
        </div>
      </div>
    </>
  );
}

export default App
