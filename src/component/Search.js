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
                        <a href={item.link} class="btn" target="_blank">Shop</a>
                        <img src={item.picture} alt=" "></img>
                    </li>
            ))}
            {console.log("product page printed")}
        </>
    );
};

//filter items based on searchBar input (query)
const filterItems = (dbItems, dataFromCrawler, cr_ex, query) => {
    console.log("query = "+!query)
    if(!query){
        return dbItems;
    }

    if(cr_ex) {
        return dataFromCrawler;
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
    const [dataFromCrawler, setDataFromCrawler] = useState({items: [], exist: false});
    const [load, setLoad] = useState({isLoading: false});
    const { search } = window.location;
    const query = new URLSearchParams(search).get('searchBar');
    const [searchQuery, setSearchQuery] = useState(query || " ");
    const filteredItems = filterItems(dbItems, dataFromCrawler.items, dataFromCrawler.exist, searchQuery);

    return(
        <div class="container-s">
        <Router>
        <div>
            <SearchBar 
                setSearchQuery={setSearchQuery}
                setLoad={setLoad}
                setDataFromCrawler={setDataFromCrawler}
            />
            <div class="msg-div">
            <p class="loading-msg">{load.isLoading ? 'please wait... grabbing extra minions...' : ''}</p>
            </div>
                <ul id="ItemsList">
                    {displayItems(filteredItems)}
                </ul>
            </div>
        </Router>
        </div>
    )
}

export default Search;