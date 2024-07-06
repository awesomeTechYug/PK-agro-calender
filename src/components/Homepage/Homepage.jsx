
import Blogs from "./Blogs"
import PKCalendar from "./Calender"
import ProServices from "./ProServices"
import ServicesGrid from "./ServcesGrid"
import TodayPrice from "./TodayPrice"
import WeatherStatus, { ADtoBS } from "./WeatherReport"
import Layout from "../Layout/Layout"
import InfoServices from "../OurServices/InfoServices"
import TodayPricewidget from "./TodayPricewidget"



function Homepage() {

return(
    <>
    <Layout>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="सफल खेती गर्न आवश्यक उपकरण र ज्ञानको साथ नेपालका सबै अनुभव स्तरका किसानहरूलाई सशक्त बनाउँदै। Empowering farmers of all experience levels in Nepal with essential tools and knowledge to cultivate success."/>
    <meta name="keywords" content=" Vegetable Rates and Price today in Nepal, Vegetable Rates Today"/>
    <meta name="author" content="PK Bahuudeshua Krishi Farm Nepal"/>
    <title>Sampurna Krishi : सम्पुर्ण कृषि - All Agriculture One Stop Destination</title>
    </head>

      <div className="flex justify-center mb-2  text-lime-900 ">
      <div className='  px-3 rounded-xl w-[375px] pb-2  bg-white shadow-md'>
        <div className="flex justify-between">
        <ADtoBS/>
        < WeatherStatus/>
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

      <div className="flex justify-center gap-5 mt-2 -mb-2  ">
            <a href="/krishipatro-info">
            <img src="applogo2.png" alt="PK Krishi Patro"  className="flex justify-center w-[150px]  rounded-xl hover:border-4 border-2 border-lime-500 hover:border-orange-500" />
            </a>

            <a href="/videoresources">
            <img src="krishiWatch.png" alt="PK Krishi Patro"  className="flex justify-center w-[150px]  rounded-xl hover:border-4 border-2 border-lime-500 hover:border-orange-500" />
            </a>
        </div>
      
      <div className="flex justify-center">
        <ProServices/>
      </div>

      {/* <div className="flex justify-center mt-3 ">  
        <Blogs/>
      </div> */}

   </Layout>
   
    </>
  )
 
}

export default Homepage
