import "./card.css"
import Price from "./price";
function card({title,idx,dec}) {
    let oldprice = ["4000","400","1000","1500"];
    let newprice = ["999","9090","900","999"];
    return(
        <div className="card">
        <h3 id="heading">{title[idx]}</h3>
        <h3>{dec[idx][0]}</h3>
        <h3>{dec[idx][1]}</h3>
        <Price oldprice={oldprice} newprice={newprice} idx={idx}/>
        </div>
    )
}
export default card;