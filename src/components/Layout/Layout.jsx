function Layout({children}){
    return(
        <>
         <div className=" w-screen  bg-white p-3 mb-1">
            <h1 className=' font-bold flex'>Welcome to PK agro Calendar</h1>
        </div>
        
            <div className="bg-green-100 py-3">
                {children}
            </div>
        
        <div className=" w-screen bg-black p-3">
            <h1 className=' font-bold flex text-white'>PK agro Calendar</h1>
        </div>
        </>
    )

}

export default Layout;