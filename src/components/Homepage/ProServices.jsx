import { proServicesList, servicesList } from "../../const/const";

function ProServices(){
    return(
        <>
        <div className=" my-2 bg-white rounded-xl w-[375px] ">
            <h1 className="flex justify-center pt-2">Pro Services</h1>


        {proServicesList.map((item, ind) =>(
            <p className= {` p-2 mx-5 my-3 bg-${item.color} hover:scale-105 rounded-md border-green-500 border-2 hover:border-red-500 hover:bg-pink-200 `} key={ind}>
              {item.list} 
          </p>
        ))}

            
        </div>
        
        </>
    )

}

export default ProServices;