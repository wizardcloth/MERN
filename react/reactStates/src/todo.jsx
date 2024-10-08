import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./todo.css";
export default function todo() {
    let [arr, setArr] = useState([{ text: "sample text", id: uuidv4(), done: false }]);
    let [newtodo, setnewtodo] = useState("");

    function value(event) {
        // console.log(event.target.value);
        setnewtodo(event.target.value);
        // console.log(newtodo);
        // console.log(setnewtodo);
    }

    function addElement() {
        setArr(() => {
            return [...arr, { text: newtodo, id: uuidv4(), done: false }]
        }
        );
        // console.log(newtodo);
        setnewtodo("");
    }
    function deleteItem(id) {
        // console.log(id);
        let copy = arr.filter((arr) =>
            (arr.id != id)
        );
        // console.log(copy);
        setArr(() => {
            return copy;
        });
    }

    let markDone = (id) => {
        let newarr = arr.map((arr) => {
            if (arr.id == id) {
                return {
                    ...arr,done : true
                } 
            }else{
                return arr
               
            }
        })
        setArr(()=>(newarr));
        console.log(newarr);
    }

    return (
        <div>
            <h1>SIMPLE TODO</h1>
            <br />
            <input onChange={value} value={newtodo} type="text" style={{ width: 500, height: 40, borderRadius: 40, backgroundColor: "aliceblue", color: "black", fontSize: 30, margin: 20, padding: 10 }} />
            <button onClick={addElement}>Submit</button>
            <div>
                <ul>
                    {
                        arr.map((arr) => (
                            <li style={arr.done ? { textDecorationLine: "line-through", color: "red", fontSize: 30, display: 'flex', alignItems: 'center' } : { fontSize: 30, display: 'flex', alignItems: 'center' }} key={arr.id}>
                                {arr.text}
                                <span style={{ marginLeft:"auto"}}>
                                <i onClick={() => deleteItem(arr.id)} style={{padding:20}} className="fa-solid fa-trash"></i>
                                <i onClick={() => markDone(arr.id)} style={{padding:20}} className="fa-solid fa-square-check"></i>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}