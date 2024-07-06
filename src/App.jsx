import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import Info from "./components/InformationPages/info";
import VegetableInfoList from "./components/ListPages_Components/VegetableInfoList";
import YoutubeResources from "./components/ListPages_Components/YoutubeResources";
import PestInfoList from "./components/ListPages_Components/PestInfo";
import AgroDepartmentlist from "./components/ListPages_Components/AgroDepartmentlist";
import AgroTrainingsLists from "./components/ListPages_Components/Agrotrainingslist";
import AgroGrantslist from "./components/ListPages_Components/AgroGrants_Aids_Policies";
import DetailWeatherReport from "./components/weathercomponent/DetailWeatherReport";



function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="krishipatro-info" element={<Info/>} />
          <Route path="vegetablesinfo" element={<VegetableInfoList/>} />
          <Route path="pestinfo" element={<PestInfoList/>} />
          <Route path="agrodepartment" element={<AgroDepartmentlist/>} />
          <Route path="agrotraining" element={<AgroTrainingsLists/>} />
          <Route path="agrogrants" element={<AgroGrantslist/>} />
          <Route path="videoresources" element={<YoutubeResources/>} />
          <Route path="weatherreport" element={<DetailWeatherReport/>} />
        </Routes>
      </>
    );
  }
  
  export default App;