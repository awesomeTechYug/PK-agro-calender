import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </>
    );
  }
  
  export default App;