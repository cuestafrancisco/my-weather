import React from "react"; // tells the file to import the react object from the package.json

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";





//initiates component App
//an instance of App which extends React.Component
class App extends React.Component {
  
  //render method display (returns) the data
  //
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