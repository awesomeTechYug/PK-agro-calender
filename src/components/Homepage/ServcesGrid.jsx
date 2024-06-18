import { servicesList } from "../../const/const";

function ServicesGrid(){
    return(
        <>
        <div className=" grid grid-cols-2 gap-1 mx-1 mb-2">

        {servicesList.map((items, ind) => (           
            <div className={` w-[180px]  h-20 pt-4 ${items.bgColor} rounded-md hover:scale-105 hover:bg-lime-600 hover:border-2 hover:border-sky-800 `} key={ind} >
              <a href="/contact">

              <span className="flex justify-center h-8">
               <img src={items.icon} alt=""/>
               </span>
                <h1 className="flex justify-center" >{items.service} </h1>

              </a>
            </div>
             ))}
        </div>
        </>
    )

}

export default ServicesGrid ;