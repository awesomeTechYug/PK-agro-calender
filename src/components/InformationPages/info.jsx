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
        <p>hi</p>
        <iframe src=".\..\src\components\InformationPages\info.html" className="w-full h-screen"></iframe>
        <p>hello friends</p>
        </>
    )

}

export default Info;