import { infoServices } from "../../const/const";

function InfoServices(){

    return(
        <>
        <div className="shadow-md w-[375px] mt-1">
            <h2 className=" flex justify-center font-bold pb-2">हाम्रा सेवाहरू </h2>

            <div className="grid grid-cols-3 gap-2 ml-1 mb-3">
               {
                infoServices.map((item, ind) => (
                    <span key={ind} className="shadow-inner w-[110px] h-[110px] bg-white flex justify-center items-center  flex-col">
                        <a href={item.url}>
                        <img src={item.icon} alt="info icon"  className="w-16 flex"/>
                        <p >{item.infoName}</p>
                        </a>
                    </span>
                ))
               }

               
            </div>
        </div>
        </>
    )
}

export default InfoServices;