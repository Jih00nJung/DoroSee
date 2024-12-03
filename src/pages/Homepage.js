import {useEffect} from "react";
import './Homepage.css';

const { kakao } = window;

const Homepage = () => {
    window.alert("homepage");

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.713739, 126.889173),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])


    return (
        <homepage className="homepage">
            <div className="search">
                <img src="images/reading_glasses.png" className="img_reading_glasses"/>&nbsp;&nbsp;
                <textarea className="search_text" rows="1" cols="30" spellCheck="False"/>
            </div>
            <div id="map" className="main_map"/>
        </homepage>
    );
};

export default Homepage;
