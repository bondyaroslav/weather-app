import axios from 'axios'

const API_KEY = 'e38b1bfcf820446f96e143353241609'
const BASE_URL = 'https://api.weatherapi.com/v1'

export const getCurrentWeather = (location: string = 'Kyiv') => {
    return axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`)
}

export const getWeatherForecast = (location: string = 'Kyiv', days: number = 1) => {
    return axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`)
}