
import Blogs from "./components/Blogs"
import PKCalendar, { ADtoBS } from "./components/Calender"
import FooterSection from "./components/FooterSection"
import NavBar from "./components/NavBar"
import ServicesGrid from "./components/ServcesGrid"
import TodayPrice from "./components/TodayPrice"

import WheatherCalender from "./components/WheatherCalender"

function App() {

return(
    <>
   <div className=" bg-green-50">
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div className="flex justify-center ">
      <NavBar/>
    </div>
    <div className="flex justify-center">
      < WheatherCalender/>
    </div>

    <div className="flex justify-center">
    <div className="my-1 bg-white rounded-xl w-[375px] ">
        <div className="flex justify-center">
          <ADtoBS/>
        </div>
        <div className="flex justify-center mb-3">
          <PKCalendar/>
        </div>
    </div>
    </div>

    <div className="flex flex-col justify-center my-1">
      <TodayPrice/>
    </div>
   
    <div className="flex justify-center ">
      <ServicesGrid/>
    </div>

    <div className="flex justify-center ">
      <Blogs/>
    </div>

    <div className="flex justify-center">
      <FooterSection/>
    </div>

   </div>
   
   


    </>
  )
 
}

export default App
