import "./product.css";
// function product(proms) {
//     //& everything will get printed two time due to strict mode in app.jsx
//     // console.log(proms)
//     return (
//         <div className="product">
//             <h3>PRODUCT : {proms.title}</h3>
//             <h5>PRICE : {proms.price}</h5>
//         </div>
//     )
// }
//& or if you know what is coming in proms
function product({title,price = 10,feature,features,mapArr}) {
    // console.log(feature);
    //& everything will get printed two time due to strict mode in app.jsx
    let style = {color : price < 50 ? "red" : ""};
    return (
        <div className="product" >
            <h3>PRODUCT : {title}</h3>
            <h3 style={style}>PRICE : {price}</h3>
            {price<150 ?<p>cheap</p> : null}
            {price >100 && <p>expensive</p>}
            <h3>feature : {feature}</h3>
            <h3>features : {features}</h3>
            <h3>Reviews : {mapArr.map((mapArr)=>(<li>{mapArr}</li>))}</h3>
        </div>
    )
}



export default product;