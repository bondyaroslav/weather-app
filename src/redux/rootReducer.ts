import { combineReducers } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import locationReducer from '../features/location/locationSlice'
import themeReducer from '../features/theme/themeSlice'

const rootReducer = combineReducers({
    weather: weatherReducer,
    location: locationReducer,
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer