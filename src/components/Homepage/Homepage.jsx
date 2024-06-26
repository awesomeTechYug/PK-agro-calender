
import Blogs from "./Blogs"
import PKCalendar from "./Calender"
import ProServices from "./ProServices"
import ServicesGrid from "./ServcesGrid"
import TodayPrice from "./TodayPrice"
import WeatherStatus, { ADtoBS } from "./WeatherReport"
import Layout from "../Layout/Layout"
import ChooseCity from "../weathercomponent/chooseCity"
import InfoServices from "../OurServices/InfoServices"
import TodayPricewidget from "./TodayPricewidget"



function Homepage() {

return(
    <>
    <Layout>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <div className="flex justify-center mb-2  text-lime-900 ">
      <div className='  px-3 rounded-xl w-[375px] shadow-md'>
        <div className="flex justify-between">
        <ADtoBS/>
        < WeatherStatus/>
        </div>
        <div className="pb-1">
          <ChooseCity/>  {/* also show weekly forcast */}
        </div>
      </div>
      </div>


      <div className="my-5">
      <div className="flex flex-col justify-center rounded-2xl  py-1 mx-auto border-green-800 hover:border-orange-500   bg-green-300 border-2 w-[370px]">
        {/* <TodayPrice/> */}
        <TodayPricewidget />
      </div>

      </div>
      <div className="flex justify-center ">
        <InfoServices/>
      </div>
    
      <div className="flex justify-center ">
        <ServicesGrid/>
      </div>

      <div className="flex justify-center">
      <div className="my-1  rounded-xl w-[375px] shadow">
        <h2 className="flex justify-center m-3 font-bold">महिना अनुसार फसल जानकारी</h2>
          <div className="flex justify-center m-3">
            <PKCalendar/>
          </div>
      </div>
      </div>
      
      <div className="flex justify-center">
        <ProServices/>
      </div>

  

      <div className="flex justify-center mt-3 ">  
        <Blogs/>
      </div>

   </Layout>
   
    </>
  )
 
}

export default Homepage
