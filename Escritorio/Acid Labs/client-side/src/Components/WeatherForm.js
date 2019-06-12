import React, {useState} from 'react';

function WeatherForm({searchInput}){  

    const [option, setOption] = useState({
        city : ''
    })
    
    const handleChange = (e) => {
        setOption({
            ...option,
            [e.target.name] : e.target.value

        })
        searchInput(e.target.value);
    };

    const consultWeather = e => {
        e.preventDefault();
    }

    return(
        
        <form
            onSubmit={consultWeather}
        >
        <div className="input-field col s12 m6">
        <select onChange={handleChange} name="city">
            <option value="">Select a City</option>
            <option value="CL">Santiago</option>
            <option value="CH">Zurich</option>
            <option value="NZ">Auckland</option>
            <option value="AU">Sydney</option>
            <option value="UK">Londres</option>
            <option value="USA">Georgia</option>
        </select>
        </div>
    </form>
    )
}
export default WeatherForm