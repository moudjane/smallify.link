import "../App.css";
export default function Login() {
    return (
        <div className="App">
            <h1>Login</h1>
            <form action="">
                <div className="container">
                    <label className="label-form" htmlFor="email"><b>Email: </b></label>
                    <input className="input-form" type="email" placeholder="Enter Email" name="email" id="email" required />
                    <label className="label-form" htmlFor="psw"><b>Password: </b></label>
                    <input className="input-form" type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <div className="btn">
                        <button className="larger-btn" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}