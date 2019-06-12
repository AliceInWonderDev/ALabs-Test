import React from "react";
import socketIOClient from "socket.io-client";
import Header from './Components/Header';
import WeatherForm from './Components/WeatherForm';
import Error from './Components/Error';
import Forecast from  './Components/Forecast';
import WeatherIcons from './Components/WeatherIcons';

let socket = "";
class App extends React.Component {
  constructor() {
    super();
      this.state = {
        response: false,
        endpoint: "http://127.0.0.1:3001",
        error : true
      };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    socket = socketIOClient(endpoint);
    socket.on("FromAPI" , data =>{
      console.log("data in APP JS"+ data )
      if( data !== ""){
        this.setState({ 
          response: data,
          error : false 
        })
      }else{
        this.setState({ 
          error : true
        })
      }      
    })
  }

  render() {
    const { response } = this.state;
    const { error } = this.state;
    let component;
    if(error){
      component = <Error 
                    message='The select is mandatory '
                  />
    }else{
      component = <Forecast
                    response = {response}
                  />
          
    }
    const searchInput = data =>{
      socket.emit('getData', data); 
        return false;
    }
    return (
      <div>
        <Header
          title= 'The Weather in your city' 
        />
        <WeatherIcons
            response = {response}
        />            
        <div className="container-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <WeatherForm
                  searchInput={searchInput}
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
}

export default App;