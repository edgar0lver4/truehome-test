import { DAYS_SM } from "../../../scripts/dateFunctions"

const DaysSnippet = ()=>{
    return(
        <div className="days-snippet">{DAYS_SM.map(itm=><div className="item">{itm}</div>)}</div>
    )
}

export default DaysSnippet;