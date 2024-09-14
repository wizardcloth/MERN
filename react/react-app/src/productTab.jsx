import Product from "./product.jsx";


function productTab() {
    let feature = ["tasty","delicious","yummmmy"];
    let features = {a: "tasty", b : "delicious",c : "yummmmy"};
    let mapArr = ["good","veryGood","fair"];
    return (
        <>
            <Product title="apple" price={100}  feature={feature}  features={features.a} mapArr={mapArr}/>
            <Product title="mango" price={230} feature={feature} features={features.b} mapArr={mapArr}/>
            <Product title="pear"  feature={feature} features={features.c} mapArr={mapArr}/>
        </>
    )
}

export default productTab;