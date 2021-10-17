import { useState } from "react";
import DayElement from "../dayElement/dayElement";

import "../../../styles/calendar.styles.scss";

const MonthElement = (props)=>{ 
    const [days,setDays] = useState([]);
    const __handleArrayDays = (year,month)=>{
        console.log(props.year);
        console.log(props.month);
        console.log(year);
        console.log(month);
        let monthDays = new Date(year,month,0).getDate();
        let index = new Date(year,month-1,1).getDay();
        let result = [];
        for(let i = index; i > 0; i--){
            const day = {
                day:1,
                year:1900,
                month:1
            }
            result.push(day);
        }
        for(let i = 1; i <= monthDays; i++){
            const day = {
                day:i,
                year:year,
                month:month
            }
            result.push(day);
        }
        setDays(result);
    }
    

    return(
        <div className="daysContainer">
            {days.length > 0 ? days.map((itm,i)=><DayElement key={i} day={itm.day} month={itm.month} year={itm.year}/>) 
            : __handleArrayDays(props?.year,props?.month)}
        </div>
    )
}

export default MonthElement;