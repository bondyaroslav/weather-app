// src/features/weather/weatherTypes.ts
export interface ForecastDay {
    date: string
    day: any
}

export interface WeatherForecast {
    forecastday: any
}

export interface Location {
    name: string
    region: string
    country: string
}

export interface Condition {
    text: string
    icon: string
    code: number
}

export interface CurrentWeather {
    temp_c: number
    condition: Condition
    location: Location
}
