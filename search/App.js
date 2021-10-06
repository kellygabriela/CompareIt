import React from "react";
import ReactDOM from "react-dom";
import "./App.css"
import Search from "./Search";

function App() {
    return(
        <>
        <div class="container">
            <h1>&#x2728; Car Factory &#x2728;</h1>
            <div id="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="search here"
                />
            </div>
            <div>
                
            </div>
            <ul id="ItemsList"></ul>
        </div>
        <Search />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;