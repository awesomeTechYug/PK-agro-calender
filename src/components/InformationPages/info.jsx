import React from "react"
import ResponsiveNav from "../Layout/responsiveNav";

function Info(){
    return(
        <>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Krishi Patro - तरकारी बजार मूल्य, बजार विकास र कृषि जानकारी</title>
        <meta name="author" content="name" />
        <meta name="description" content="Kishi Patro is a comprehensive Nepali agricultural app empowering farmers with real-time market prices, crop calendars, agro-advisory, and expert guidance. Download the app for essential & pro features to enhance your agricultural practices and cultivate success." />
        <meta name="keywords" content="kishi patro, Sampurna Krishi,  Vegetable Rate in Nepal, Kalimati Vegetable, agriculture app nepal, nepali farmer app, cost of production agriculture nepal" />
        </head>
        <ResponsiveNav/>
  
        <iframe src="./htmlFiles/Hamropatroinfo.html" className="w-full h-screen"></iframe>
 
        </>
    )

}

export default Info;