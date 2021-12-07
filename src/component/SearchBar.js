import { useState , React } from "react";
import "./Search.css";
import { useHistory } from 'react-router-dom';
import db_API from './API';
import axios from "axios";


const SearchBar = ({ setSearchQuery, setLoad, setDataFromCrawler }) => {
    const [searchInput, setSearchInput] = useState();
    const history = useHistory();

    const onSubmit = async (e) => { //return to database
        e.preventDefault(); 
        console.log("search "+searchInput+"...");
        const search_query = { searchInput };
        setLoad({isLoading: true});

        //send search input
        const response = await axios.get('ProdData.json');
        console.log("search POST response:");
        console.log(response.data);
        setDataFromCrawler({items: response.data, exist: true});

        setLoad({isLoading: false});
        console.log("is here");
        setSearchQuery(searchInput);

        history.push(`?=${searchInput}`);
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
           <input id="button" type="submit" value="search"></input>
           <input id="button-small" type="submit" value="🔍"></input>
        </form>
    )
}

export default SearchBar;