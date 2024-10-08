import { useState } from "react"
import "./object.css"
export default function game() {
    let [moves, setmoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArr] = useState(["no moves,"]);

    let counter1 = () => {
        // console.log(moves);
        setmoves({ ...moves, blue: moves.blue + 1 });
        setArr([...arr, " bluemoves , "])
        console.log(arr);
    }
    let counter2 = () => {
        setmoves({ ...moves, red: moves.red + 1 });
    }
    let counter3 = () => {
        setmoves({ ...moves, yellow: moves.yellow + 1 });
    }
    let counter4 = () => {
        setmoves({ ...moves, green: moves.green + 1 });
    }


    return (
        <>
            <div className="main">
                <div className="inner1">
                    <h2>blue moves : {moves.blue}</h2>
                    <button style={{ backgroundColor: "blue" }} onClick={counter1}>BLUE</button>
                    <h2>Yellow moves : {moves.yellow} </h2>
                    <button style={{ backgroundColor: "yellow", color: "black" }} onClick={counter2}>YELLOW</button>
                </div>
                <div className="inner2">
                    <h2>Red moves : {moves.red} </h2>
                    <button style={{ backgroundColor: "red" }} onClick={counter3}>RED</button>
                    <h2>Green moves : {moves.green} </h2>
                    <button style={{ backgroundColor: "green" }} onClick={counter4}>Green</button>

                </div>
            </div>
            <div className="p">
                <span>{arr}</span>
            </div>
        </>
    )
}