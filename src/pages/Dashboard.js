import "../App.css";

export default function Dashboard() {


    return (
        <div className="App">
            <h1>Dashboard</h1>
            <div>
                <div className="container">
                    <div className="input-and-button">
                        {/* <div className="containerr"> */}
                        {/* <p className="custom">Customize your link:</p> */}
                        <div className="containerrr">

                            <input
                                // onChange={e => seturlInput(e.target.value)}
                                // value={urlinput}
                                type="url"
                                name="url"
                                id="url"
                                placeholder="https://example.com/"
                                // onKeyDown={handleKeyDown}
                                // pattern="" 
                                size="30" autoComplete="off"
                                required />
                            <input
                                // onChange={e => seturlInput(e.target.value)}
                                // value={urlinput}
                                type="url"
                                name="url"
                                id="url"
                                placeholder="Enter your URL"
                                // onKeyDown={handleKeyDown}
                                // pattern="" 
                                size="30" autoComplete="off"
                                required />
                        </div>
                        <button>CONVERT</button>
                    </div>
                </div>

                <p className="linkshort">Liens raccourcis:</p>

                <div className="biglink">
                    <div className="proutgauche">
                        <img
                            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
                            alt="Grapefruit slice atop a pile of other slices" />
                    </div>
                    <div className="">
                        <div className="linkz">

                            <p>https://example.com</p>
                            <p>&nbsp; →&nbsp;</p>
                            <p>https://smallify.link/bhzb</p>
                        </div>
                        <div classname="linkz2">
                            <p>Crée le 20/20/2020 &nbsp; 20 vues</p>

                        </div>
                    </div>
                </div>

                <div className="biglink">
                    <div className="proutgauche">
                        <img
                            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
                            alt="Grapefruit slice atop a pile of other slices" />
                    </div>
                    <div className="">
                        <div className="linkz">

                            <p>https://example.com</p>
                            <p>&nbsp; →&nbsp;</p>
                            <p>https://smallify.link/bhzb</p>
                        </div>
                        <div classname="linkz2">
                            <p>Crée le 20/20/2020 &nbsp; 20 vues</p>

                        </div>
                    </div>
                </div>

                <div className="biglink">
                    <div className="proutgauche">
                        <img
                            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
                            alt="Grapefruit slice atop a pile of other slices" />
                    </div>
                    <div className="">
                        <div className="linkz">

                            <p>https://example.com</p>
                            <p>&nbsp; →&nbsp;</p>
                            <p>https://smallify.link/bhzb</p>
                        </div>
                        <div classname="linkz2">
                            <p>Crée le 20/20/2020 &nbsp; 20 vues</p>

                        </div>
                    </div>
                </div>






            </div>





        </div>

    )
}