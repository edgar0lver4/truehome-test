import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../config/config";
import { Swiper,SwiperSlide } from "swiper/react";
import HeaderElement from "../../elements/header/header";
import LoaderComponent from "../../elements/loader/loader";

import 'swiper/swiper.scss';
import VerticalCard from "../../elements/vertical-card/vertical-card";
import "../../styles/destinationPage.styles.scss";

const __handleDestinationComponent = (destinations)=>{
    return(
        <div>
            <HeaderElement 
                title="Los mejores destinos de México" 
                src="https://ep01.epimg.net/verne/imagenes/2018/03/28/mexico/1522266318_170272_1522289076_noticia_normal.jpg"/>
            <div className="cities-container">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                        slidesPerView: 3,
                        },
                    }}>
                    {destinations.map((itm,i)=><SwiperSlide style={{display:'flex', justifyContent:"center", alignItems:"center"}} key={i}>
                                                    <VerticalCard key={i} contry={itm.country} city={itm.city} img={itm.img} />
                                                </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

const DestinationsPage = ()=>{

    const [destinations,setDestinations] = useState([]);
    let sesionStore = useSelector((store)=>store.sesionReducer);
    useEffect(()=>{
        document.title = 'Volandoando | Nuestros destinos';
        async function getCities(){
            let url = `${API_URL}/cities/list/${sesionStore.token}`;
            try{
                let consult = await fetch(url);
                let result = await consult.json();
                console.log(result);
                setDestinations(result.data);
            }catch(e){
                console.error(e);
            }
        }
        getCities();
    },[sesionStore.token]);

    return(
        <div>
            {destinations.length > 0 ? __handleDestinationComponent(destinations) : <LoaderComponent message="Cargando destinos..."/>}
        </div>
    )
}

export default DestinationsPage;