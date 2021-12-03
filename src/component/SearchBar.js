import React from "react";
import "./Search.css";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
    const [searchInput, setSearchInput] = useState();
    const history = useHistory();

    const onSubmit = (e) => { //return to database
        console.log(searchInput);
        setSearchQuery(searchInput);
        history.push(`?=${searchInput}`);
        e.preventDefault(); 
    };

    return (
        <form action="/" method="get" id="searchWrapper" onSubmit={onSubmit}>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="what are you looking for..."
                value={searchInput}
                onInput={(e) => setSearchInput(e.target.value)}
           />
           <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;