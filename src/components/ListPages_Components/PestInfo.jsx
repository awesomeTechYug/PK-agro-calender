import React from "react"
import ResponsiveNav from "../Layout/responsiveNav";
import { pestInfoList } from "../../const/listpages";

function PestInfoList(){
    return(
        <>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>बाली रोग कीरा ज्ञान</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        </head>
        <ResponsiveNav/>

        <section className="pt-16 relative">
  <div
    aria-hidden="true"
    className="absolute inset-y-0 w-44 left-0 hidden dark:flex"
  >
    <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20" />
  </div>
  <div className="absolute top-14 inset-x-0 h-64 flex items-start">
    <div className="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40" />
    <div className="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40" />
  </div>
  <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
    {/*[*/}
    <div className="flex justify-between pb-6 relative">
      <div className="">
        <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white font-bold">
          Pests : बाली रोग कीरा ज्ञान
        </h2>
      </div>
      <div className="flex items-center min-w-max gap-5">
        <a
          aria-current="page"
          href="#"
          className="router-link-active router-link-exact-active px-6 md:px-7 py-3 rounded-full relative group"
        >
          <span className="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent" />
          <span className="relative flex items-center justify-center text-white bg-[#00D8A5]  md:py-2 md:px-5 md:rounded-3xl rounded-2xl py-1 px-3">
            {/*[*/} Watch Playlist {/*]*/}
          </span>
        </a>
      </div>
    </div>
    <div className="grid grid-cols-2 items-stretch sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-8">
       {pestInfoList.map((item, ind)=>(
 <div className="p-1 relative h-auto flex flex-col rounded-2xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border">
 <div className="relative h-max min-h-max" key={ind}>
   <img
     src={item.image}
     onerror="this.setAttribute('data-error', 1)"
     width={280}
     alt="Cover image"
     data-nuxt-img=""
     className="w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded-xl object-cover"
   />
   <span className="absolute top-2 right-2 px-2 rounded-full text-sm text-white bg-primary bg-green-700 ">
     new
   </span>
 </div>
 <div className="lg:px-2 pt-2 lg:pb-4 xl:px-4 md:pt-4 h-full flex flex-col justify-between">
   <div className="h-full">
     <h2 className="font-semibold text-base md:text-lg lg:text-xl line-clamp-2 md:line-clamp-3 text-gray-700 dark:text-white">
       {item.infoTitle}
     </h2>
   </div>
   <div className="pt-3 sm:pt-5 min-h-max h-max">
     <a
       aria-current="page"
       href={item.url}
       className="router-link-active router-link-exact-active flex relative group items-center text-white gap-1 text-sm w-max rounded-full"
     >
       <span className="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary" />
       <span className="relative flex items-center gap-3 bg-[#00D8A5] md:py-2 md:px-5 md:rounded-3xl rounded-2xl py-1 px-2">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width={20}
           height={20}
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-3 h-3"
         >
           <path
             fillRule="evenodd"
             d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
             clipRule="evenodd"
           />
         </svg>
         अहिले पढ्नुहोस्
       </span>
     </a>
   </div>
 </div>
</div>

       ))}
      
     
     
  
    </div>
    {/*]*/}
  </div>
</section>
  
  
     
 
        </>
    )

}

export default PestInfoList;