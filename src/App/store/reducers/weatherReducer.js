import { Types } from './../actions/weather.Actions'

const initState = {
    country: null,
    icon: null,
    mainWeatherStatus: null,
    temp: null,
    temp_min: null,
    temp_max: null,
    description: '',
    isLoading: false,
    error: null
};
const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.FIND_WEATHER_BY_CITY_START:
            return {
                ...state,
                isLoading: true,
            }
        case Types.FIND_WEATHER_BY_CITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                country: action.payload.country,
                icon: action.payload.icon,
                mainWeatherStatus: action.payload.mainWeatherStatus,
                temp: action.payload.temp,
                temp_min: action.payload.temp_min,
                temp_max: action.payload.temp_max,
                description: action.payload.description
            }

        case Types.FIND_WEATHER_BY_CITY_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
        // default implementation
    }
    return state;
};
export default weatherReducer