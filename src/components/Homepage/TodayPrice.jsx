import { useState } from "react";
import { vegetablesPricelist } from "../../const/vegetables";

function TodayPrice(){
    const [Date, setBSDate] = useState("jesth 2081")
    return(
        <>
        <div className='flex justify-center'>
            <h1>Price rate for {Date} </h1>
        </div>
       <div className="flex justify-center">

       <div className=' my-1 py-3  flex flex-col justify-center bg-yellow-100 rounded-2xl  border-2'>
        <div className=" flex m-2 divide-x divide-gray-400">
            <h2 className=" pr-20 pl-4">Name</h2>
            <h2 className="pr-2 pl-2 ">Max Price</h2>
            <h2 className="pr-2 pl-2">Min Price</h2>
            <h2 className="pl-2">Average</h2>
        </div>
       <div className="divide-y divide-gray-400 h-[80vh] w-[375px] overflow-y-scroll ">
            {vegetablesPricelist.map((item, ind)=> (
              <div key={ind} className=" p-2 mx-2 divide-x divide-gray-400 flex">
              <p className=" w-32 pl-2">{item.name}</p> 
              <p className=" pr-12 pl-4">{item.max_price}</p> 
              <p className=" pr-12 pl-4">{item.min_price}</p> 
              <p className=" pl-3">{item.average_price}</p> 

             </div>
              
            ))}
        </div>
       </div>
       </div>
        </>
    )
}

export default TodayPrice;