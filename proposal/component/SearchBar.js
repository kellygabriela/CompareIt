import React from "react";
import "./Search.css";

function SearchBar() {
    return (
        <div id="searchWrapper">
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="what are you looking for..."
           />
        </div>
    )
}

export default SearchBar;