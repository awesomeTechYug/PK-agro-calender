import Layout from "../Layout/Layout";
import ChooseCity from "./chooseCity"

function DetailWeatherReport(){
    return(
        <>
        <Layout>
            <div className="h-[70vh]">
            <div className=" flex justify-center">
        
            <div className="w-[380px]  bg-white shadow-md py-5 px-2 md:w-9/12 "> 
                <ChooseCity/>
            </div>
           </div>

            </div>
        
        </Layout>
        
        </>
    )

}

export default DetailWeatherReport;