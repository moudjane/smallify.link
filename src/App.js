// import logo from './logo.svg';
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div>
      <Navbar />
      <div className="containerr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App