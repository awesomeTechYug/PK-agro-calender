function TodayPricewidget() {
    return (
      <>
        <div className="h-[75vh] w-[360px] overflow-scroll flex justify-center ">
        <iframe className=" "
          src="https://nepalicalendar.rat32.com/vegetable/embed.php"
          frameborder="0"
          scrolling="no"
          marginwidth="0"
          marginheight="0"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100% ",
            height: "3000px",
            borderRadius: "5px",
            padding: "3px",
            margin: "0px",
          }}
          allowtransparency="true"
        >
        </iframe>
        </div>
     
      </>
    );
  }
  
  export default TodayPricewidget;
  