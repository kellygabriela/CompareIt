import React from "react";
import "./Search.css";
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();

    const onSubmit = (e) => {
        history.push(`?=${searchQuery}`)
        e.preventDefault();
        console.log(searchQuery);
    };

    return (
        <form action="/" method="get" id="searchWrapper" onSubmit={onSubmit}>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="what are you looking for..."
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
           />
           <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;
