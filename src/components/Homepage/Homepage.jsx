
import Blogs from "./Blogs"
import PKCalendar from "./Calender"
import ProServices from "./ProServices"
import ServicesGrid from "./ServcesGrid"
import TodayPrice from "./TodayPrice"
import WeatherStatus, { ADtoBS } from "./WeatherReport"
import Layout from "../Layout/Layout"
import ChooseCity from "../weathercomponent/chooseCity"


function Homepage() {

return(
    <>
    <Layout>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <div className="flex justify-center mb-2  text-lime-900 ">
      <div className=' bg-white px-3 rounded-xl w-[375px] bg-gradient-to-r from-sky-200  to-emerald-300'>
        <div className="flex justify-between">
        <ADtoBS/>
        < WeatherStatus/>
        </div>
        <div className="pb-1">
          <ChooseCity/>  {/* also show weekly forcast */}
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
        <img src="PK-Krishi-calendar.png" alt=""  className="flex justify-center w-[360px] rounded-xl hover:border-2 hover:border-lime-500" />
      </div>
     

   </Layout>
   


    </>
  )
 
}

export default Homepage
