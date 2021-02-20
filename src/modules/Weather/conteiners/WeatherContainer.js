import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCity, updateWather} from '../action';

class WeatherContainer extends Component {
    
  componentWillMount() {
    const {updateWather, addCity} = this.props;
    if(localStorage.getItem('City')) addCity(localStorage.getItem('City'))
    updateWather();
  }

  heandlerSearch = (e) => {
    e.preventDefault();
    const {updateWather, addCity} = this.props;
    updateWather();
    addCity('')
  }

  render(){
    let {Weath, addCity, City} = this.props;
    return(
      <div className='main-container'>
        <form onSubmit={this.heandlerSearch} className='search'>
          <input type='text' className='search__input' 
            value={City} onChange={(e)=>addCity(e.target.value)}
            placeholder='Search...' 
          />
          <button className='search__button'>Get Weather</button>
        </form>
        {Weath.main && (
          <div className='city'>
            <h2 className='city__name'>
              <span>{Weath.name}</span>
            </h2>
            <div className='city__temp'>
              {Math.round(Weath.main.temp)}
              <sub>&deg;C</sub>
            </div>
            <div className='city__humidity'>
              <span>Humidity: {Weath.main.humidity}</span>
              <sub>%</sub>
            </div>
            <div className='info'>
              <img className='city-icon' src={`http://openweathermap.org/img/wn/${Weath.weather[0].icon}@2x.png`} alt={Weath.weather[0].description}/>
              <p>{Weath.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    )
  } 
}

const mapStateToProps = ({Weather}) => ({
  City: Weather.city,
  Weath: Weather.weather
})

const mapDispatchToProps = {
  addCity,
  updateWather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);