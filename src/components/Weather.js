import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
            
                <p>The Current Weather Conditions is</p>

                
                {this.props.city}
                {this.props.country}
                {this.props.humidity}
                {this.props.temperature}
                {this.props.description}
            </div>
        )
    }
}
export default Weather;