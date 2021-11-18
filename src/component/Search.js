import "./Search.css"
import "./App.css"

function Search() {
    let hpItems = [];

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
                hpItems = myJson;
                console.log(hpItems);
                displayItems(hpItems);
            });
    };

    loadItems();

    const displayItems = (items) => {
        const htmlString = items
            .map((item) => {
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
        document.getElementById('ItemsList').innerHTML = htmlString;

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredItems = hpItems.filter((item) => {
                return (
                    item.keyword.toLowerCase().includes(searchString)
                );
            });
            displayItems(filteredItems);
        });
    };

    return null;
}

export default Search;