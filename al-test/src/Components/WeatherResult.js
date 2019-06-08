import React from 'react';

function WeatherResult({result}){

    console.log(result);

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather Result:</h2>
            </div>
        </div>
    )
}

export default WeatherResult;