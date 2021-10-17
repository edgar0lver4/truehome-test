import CalendarComponent from "../../elements/header-calendar-component";
import HeaderElement from "../../elements/header/header";

const IndexPage = ()=>{
    document.title = 'Volandoando | Vuelos económicos y de clase mundial';
    return(
        <div>
            <div>
                <HeaderElement 
                    title="Vuela con nosotros y preocupate solo por disfrutar..." 
                    src='https://s1.eestatic.com/2019/07/29/como/aviones-como_hacer_417469342_131208769_1024x576.jpg'/>
            </div>
            <CalendarComponent/>
        </div>
    )
}

export default IndexPage;