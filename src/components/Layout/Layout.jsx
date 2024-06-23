function Layout({children}){
    return(
        <>
         <div className=" w-screen  bg-gradient-to-r from-lime-100 to-green-200 p-1  fixed items-center ">
         <a href="/" className="flex gap-5">
         <img src="/PK-Krishi-calendar.png" alt="Logo pk calendar"  className=" h-10 rounded-full"/>
         <h2 className=' font-bold flex items-center'>तपाईलाई स्वागत छ</h2>
         </a>
        </div>
        
            <div className="py-3 pt-16 bg-lime-50">
                {children}
            </div>
        

        {/* Footer */}
        <div className="flex justify-center bg-lime-50 ">
        <img src="applogo.png" alt="PK Krishi Patro"  className="flex justify-center w-[150px]  rounded-xl hover:border-2 hover:border-lime-500" />
        </div>
     
        <div className=" w-screen bg-black p-3">
        <div className=" flex gap-2 justify-center">
            <h1 className=' font-bold flex text-white'>Krishi Patro</h1>
            <a href="https://pkagriculture.com.np/" className=" text-white">
            <p>By Pk Bahuudeshya Krishi Farm Pvt Ltd</p>
            </a>
        </div>
       <div className=" flex flex-col justfy center text-white">
       <span className="flex justify-center gap-5">
       <a href="/" className=""><h2>contact</h2></a>
       <a href="/about" className=""><h2>about</h2></a>
       <a href="/" className=""><h2>story</h2></a>
       <a href="/" className=""><h2>services</h2></a>
       </span>
       </div>

        </div>
        </>
    )

}

export default Layout;