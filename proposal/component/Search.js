import "./Search.css"
import "./App.css"
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

//array that hold the product from database
let dbItems = []

//filter items based on searchBar input (query)
const filterItems = (dbItems, query) => {
    if(query === null){
        return dbItems;
    }

    return dbItems.filter((item) => {
        const searchedItem = item.keyword.toLowerCase();
        return searchedItem.includes(query);
    })
}

//load data from database to dbItems array
const loadItems = () => {
      
    fetch('ProdData.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    .then(function(response){
        console.log(response);
        console.log("");
        return response.json();
    })

    .then(function(myJson) {
        dbItems = myJson;
        console.log(dbItems);
        displayItems(dbItems);
    });
};

loadItems();

const displayItems = (items) => {
    items.map((item) => {
            return `
            <li class="items">
                <h2>${item.title}</h2>
                <h4>Price: ${item.price}</h4>
                <a href=${item.link} class="btn">Shop</a>
                <img src=${item.picture}></img>
            </li>
        `;
    })
    .join('');
};

const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('searchBar');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredItems = filterItems(dbItems, searchQuery);             

    return(
        <Router>
        <div>
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul id="ItemsList">
                {filteredItems.map(item => (
                <li class="items">
                    <h2>{item.title}</h2>
                    <h4>Price: {item.price}</h4>
                    <a href={item.link} class="btn">Shop</a>
                    <img src={item.picture} alt=" "></img>
                </li>
                ))}
            </ul>
        </div>
        </Router>
    )
}

export default Search;
