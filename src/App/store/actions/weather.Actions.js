import axios from 'axios'

export const Types = {
    FIND_WEATHER_BY_CITY_START: "FIND_WEATHER_BY_CITY_START",
    FIND_WEATHER_BY_CITY_SUCCESS: "FIND_WEATHER_BY_CITY_SUCCESS",
    FIND_WEATHER_BY_CITY_ERROR: "FIND_WEATHER_BY_CITY_ERROR"
}

const getWeatherData = (city) => {
    return (dispatch) => {
        dispatch({
            type: Types.FIND_WEATHER_BY_CITY_START,
            payload: {},
        })
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c650a9d2d81be019c36e1a3a05d25d90').then(response => {
        console.log(response.data)    
        dispatch({
                type: Types.FIND_WEATHER_BY_CITY_SUCCESS,
                payload: {
                    country: response.data.sys.country,
                    icon: response.data.weather[0].icon,
                    mainWeatherStatus: response.data.weather[0].main,
                    temp: response.data.main.temp_min,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    description: response.data.weather[0].description
                },
            })
        }).catch(error => {
            dispatch({
                type: Types.FIND_WEATHER_BY_CITY_ERROR,
                payload: error,
            })
        })
    }
};


const weatherActions = {
    getWeatherData
}
export { weatherActions }