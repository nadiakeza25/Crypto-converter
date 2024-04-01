import { useState } from 'react'
import './App.css'
import NewsFeed from './Components/NewsFeed'
import CurencyConverter from './Components/CurencyConverter'
import SearchBar from "./Components/SearchBar" 

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="home">
        <h1>Crypto Currency Converter</h1>
      </div>
      <div className="app">
        <div className="app-wrapper">
          <NewsFeed />
          <CurencyConverter />
          <SearchBar placeholder="Want To Learn More About Crypto"/>
        </div>
      </div>
    </>
  );
}

export default App
