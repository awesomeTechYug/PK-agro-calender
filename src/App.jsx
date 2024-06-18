import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact";

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </>
    );
  }
  
  export default App;