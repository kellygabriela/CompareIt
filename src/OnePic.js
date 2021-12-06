import "./component/Search.css"
import "./OnePic.css"

const OnePic = (props) => {
    const data = props.items;
    return (
        <>
            {data
            .slice(11, 12).map(item => (
                    <li class="grid">
                        <h2>{item.title}</h2>
                        <img src={item.picture} alt=" "></img>
                        <h4><br/>Price: {item.price}</h4>
                        <a href={item.link} class="btn" target="_blank">Shop</a>
                    </li>
            ))}
            {console.log("onepic printed")}
            <p>{props.isFetching ? 'Fetching products...' : ''}</p>
        </>
       );
}

export default OnePic;
