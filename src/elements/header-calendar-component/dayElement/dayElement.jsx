import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { resetFinishDate, resetInitialDate, setFinishDate, setInitalDate } from "../../../redux/actions/date-actions";
import { createDates, getDatesDifference } from "../../../scripts/dateFunctions";

import "../../../styles/calendar.styles.scss";

const DayElement = (props)=>{
    const [isSelective,setIsSelective] = useState(true);
    const [selected,setSelected] = useState(false);
    const [isNulled,setIsNulled] = useState(false);


    const dispatch = useDispatch();
    const dateStore= useSelector(store=>store.dateReducer);

    const selectedItem = ()=>{
        let date=`${props.year}/${props.month}/${props.day}`;
        return dateStore?.dateInit?.str === date || dateStore?.dateFinish?.str === date; 
    }
    //Click control
    const __handleClic = ()=>{
        let dateString=`${props.year}/${props.month}/${props.day}`;
        let date = {
            str: dateString,
            day:props.day,
            month: props.month,
            year: props.year
        };
        if(dateStore.dateInit === null){
            dispatch(setInitalDate(date));
        }else if(dateStore.dateInit.str === dateString){
            dispatch(resetInitialDate());
        }else if(dateStore.dateInit !== null){

            let days = getDatesDifference(dateStore.dateInit.str,dateString);
            let result= createDates(dateStore.dateInit.str,days);
            console.log(result);
            console.log(date);
            dispatch(setFinishDate(date,result));

        }else if(dateStore.dateFinish.str === dateString){
            dispatch(resetFinishDate());
        }
        setSelected(!selected)
    }

    useEffect(()=>{
        //Control nulled days
        function isNulledDay(){
            let filter = dateStore.daysNulled.find((itm)=>itm.year === props.year && 
                                                        itm.month === props.month && 
                                                        itm.day === props.day);
            if(filter !== undefined){
                setIsNulled(true);
            }else{
                setIsNulled(false);
            }
        }
        function setSelective(){
            let dateInit = dateStore?.dateInit;
            let actualYear = parseInt(new Date().getFullYear());
            let actualMonth= parseInt(new Date().getMonth()+1);
            let actualDay = parseInt(new Date().getDate());
            if(actualYear === props.year && actualMonth === props.month && actualDay > props.day){
                setIsSelective(false);
            }else if(dateInit !== null){
                if(props.year <= dateInit.year && props.month < dateInit.month){
                    setIsSelective(false); 
                }else if(props.year <= dateInit.year && props.month <= dateInit.month && props.day < dateInit.day){
                    setIsSelective(false); 
                }
            }else{
                setIsSelective(true);
            }
        }
        setSelective();
        isNulledDay();
    },[dateStore.daysNulled,dateStore?.dateInit,props.day,props.month,props.year]);

    return(
        <div className={isSelective ? `calendarOption active ${selectedItem() ? 'selected' : null} ${isNulled ? 'isNUlled' : false}` : `calendarOption disabled`} onClick={__handleClic}>
            { props.year === 1900 ? <span></span> : <span className="day">{props.day}</span>}
        </div>
    )
}

export default DayElement;