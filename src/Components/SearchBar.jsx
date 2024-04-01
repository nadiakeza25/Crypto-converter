import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';



function SearchBar() {
    const [filteredData, setFilterdData] = useState([]);

    const fetchData = async (value) => {
      await fetch(
        `https://crypto-news34.p.rapidapi.com/news/cryptonews=${value}limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt`
      )
        .then((response) => response.json())
        .then((data) => {
          //put the results into our SearchResults state
          setSearchResults([...data]);
        });
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                type="text"
                />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            <div className="dataResult">
                
            </div>

        </div>
    )
}

export default SearchBar;