import React, { useState } from 'react';
function dosomething() {
    console.log("button was clicked");
}
function changecolor(setColor) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red},${green},${blue})`;
    setColor(color);    

}
export default function button() {
    const [color, setColor] = useState('white');
    return (
        <>
            <button onClick={dosomething}>CLICK ME</button>
            <p onMouseOver={() => changecolor(setColor)}  style={{ backgroundColor: color }}> hover to change color </p>
        </>
    )
}