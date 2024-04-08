import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import About from "./pages/About";
import Article from "./pages/Article";


const App = () => {
  return (
    <>
    <Router>
        <SearchBar placeholder="Want To Learn More About Crypto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
  );
};

export default App;
