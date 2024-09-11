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
function product({title,price = 10}) {
    //& everything will get printed two time due to strict mode in app.jsx
    // console.log(proms)
    return (
        <div className="product">
            <h3>PRODUCT : {title}</h3>
            <h5>PRICE : {price}</h5>
        </div>
    )
}



export default product;