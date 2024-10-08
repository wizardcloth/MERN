import { useEffect, useState } from "react";

export default function jokes() {
    let [joker, setjoker] = useState("");
    let url = "https://catfact.ninja/fact";
    async function joke() {
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.fact);
            setjoker(data.fact);
        }
        catch (err) {
            console.log("ERROR : " + err);
        }
    }
    useEffect(() => {
        // ! using async function inside an arrow function to avoid clean up warning
        async function getjoke(){
            try {
                let res = await fetch(url);
                let data = await res.json();
                console.log(data.fact);
                setjoker(data.fact);
            }
            catch (err) {
                console.log("ERROR : " + err);
            }
        } getjoke();
    }, []);

    return (
        <div>

            <h1>For a dad joke</h1>
            <button onClick={joke}>click me </button>
            <h3>{joker}</h3>

        </div>
    )
}
