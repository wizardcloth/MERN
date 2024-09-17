import { useState } from "react";
export default function counter(){
    //& deconstructing the usestate
    let arr = useState();
    let [count,setcounter] = useState(0);
    // console.log(arr)
    console.log("outside counter : " + count);

    function counter() {
        //& set varibles update at render state not on funtion call
        //& only rerender when change is state is detected by react 
        //& setcounter(25); this will not rerender again due to there is no change in state
        setcounter(count + 1);  
        console.log("inside counter :   " + count);
        //& use call back when new value depends on previous value
        setcounter((currCount)=>{
            return currCount += 1;
        })
        setcounter((currCount)=>{
            return currCount += 1;
        })
    }
    //! when passing the fun in usestate never execute them correct(fun) - wrong(fun())
    let [color,setColor] = useState("white");
    function changecolor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = `rgb(${red},${green},${blue})`;
        setColor((newcolor)=>{
            newcolor = color
            return newcolor;
        })
    
    }

    return(
        <>
        <h1 onMouseOver={changecolor} style={{color : color}}>Counter = {count}</h1>
        <button onClick={counter}>COUNTER</button>
        </>
    )
}