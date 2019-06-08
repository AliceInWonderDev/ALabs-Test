import React, { useState, useEffect } from 'react'; //useEffect nos permite utilizar los mismos efectos que teníamos con el ciclo de vida de react
import './App.css';
import Header from './Components/Header';
import WeatherForm from './Components/WeatherForm'
import Error from './Components/Error';
import WeatherResult from './Components/WeatherResult';

//SOCKET.IO






function App() {

  //state ppal, con hooks para que sea más fácil de mantener
  //city: state y setCity: setState
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(()=>{
    if(city === "") return;
    
    //consultar API
    const getApi = async () => {
    const apiKey = "4d331f9020173bc7fba48201b55e036c";
    const apiZip = "8oskTU2RW57ocWURoNcmNftlrfIfDcBHYLGdy5KI3eIFSvMU7mzIt2Iit7RpJhYA"
    const url = `https://api.darksky.net/forecast/${apiKey}/${apiZip}`
    
    //fetch
    fetch(url, 
    {
      method: 'GET',  
      mode: 'no-cors',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'application/x-www-form-urlencoded' ,
      } 
    })
    .then(result =>{
      setResult(result)
    }).catch(function(error){
      console.log('Request failed', error)
    });
    console.log(result)
    console.log(error)
    console.log(JSON.stringify(city.latitude));


    // const response = await fetch(url);
    // const result = await response.json();
    
    // console.log(result);

    // setResult(result);
    // console.log(getApi())
    
  }
    getApi();
  }, [city,country]) //debe estar escuchando para ejecutarse -como si ponen un país para así consulte a la api-
  
  //seacrData valida los datos buscados por el cliente
  const searchData = data => {
    //validando campos
      if(data.city === '' || data.country === ''){
        //error
        setError(true)
        return;
      }
      //Ciudad y país existen agregarlos al state
      setCity(data.city);
      setCountry(data.country);
      setError(false);

  }

    //cargar un componente si cumple la condición
    let component;
    if(error){
      component = <Error 
                    message='Both inputs are mandatory '
                  />
    console.log(error);
    }else if(result.cod === '404'){
      component = <Error
                    message="Type a valid city"
                  />
    }else{
      component = <WeatherResult 
                    result={result}
                  />;
    }

  return (
    <div className="App">
      <Header
      title= 'The Weather in your city' 
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <WeatherForm 
              searchData={searchData}
              />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
