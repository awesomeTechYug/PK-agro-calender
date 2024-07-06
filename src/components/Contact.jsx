import Layout from "./Layout/Layout";
import TodayDateWheather from "./TodayDate&Wheather";
import UpcomingTasks from "./UpomingTasks";

function Contact(){
    return(
        <>
        <Layout>
        <h1 className="h-[80vh] flex justify-center items-center text-2xl ">
            Please Contact our team to get the pro service, +977 9767991231    
            </h1>
            <UpcomingTasks/>
            <TodayDateWheather/>
        </Layout>
        </>
    )

}

export default Contact;