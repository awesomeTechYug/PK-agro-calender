
import Blogs from "./Blogs"
import PKCalendar from "./Calender"
import ProServices from "./ProServices"
import ServicesGrid from "./ServcesGrid"
import TodayPrice from "./TodayPrice"
import WeatherStatus, { ADtoBS } from "./WeatherReport"
import Layout from "../Layout/Layout"

function Homepage() {

return(
    <>
    <Layout>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <div className="flex justify-center mb-2">
      <div className=' bg-white px-3 rounded-xl w-[375px] '>
        <div className="flex justify-between">
        <ADtoBS/>
        < WeatherStatus/>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
      <div className="my-1 bg-white rounded-xl w-[375px] ">
          <div className="flex justify-center m-3">
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
      
      <div className="flex justify-center">
        <ProServices/>
      </div>

      <div className="flex justify-center ">
        <Blogs/>
      </div>

      <div className="flex justify-center py-5 ">
        <img src="/3.png" alt=""  className="flex justify-center"/>
      </div>
     

   </Layout>
   


    </>
  )
 
}

export default Homepage
