import React, { Component } from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
      'API_KEY': ''
    }
  }

  componentsWillMount() {
    this.setState({ 'API_KEY': API_KEY });
  }



  render() {
    return (
      <div className="row">
       <div className="col-md-4">
         <WeatherTitle />
       </div>
       <div className="col-md-8">
       <WeatherForm />
       <WeatherInfo />
       </div>
     </div>
    );
  }
}

export default Weather;
