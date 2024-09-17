import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { fetchGetWeatherForecast, getWeather } from '../../features/weather/weatherSlice'
import { getUserLocation } from '../../features/location/locationSlice'
import { Box, MenuItem, Select, TextField, Button } from "@mui/material"
import Error from "../common/Error.tsx"
import Loading from "../common/Loading.tsx"
import Forecast from "./Forecast.tsx"
import TodayForecast from "./TodayForecast.tsx"

const WeatherCard: React.FC = () => {
    const [city, setCity] = useState('Kyiv')
    const [days, setDays] = useState(1)

    const { current, forecast, status} = useSelector((state: RootState) => state.weather)
    const locationStatus = useSelector((state: RootState) => state.location.status)

    const dispatch = useDispatch()
    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
    }

    const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDays(Number(event.target.value))
    }

    const handleSearch = () => {
        dispatch(getWeather(city))
        dispatch(fetchGetWeatherForecast({ location: city, days }))
    }

    useEffect(() => {
        dispatch(getUserLocation())
    }, [dispatch])

    useEffect(() => {
        if (locationStatus === 'idle') {
            handleSearch()
        }
    }, [locationStatus])

    return (
        <Box>
            <TextField
                label="Enter city"
                type="text"
                value={city}
                onChange={handleCityChange}
            />
            <Select value={days} onChange={handleDaysChange}>
                <MenuItem value={1}>1 Day</MenuItem>
                <MenuItem value={3}>3 Days</MenuItem>
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={14}>14 Days</MenuItem>
            </Select>
            <Button onClick={handleSearch}>Search</Button>
            {status === 'loading' && <Loading/>}
            {status === 'failed' && <Error message={'failed to load'}/>}
            <TodayForecast current={current}/>
            <Forecast forecast={forecast}/>
        </Box>
    )
}

export default WeatherCard