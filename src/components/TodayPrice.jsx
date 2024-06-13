import { useState } from "react";

function TodayPrice(){
    const [Date, setBSDate] = useState("jesth 2081")
    return(
        <>
        <div className='flex justify-center'>
            <h1>Price rate for {Date} </h1>
        </div>
       <div className="flex justify-center">
       <div className=' my-2 w-[375px] h-96 flex justify-center bg-white rounded-2xl  border-2'>
           <p> Price here</p>
        </div>
       </div>
        </>
    )
}

export default TodayPrice;