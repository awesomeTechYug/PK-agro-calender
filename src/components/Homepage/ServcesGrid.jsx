import { servicesList } from "../../const/const";

function ServicesGrid(){
    return(
        <>
        <div className=" grid grid-cols-2 gap-8 my-8 mb-5">

        {servicesList.map((items, ind) => (           
            <div className={` w-[150px]  h-28 pt-4 ${items.bgColor} rounded-md hover:scale-105 hover:bg-lime-600 hover:border-2 hover:border-sky-800 `} key={ind} >
              <a href="/contact">
              <span className="flex justify-center h-12">
               <img src={items.icon} alt=""/>
               </span>
                <h2 className="flex justify-center mt-3  font-extrabold " >{items.service} </h2>

              </a>
            </div>
             ))}
        </div>
        </>
    )

}

export default ServicesGrid ;