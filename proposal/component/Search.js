import "./Search.css"
import "./App.css"
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

//array that hold the product from database
let dbItems = [];

//load data from database to dbItems array
function loadItems() {
      
    fetch('ProdData.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    .then(function(response){
        console.log(response);
        console.log("search.js response");
        return response.json();
    })

    .then(function(myJson) {
        dbItems = myJson;
        console.log(dbItems);
        displayItems(dbItems);
        console.log("dbItems printed");
    })

    console.log("dbItems loaded");
};

//console.log("item loaded")

const displayItems = (items) => {
    const htmlString = items.map((item) => {
            return `
            <li class="items">
                <h2>${item.title}</h2>
                <h4>Price: ${item.price}</h4>
                <a href=${item.link} class="btn">Shop</a>
                <img src=${item.picture}></img>
            </li>
        `
    })
    .join('');
    const text = document.getElementById('ItemsList');
    text.innerHTML = htmlString;
    console.log("item displayed")
};

//filter items based on searchBar input (query)
const filterItems = (dbItems, query) => {
    console.log("query = "+!query)
    if(query === null){
        return dbItems;
    }

    return dbItems.filter((item) => {
        const searchedItem = item.keyword.toLowerCase();
        return searchedItem.includes(query);
    })
}

const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('searchBar');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredItems = filterItems(dbItems, searchQuery); 

    loadItems();

    function printItem() {
        //if document.getElementById("ItemsList") is not yet initialized, to avoid error
        if(document.getElementById("ItemsList") === null) {
            filteredItems.map(item => (
                <li class="items">
                    <h2>{item.title}</h2>
                    <h4>Price: {item.price}</h4>
                    <a href={item.link} class="btn">Shop</a>
                    <img src={item.picture} alt=" "></img>
                </li>
                ));
        } else {
            //to replace the previously displayed data according to the new search input
            return displayItems(filteredItems);
        }
    }
    return(
        <Router>
        <div>
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul id="ItemsList">
                {printItem()}
            </ul>
        </div>
        </Router>
    )
}

export default Search;
