import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact"
import './App.css';
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/service" element={<Service />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
