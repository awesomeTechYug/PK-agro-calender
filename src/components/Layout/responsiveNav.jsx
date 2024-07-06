import { useEffect } from "react";

function ResponsiveNav() {

    useEffect(()=>{
      
        document.getElementById('nav-toggle').onclick = function(){
            document.getElementById("nav-content").classList.toggle("hidden");
        }
 
    },[])

    return(
  
     <>
        
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
            <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet"/> 
        
        <body class=" font-sans leading-normal tracking-normal">
        
            <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-lime-100 to-green-200 p-1 fixed w-full z-10 top-0 lg:px-60 md:px-40">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
                        <span class="text-2xl pl-2 flex gap-5">
                        <img src="/logo_dark.png" alt="Logo pk calendar"  className=" h-10 rounded-full"/>
                         <h3 class='flex items-center text-green-800 text-sm'>तपाईलाई स्वागत छ</h3>
                         <i class="em em-grinning h-2"></i> 
                        </span>
                        
                    </a>
                </div>
        
                <div class="block lg:hidden">
                    <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
        
                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="mr-3">
                            <a class="inline-block py-2 px-4 text-lime-700 no-underline" href="/">दैनिक मूल्य</a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-green-800 no-underline hover:text-yellow-600 hover:text-underline py-2 px-4" href="#">कृषि पात्रो</a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-green-800 no-underline hover:text-yellow-600 hover:text-underline py-2 px-4" href="#">हाम्रा सेवाहरू</a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-green-800 no-underline hover:text-yellow-600 hover:text-underline py-2 px-4" href="/contact">सम्पर्क</a>
                        </li>
                    </ul>
                </div>
            </nav>
        
       
            <div class="container shadow-lg mx-auto bg-white ">
        
            </div>
        
           
        
        </body>
    
    </>
    )
}

export default ResponsiveNav;