import { useState } from "react"

export default function form() {
    let [input, setinput] = useState({
        firstname: "",
        lastname: "",
    });

    let handleinput = (event) => {
        console.log(event.target.name);
        setinput((input) => {
            return ({ ...input, [event.target.name]: event.target.value });
        });
    }
    let handlesubmit = (event) => {
        event.preventDefault();
        console.log(input);
        setinput({
            firstname: "",
            lastname: "",
        })
    }

    return (
        <div>
            <h1>forms</h1>
            <form onSubmit={handlesubmit}>
                <label htmlFor="text">FIRSTNAME : </label>
                <input type="text" name="firstname" id="text" value={input.firstname} onChange={handleinput} />
                <label htmlFor="text">LASTNAME : </label>
                <input type="text" name="lastname" id="text" value={input.lastname} onChange={handleinput} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button>click me</button>
            </form>
        </div>
    )
}