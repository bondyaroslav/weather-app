import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentWeather, getWeatherForecast } from '../../api/weatherAPI'
import { CurrentWeather, WeatherForecast } from './weatherTypes'

interface WeatherState {
    current: CurrentWeather | null
    forecast: WeatherForecast[] | null
    status: 'idle' | 'loading' | 'failed'
    error: string | null
}

const initialState: WeatherState = {
    current: null,
    forecast: null,
    status: 'idle',
    error: null,
}

export const getWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location: string, { rejectWithValue }) => {
        try {
            const response = await getCurrentWeather(location)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch current weather')
        }
    }
)

export const fetchGetWeatherForecast = createAsyncThunk(
    'weather/fetchForecast',
    async ({ location, days }: { location: string, days: number }, { rejectWithValue }) => {
        try {
            const response = await getWeatherForecast(location, days)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch weather forecast')
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = 'idle'
                state.current = action.payload
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
            .addCase(fetchGetWeatherForecast.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchGetWeatherForecast.fulfilled, (state, action) => {
                state.status = 'idle'
                state.forecast = action.payload
            })
            .addCase(fetchGetWeatherForecast.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
    },
})

export default weatherSlice.reducer
