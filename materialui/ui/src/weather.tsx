import TextField from '@mui/material/TextField';
import "./weather.css"
import { useEffect, useState } from 'react';

export default function Weather() {
    let url = "https://api.openweathermap.org/data/2.5/weather";
    let key = "50650d6e73c9f2f2ca456e0c673a43fe";

    async function getinfo() {
        let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let jsonres =  await response.json();
        console.log(jsonres);

    }


    let [city, setcity] = useState("");
    function handlechange(event: any) {
        // console.log(event.target.value);
        let value = event.target.value;
        setcity(value);

    }

    function handlesubmit(evt: any) {
        evt.preventDefault();
        console.log(city);
        setcity("");
    }
    return (
        <>
            {/* <h3>{city}</h3> */}
            <h1>WEATHER APP</h1>
            <form action="" onSubmit={handlesubmit}>
                <div>
                    <TextField label="CITY" id="fullWidth" className="input" value={city} onChange={handlechange} />
                </div><br />
                <button type='submit' onClick={getinfo}>CLICK ME</button>
            </form>
        </>
    )
}