import React from 'react';
import '../WeatherIcons.css';
import Sun from '../icons/svg/sun.svg';
import Moon from '../icons/svg/night.svg';
import Rain from '../icons/svg/rain.svg';
import Snow from '../icons/svg/snowflake.svg';
import Sleet from '../icons/svg/snow.svg';
import Wind from '../icons/svg/fog.svg';
import Fog from '../icons/svg/fog.svg';
import Cloudy from '../icons/svg/cloudy.svg';
import PartlyCloudyDay from '../icons/svg/cloudy-day.svg';
import PartlyCloudyNight from '../icons/svg/night-1.svg';



const WeatherIcons = ({response}) => {
    let iconImage = null;
    switch(response.icon){
        case('clear-day'):
            iconImage = Sun;
            break;
        case('clear-night'):
            iconImage = Moon;
            break;
        case('rain'):
            iconImage = Rain;
            break;
        case('snow'):
            iconImage = Snow;
            break;
        case('sleet'):
            iconImage = Sleet;
            break;
        case('wind'):
            iconImage = Wind;
            break;
        case('fog'):
            iconImage = Fog;
            break;
        case('cloudy'):
            iconImage = Cloudy;
            break;
        case('partly-cloudy-day'):
            iconImage = PartlyCloudyDay;
            break;
        case('partly-cloudy-night'):
            iconImage = PartlyCloudyNight;
            break;
        default: 
            iconImage = null;
            break;
    }

    return (
        <div className="weatherIcons">
            {iconImage !== null ? <img src={iconImage} alt={response.WeatherIcons} /> : null}
            <p>{response.WeatherIcons}</p>
        </div>
    );
};

export default WeatherIcons;
