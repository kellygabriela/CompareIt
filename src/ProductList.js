import "./component/Search.css";
import "./component/App.css";

const ProductList = (props) => {
    const data = props.items;
   return (
    <>
    <div class="categories">
    <div class="small-container">
        <div class="row">
        {data
        .slice(0, 6).map(item => (
                <li class="col-3">
                    <img src={item.picture} alt=" "></img>
                    <h2>{item.title}</h2>
                    <h4>Price: {item.price}</h4>
                    <a href={item.link} class="btn" target="_blank">Shop</a>
                </li>
        ))}
        {console.log("product list printed")}
        </div>
    </div>
    <p>{props.isFetching ? 'Fetching products...' : ''}</p>
    </div>
    </>
   );
}

export default ProductList;
