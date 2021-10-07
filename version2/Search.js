import "./Search.css"

function Search() {
    let hpItems = [];

    const loadItems = () => {
      
            fetch('Data.json', {
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
                    <h2>${item.product}</h2>
                    <h3>Manufactured by ${item.Manufacturer}</h3>
                    <p>Price: ${item.price}</p>
                    <img src=${item.picture}></img>
                </li>
            `;
        })
        .join('');
        document.getElementById('ItemsList').innerHTML = htmlString;

        window.onload = document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredItems = hpItems.filter((item) => {
                return (
                    item.Manufacturer.toLowerCase().includes(searchString) ||
                    item.product.toLowerCase().includes(searchString)
                );
            });
            displayItems(filteredItems);
        });
    };

    return null;
}

export default Search;