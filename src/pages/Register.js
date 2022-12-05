import "../App.css";
import { useState } from 'react';
import axios from 'axios';
export default function Register() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [pseudo, setpseudo] = useState("");

    const options = {
        url: "http://localhost:5501/api/user/register",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            pseudo: pseudo,
            email: email,
            password: password
        }
    }

    const handlesubmit = () => {
        axios(options)
            .then(res => {
                console.log(res.status)
            })
    }


    return (
        <div className="App">
            <h1>Register</h1>
            <div>
                <div className="container">
                    <label className="label-form" htmlFor="text"><b>Pseudo: </b></label>
                    <input className="input-form" type="text" placeholder="Enter Pseudo" name="pseudo" id="pseudo" required onChange={(event) => setemail(event.target.value)} />
                    <label className="label-form" htmlFor="email"><b>Email: </b></label>
                    <input className="input-form" type="email" placeholder="Enter Email" name="email" id="email" required onChange={(event) => setemail(event.target.value)} />
                    <label className="label-form" htmlFor="psw"><b>Password: </b></label>
                    <input className="input-form" type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(event) => setpassword(event.target.value)} />
                    <label className="label-form" htmlFor="psw-repeat"><b>Repeat Password: </b></label>
                    <input className="input-form" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <div className="btn">
                        <button className="larger-btn" >Register</button>
                    </div>
                </div>
            </div>
        </div >
    )
}