import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function PKCalendar() {
    const [value, onChange] = useState(new Date());
    return (
      <>
       <div>
        <Calendar onChange={onChange} value={value} />
       </div>
      </>
    )
};


function ADtoBS(){
    const [nepaliDate, setNepaliDate] = useState("Jesth 2081");
const [englishDate, setEnglishDate] = useState("June 2024");

    return(
        <>
        <div className=' my-1 p-3 '>
            <p>
                {nepaliDate} | {englishDate}
            </p>
        </div>
        
        </>
    )
}
export {ADtoBS};
export default PKCalendar;
