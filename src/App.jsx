import {Routes, Route, Link} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contract";
import Home from "./components/Home";
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<p>Nope</p>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

export default App
