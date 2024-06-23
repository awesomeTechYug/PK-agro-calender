import { blogList } from "../../const/const";

function Blogs(){
    return(
        <>
        <div  className=" flex flex-col justify-center bg-white rounded-2xl w-[375px] border-2 pt-2 ">
           <h1 className="flex justify-center">Blogs</h1>
            <div className="divide-y divide-gray-400 h-[350px] overflow-y-scroll ">
            {
                blogList.map((data, ind)=>(
                <div className="flex justify-center gap-5 mx-2 py-3  hover:bg-lime-300 hover:scale-105" key={ind}>
                    <img src={data.image} alt="" className=" w-14 h-14 rounded-xl " />
                    <h2 className="w-[250px] overflow-hidden text-lime-900">{data.title}</h2>
                </div>
      
            ))
            }
            </div>
            <h5 className="flex justify-center   mb-1">Read More</h5>
        </div>
        
        </>
    )

}

export default Blogs;