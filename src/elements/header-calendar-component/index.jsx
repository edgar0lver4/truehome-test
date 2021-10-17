import { useEffect, useState } from "react";
import { MONTHS } from "../../scripts/dateFunctions";
import MonthElement from "./monthElement/monthElement";

import "../../styles/calendar.styles.scss";
import DaysSnippet from "./days-snippet/days-snippet";

const CalendarComponent = ()=>{

    const [primaryMonth,setPrimaryMonth] = useState(0);
    const [secondMonth,setSecondMonth] = useState(0);
    const [primaryYear,setPrimaryYear] = useState(0);
    const [secondYear,setSecondYear] = useState(0);

    useEffect(()=>{
        let actualDate = new Date();
        let month = actualDate.getMonth()+1;
        let monthSecond = month + 1 < 12 ? month + 1 : 0 ;
        let year = actualDate.getFullYear();
        let secondYear = month > monthSecond ? year + 1 : year;
        setPrimaryMonth(month);
        setSecondMonth(monthSecond);
        setPrimaryYear(year);
        setSecondYear(secondYear);
    },[])

    return(
        <div className="calendar">
            <div className="calendar-title">
                Seleccione las fechas de llegada y salida
            </div>
            <div className="container">
                <div className="calendar-months">
                    {MONTHS[primaryMonth-1]}
                </div>
                <div className="calendar-months onlyDesktop">
                    {MONTHS[secondMonth-1]}
                </div>
            </div>
            <div className="d-flex row">
                <DaysSnippet/>
                <div className="onlyDesktop"><DaysSnippet/></div>
            </div>
            <div className="calendar-container rows">
                <div className="calendar-viwer">{primaryYear > 0 ? <MonthElement year={primaryYear} month={primaryMonth}/>:'Cargando..'}</div>
                <div className="calendar-viwer onlyDesktop">{secondYear > 0 ? <MonthElement year={secondYear} month={secondMonth}/>:'Cargando..'}</div>
            </div>
        </div>
    )
}

export default CalendarComponent;