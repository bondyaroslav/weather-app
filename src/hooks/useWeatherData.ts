import {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getWeather, fetchGetWeatherForecast } from '../features/weather/weatherSlice'
import { RootState } from '../redux/rootReducer'
import { AppDispatch } from '../redux/store' // Adjust the path as necessary

export const useWeatherData = (location: string, days: number) => {
    const dispatch: AppDispatch = useDispatch()
    const weather = useSelector((state: RootState) => state.weather)

    const fetchWeatherData = useCallback(() => {
        dispatch(getWeather(location))
        dispatch(fetchGetWeatherForecast({ location, days }))
    }, [dispatch, location, days])

    useEffect(() => {
        fetchWeatherData()
    }, [fetchWeatherData])

    return weather
}
