import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
// import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BulidingService from "./Pages/BulidingService";
import FireSystem from "./Pages/FireSystem";
import FabSystem from "./Pages/FabSystem";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/BulidingService" element={<BulidingService />} />
        <Route path="/FireSystem" element={<FireSystem />} />
        <Route path="/FabSystem" element={<FabSystem />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
