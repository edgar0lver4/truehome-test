export const ANIMATION_MAPS_ENTER = "window.google.maps.Animation.DROP";
export const ANIMATION_MAPS_TO_TRAVEL = "window.google.Animation.BOUNCE";
export const API_URL = 'http://localhost:1000/api';

export const animate = (val)=>{
    switch(val){
        case "window.google.maps.Animation.DROP":
            return window.google.maps.Animation.DROP;
        case "window.google.Animation.BOUNCE":
            return window.google.Animation.BOUNCE;
        default:
            return window.google.Animation.BOUNCE;
    }
}
