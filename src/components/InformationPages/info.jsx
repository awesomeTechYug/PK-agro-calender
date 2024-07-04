import React from "react"
import ResponsiveNav from "../Layout/responsiveNav";

function Info(){
    return(
        <>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>INFO</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        </head>
        <ResponsiveNav/>
  
        <iframe src="./htmlFiles/Hamropatroinfo.html" className="w-full h-screen"></iframe>
 
        </>
    )

}

export default Info;