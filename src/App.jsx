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
    <div className="flex">
      {/* Navbar chap tomonda qotib turishi uchun kerakli sinflar qo'shildi */}
      <div className="sticky top-0 h-screen w-64 bg-slate-800">
        <Navbar />
      </div>

      <div className="w-full ">
        {/* Main content */}
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
