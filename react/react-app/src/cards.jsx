import Card from "./card";

function cards() {
    let title = ["Logitec mouse","Apple watch","Speaker","Earbuds"];
    let dec = [
        ["GOOD DPI","FAST Responce time"],
        ["CHEAP","PREMIUM"],
        ["BASS BOOSTED","HI-TECH"],
        ["40+ hr PLAYBACK","1ms respnose"],
    ];
  
    return (
        <>
            <h2>BLOCKBUSTER DEALS | SHOPNOW</h2>
            <Card title={title} idx={0} dec={dec}/>
            <Card title={title} idx={1} dec={dec}/>
            <Card title={title} idx={2} dec={dec}/>
            <Card title={title} idx={3} dec={dec}/>
        </>
    )
}
export default cards;