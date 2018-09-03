import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default (props) => {
    console.log(props);
    return (
        
            <form 
                onSubmit={props.getWeather}
                className="wrapper-form"
            >
                <CountryDropdown
                        name="country"
                        value={props.country}
                        onChange={(val) => props.selectCountry(val)} 
                        classes="form-content"
                />
                    
                <RegionDropdown
                    country={props.country}
                    name="city"
                    value={props.city}
                    onChange={(val) => props.selectRegion(val)}
                    classes="form-content" 
                />
                <button className="button">Get Weather</button>
            </form>

            
        
    );
}

export  const NewForm = (props) => (
    <form 
        onSubmit={props.getWeather}
        className="wrapper-form"
    >
        <input 
            type="text" 
            name="country" 
            placeholder="Country..."
            className="form-content"
        />
        <input 
            type="text" 
            name="city" 
            placeholder="City..."
            className="form-content"
        />
		<button className="button">Get Weather</button>
	</form>
);
