import { Routes, Route } from "react-router-dom";
import Root from "./pages/Navbar/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Interest from "./pages/Interest/Interest";
import Awards from "./pages/Awards/Awards";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Root />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
