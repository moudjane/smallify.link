// import logo from './logo.svg';
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar />
      <div className="containerr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
