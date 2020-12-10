import React from "react"; // tells the file to import the react object from the package.json

import Titles from "./components/Titles";
import Form from "./components/Form"
//import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "ddaf04454f352d23f54d78cb92a7ea9a";


//initiates component App
//an instance of App which extends React.Component
class App extends React.Component { //initialize state which is an object containing key value pairs
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }
  getWeather = async(e) =>{
    e.preventDefault(); //prevents default behavior of component
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}usa&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    
    if (city && country){ //if city and contry value are true than data will return
                          //else false  will return error for undefined values
      console.log(data);
      this.setState({
        temperature: data.main.temp, 
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });

    }else{ //else false  will return error for undefined values
      this.setState({
      temperature: undefined, 
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "please enter the city and country"

      });

  }
  }
  
  //render method display (returns) the data
  //return in self closing html tag  <Form/>  <Weather/>  <Titles/>
             
  render() {
    return (
            //parent element div
            <div>
            <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                      <Titles />
                    </div>
                    
                    <div className="col-xs-7 form-container">
                      <Form getWeather={this.getWeather} />
                      <Weather 
                        temperature={this.state.temperature} 
                        humidity={this.state.humidity}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        error={this.state.error}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
    );
  }
};

export default App;