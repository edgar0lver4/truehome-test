export const getDatesDifference=(date1,date2)=>{
    let init = new Date(date1);
    let finish = new Date(date2);
    let difference = Math.abs(finish-init);
    let days = difference/(1000 * 3600 * 24);
    return days;
}

export const createDates = (date,days)=>{
    let result = [];
    for(let i = 1; i < days; i++){
        result.push(sumDays(date,i));
    }
    return result;
}

export const sumDays = (date,days)=>{
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate()+days);
    let newDateString = `${newDate.getFullYear()}/${newDate.getMonth()+1}/${newDate.getDate()}`;
    let result = {
        str:newDateString,
        day:newDate.getDate(),
        month:newDate.getMonth()+1,
        year:newDate.getFullYear()
    }
    return result;
}

export const MONTHS = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
export const DAYS_MID= ["DOM","LUN","MAR","MIE","JUE","VIE","SAB"];
export const DAYS_SM = ["D","L","M","M","J","V","S"]; 