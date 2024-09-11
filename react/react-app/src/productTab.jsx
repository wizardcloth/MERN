import Product from "./product.jsx";

function productTab() {
    return (
        <>
            <Product title="apple" price={100}/>
            <Product title="mango" price={230}/>
            <Product title="pear" />
        </>
    )
}

export default productTab;