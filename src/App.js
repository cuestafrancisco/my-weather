import React from "react"; // tells the file to import the react object from the package.json

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "ddaf04454f352d23f54d78cb92a7ea9a";


//initiates component App
//an instance of App which extends React.Component
class App extends React.Component {
  getWeather = async(e) =>{
    e.preventDefault();
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=new-york,usa&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();

  }
  
  //render method display (returns) the data
  //return in self closing html tag  <Form/>  <Weather/>  <Titles/>
             
  render() {
    return (
            //parent element div
            <div>
              <Form/>
              <Weather/>
              <Titles/>
            </div>
        
       
     
    );
  }
};

export default App;