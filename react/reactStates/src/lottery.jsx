import { useState } from "react";
import "./lottery.css"
export default function lottery() {

    let [tickets,settickets] = useState(0);
    let [win,setwin] = useState("");

    function ticket() {
        let no1 = Math.floor(Math.random() * 9 + 1);
        let no2 = Math.floor(Math.random() * 9 + 1);
        let no3 = Math.floor(Math.random() * 9 + 1);
        let win = (`${no1}${no2}${no3}`);
        if (no1 + no2 + no3 == 15) {
            setwin("you are the winner");
            settickets(()=>(win));
        }else{
            settickets(()=>(win));
        }
    }


    return (
        <div id="container">
            <div id="box">
                <h1>LOTTERY</h1>
            </div>
            <div id="box">
                <h2>{win}</h2>
                <h3>Lottery ticket = "{tickets}"</h3>
            </div>
            <div id="box">
                <button onClick={ticket}>GET TICKET</button>
            </div>
        </div>
    )
}