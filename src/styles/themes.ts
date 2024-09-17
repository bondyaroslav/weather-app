import { DefaultTheme } from 'styled-components'

export interface ThemeState {
    background: string
    text: string
    primary: string
    secondary: string
    border: string
}

export const lightTheme: DefaultTheme & ThemeState = {
    background: '#fff',
    text: '#000',
    primary: '#007bff',
    secondary: '#6c757d',
    border: '#ddd',
}

export const darkTheme: DefaultTheme & ThemeState = {
    background: '#121212',
    text: '#e0e0e0',
    primary: '#bb86fc',
    secondary: '#03dac6',
    border: '#333',
}
