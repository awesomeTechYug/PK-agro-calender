import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import Info from "./components/InformationPages/info";


function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="info" element={<Info/>} />
        </Routes>
      </>
    );
  }
  
  export default App;