import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import errorImage from '../public/error.jpg';
import Abaut from "./abaut"
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./project";
function App() {

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp10712541.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Navbar */}
      <div className="fixed top-0  z-10 w-full md:w-72">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-72 md:mt-0 mt-28">
        <Routes>
          <Route path="/about" element={<Abaut />} />
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<img className="mx-auto mt-48" src={errorImage} alt="Error" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
