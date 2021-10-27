import "./component/Search.css"

function ProductList() {
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
            .slice(0, 3).map((item) => {
                console.log("yuhuu")
                return `
                <div class="col-3">
                    <h2>${item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <img src=${item.picture} alt=${item.title} class="item-img"></img>
                    <a href=${item.link} class="btn"> Shop Now &#8594;</a>
                </div>
            `;
        })
        .join('');
        document.getElementById('HomeList').innerHTML = htmlString;
    };

    return null;
}

export default ProductList;