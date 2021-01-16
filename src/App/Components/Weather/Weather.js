import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { weatherActions } from './../../store/actions/weather.Actions'

function Weather({
    weatherData,
    Actions
}) {

    const [city, setCity] = useState('')

    const handleChange = e => {
        setCity(e.target.value)
    }

    useEffect(() => {
        console.log(weatherData)
    }, [])

    const handleWeatherSearch = async (e, city) => {
        e.preventDefault();

        if (city === "") {
            alert("Please enter a city")
        } else {
            try {
                await Actions.getWeatherData(city)
            } catch (e) {

            }
        }


    }


    const getKiFromCi = temInFa => {
        return temInFa - 273.15;
    }


    if (weatherData.isLoading) {
        return <div className="loading">
            <p>Fetching weather data ...</p>
        </div>
    }

    if (weatherData.error) {
        return <div className="error">
            <p>Whoops something went wrong ...</p>
            <p>Wanna try again !! </p>
            <a href='/'>Click here</a>
        </div>
    }

    return (
        <div className="container">
            <div className="search">
                <p className="title">Just Type City's Name</p>
                <p className="subtitle">You must spell correctly</p>
                <div className="form">
                    <div className='input'>
                        <input placeholder="Please enter city name " onChange={handleChange} />
                    </div>


                    <div className='button'>
                        <a href="#" onClick={(e) => handleWeatherSearch(e, city)}>
                            Find
                </a>
                    </div>
                </div>

            </div>
            <div className="result">
                {weatherData?.country && <div className="country">
                    <p>{weatherData.country}</p>
                </div>}
                {weatherData?.icon && <div className="icon">
                    <img src={'http://openweathermap.org/img/wn/' + weatherData.icon + '@2x.png'} width="50px" height="50px" alt="" />
                </div>}
                {weatherData?.mainWeatherStatus && <div className="mainWeatherStatus">
                    <p>{weatherData.mainWeatherStatus}</p>
                </div>}
                {weatherData.temp && <div className="temp">
                    <p>{getKiFromCi(weatherData.temp)} °</p>
                </div>}
                {weatherData?.temp_min && weatherData?.temp_max && <div className="temp-min-max">
                    <p>
                        <span>{getKiFromCi(weatherData.temp_min)} ° </span>
                        <span> - </span>
                        <span> {getKiFromCi(weatherData.temp_max)} °</span>
                    </p>
                </div>}
                {weatherData?.description && <div className="desc">
                    <p>{weatherData.description}</p>
                </div>}
            </div>
        </div>
    );
}



const mapStateToProps = ({ Weather }) => ({
    weatherData: Weather
})

const mapDispatchToProps = dispatch => {
    const Actions = {
        ...bindActionCreators(weatherActions, dispatch)
    }
    return {
        Actions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather)