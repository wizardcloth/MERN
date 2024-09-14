import "./card.css"
function price({oldprice,newprice,idx}){
    return(
        <>
        <h3 id="oldprice" >{oldprice[idx]}Rs</h3>
        <h3 id="newprice">Now Only on {newprice[idx]}Rs</h3>
        </>
    )
}
export default price;