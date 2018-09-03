import React from 'react';


export default (props) => {
    //console.log(props.error);
    return (
           <div className="weather-wrapper">
               {props.temperature && props.error != "404" ? 
               <div>
                   <div className="weather-item">
                        {props.city && props.country && <p><span>Location:</span> {props.city}, {props.country}</p>}
                   </div>
                   <div className="weather-item">
                        {props.temperature && <p className="weather-item__temp"><span>Temperature:</span> <span className="weather-item__box">{props.temperature}&#8451;</span><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather image"></img><span className="weather-item__minmax">{props.temp_min}&#8451;|{props.temp_max}&#8451;</span></p>}
                   </div>
                   <div className="weather-item">
                        {props.humidity && <p><span>Humidity:</span> {props.humidity}</p>}
                   </div>
                    <div className="weather-item">
                        {props.description && <p><span>Description:</span> {props.description}</p>}
                    </div>
                    <div className="weather-item">
                        {props.error && <p>{props.error}</p>}
                    </div> 
               </div> :
               <div className="error-message">
                    {props.error && <p>Unable to get the weather details for the selected region</p>}
                </div>}
            </div>
    );
}