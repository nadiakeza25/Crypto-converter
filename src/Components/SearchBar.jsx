import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"


function SearchBar() {
    const [filteredData, setFilterdData] = useState([]);
    const fetchData = async (value) => {
      await fetch(
        `https://crypto-news34.p.rapidapi.com/news/cryptonews=${value}limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults([...data]);
        });
    };

    return (
        <div className="nav">
          <h1 className="logo">
            KI
          </h1>
        <div className="nav_r">
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
          <div className="searchInputs">
              <input
              type="text"
              />
              <div className="searchIcon">
              <SearchIcon style={{fontSize:"2.2em"}}/>
              </div>
            </div>
        </div>
        </div>
    )
}

export default SearchBar;