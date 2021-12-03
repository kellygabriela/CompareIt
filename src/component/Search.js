import "./Search.css"
import "./App.css"
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

//array that hold the product from database
let dbItems = [];

//updating the displayed items based on search
const displayItems = (items) => {
    return (
        <>
            {items
            .map(item => (
                    <li class="items">
                        <h2>{item.title}</h2>
                        <h4>Price: {item.price}</h4>
                        <a href={item.link} class="btn">Shop</a>
                        <img src={item.picture} alt=" "></img>
                    </li>
            ))}
            {console.log("product page printed")}
        </>
    );
};

//filter items based on searchBar input (query)
const filterItems = (dbItems, query) => {
    console.log("query = "+!query)
    if(!query){
        return dbItems;
    }

    return dbItems.filter((item) => {
        console.log("search input: "+query);
        const searchedItem = item.keyword.toLowerCase();
        return searchedItem.includes(query);
    })
}

//executed when product page is loaded
const Search = (props) => {
    dbItems = props.items;
    console.log("dbItems: ");
    console.log(dbItems);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('searchBar');
    const [searchQuery, setSearchQuery] = useState(query || " ");
    const filteredItems = filterItems(dbItems, searchQuery);

    return(
        <div class="container-s">
        <Router>
        <div>
            <SearchBar 
                setSearchQuery={setSearchQuery}
            />
            <ul id="ItemsList">
                {displayItems(filteredItems)}
            </ul>
        </div>
        </Router>
        </div>
    )
}

export default Search;