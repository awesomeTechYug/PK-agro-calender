function ServicesGrid(){
    return(
        <>
        <div className=" grid grid-cols-2 gap-1 mx-1 mb-2">
            <div className=" w-[180px] h-40 bg-red-600 rounded-md " >
                <span className="flex justify-center">icon</span>
                <h1 className="flex justify-center" >Seasonal Planning </h1>
                <p className="flex justify-center w-full overflow-hidden px-3 pt-2 "> abcdefg hijklm no p r st uv wxyz.</p>
            </div>

            <div className=" w-[180px] h-40 bg-lime-600 rounded-md " >
                <span className="flex justify-center">icon</span>
                <h1 className="flex justify-center"> Trend Analysis </h1>
                <p className="flex justify-center w-full overflow-hidden px-3 pt-2 "> abcdefg hijklm no p r st uv wxyz.</p>
            </div>

            <div className=" w-[180px] h-40 bg-yellow-600 rounded-md " >
                <span className="flex justify-center">icon</span>
                <h1 className="flex justify-center" > Agro Imputs </h1>
                <p className="flex justify-center w-full overflow-hidden px-3 pt-2"> abcdefg hijklm no p r st uv wxyz.</p>
            </div>

            <div className=" w-[180px] h-40 bg-sky-600 rounded-md " >
                <span className="flex justify-center">icon</span>
                <h1 className="flex justify-center" > Learning Materials </h1>
                <p className="flex justify-center w-full overflow-hidden px-3 pt-2 "> abcdefg hijklm no p r st uv wxyz.</p>
            </div>
          
        </div>
        </>
    )

}

export default ServicesGrid;