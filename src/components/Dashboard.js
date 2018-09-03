import React from 'react';
import { Header } from './Header';
import Form, { NewForm } from './Form';
import Weather from './Weather';

const API_KEY = '6a30815cea2939e3d36096df96475818';
// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric
class DashboardPage extends React.Component {
	state = {
		temperature: '',
		city: '',
		country: '',
		humidity: '',
		description: '',
		error: '',
		icon: '',
		temp_min: '',
		temp_max: ''
	}

	selectCountry = (val) => {
		console.log(val);
		this.setState({ country: val, temperature: ''});
	}

	selectRegion = (val) => {
		this.setState({ city: val, temperature:'' });
	}

	// handleClearState = () => {
	// 	this.setState({
	// 		temperature: '',
	// 		city: '',
	// 		country: '',
	// 		humidity: '',
	// 		description: '',
	// 		error: '',
	// 		icon: ''
	// 	});
	// }

	getWeather = async (e) => {
		e.preventDefault();
		console.log(e.target.elements);
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if(city && country && data.cod != "404"){
			console.log(data);
			this.setState({
				temperature: data.main.temp,
				humidity: data.main.humidity,
				city: city,
        		country: country,
				description:  data.weather[0].description,
				icon: data.weather[0].icon,
				temp_min: data.main.temp_min,
				temp_max: data.main.temp_max,
				error: ''
			});
		}else {
			this.setState({
				error: data.cod
			});
		}
	}
	render(){
		return (
			<div className="main-page">
				<div className="main-page__content">
					<div className="content-container">
					<Header />
					<div className="form-container">
						<p>Select the Region from the dropdown to get the weather report</p>
						<Form 
							getWeather={this.getWeather}
							selectCountry={this.selectCountry}
							selectRegion={this.selectRegion}
							country={this.state.country}
							city={this.state.city}
							error= {this.state.error}							
						/>
					</div>
					<div className="form-container">
						<p>(or) Type in your city and country details below</p>
						<NewForm 
							getWeather={this.getWeather}
						/>
					</div>
					<div>
						<Weather 
							temperature = {this.state.temperature}
							city = {this.state.city}
							country = {this.state.country}
							humidity = {this.state.humidity}
							description = {this.state.description}
							error = {this.state.error}
							icon = {this.state.icon}
							temp_min = {this.state.temp_min}
							temp_max = {this.state.temp_max}
							// handleClearState = {this.handleClearState}
						/>
					</div>
					</div>
				</div>
			</div>
		);
	}	
}


export default DashboardPage;