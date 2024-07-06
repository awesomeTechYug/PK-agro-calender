import ResponsiveNav from "./responsiveNav";

function Layout({children}){
    return(
        <>
         {/* <div className=" w-screen  bg-gradient-to-r from-lime-100 to-green-200 p-1  fixed items-center ">
         <a href="/" className="flex gap-5">
         <img src="/logo_dark.png" alt="Logo pk calendar"  className=" h-10 rounded-full"/>
         <h2 className=' font-bold flex items-center'>तपाईलाई स्वागत छ</h2>
         </a>
        </div> */}
        <ResponsiveNav />
        
            <div className=" pt-16 pb-10  bg-lime-50">
                {children}
            </div>
        

        {/* Footer */}
     
        <div className=" w-screen p-3 bg-gradient-to-b from-green-100 to-gray-100 border-t border-gray-400 shadow">
        <div className=" flex flex-col gap-2 justify-center">
            <h1 className=' font-bold flex text-green-900 justify-center'>Sampurna Krishi : सम्पुर्ण कृषि</h1> 
            <a href="https://pkagriculture.com.np/" className=" text-lime-900 flex justify-center">
            <p>By Pk Bahuudeshya Krishi Farm Pvt Ltd</p>
            </a>
        </div>
       <div className=" flex flex-col justfy center text-green-800">
       <span className="flex justify-center gap-5 pt-3">
       <a href="/" className=" hover:text-amber-600"><h2>दैनिक मूल्य</h2></a> 
       <a href="/vegetablesinfo" className=" hover:text-amber-600"><h2>बाली जानकारी</h2></a>
       <a href="#" className=" hover:text-amber-600"><h2>कृषि उपकरण</h2></a>
       <a href="/agrogrants" className=" hover:text-amber-600"><h2>कृषि सूचना</h2></a>
       </span>
       <span className="flex justify-center gap-5 py-3">
       <a href="/krishipatro-info" className=" hover:text-amber-600"><h2> कृषि पात्रो</h2></a>
       <a href="/about" className=" hover:text-amber-600"><h2>हाम्रो बारेमा</h2></a>
       <a href="/contact" className=" hover:text-amber-600"><h2>सम्पर्क</h2></a>
       </span>
       </div>
        </div>
        
        </>
    )

}

export default Layout;