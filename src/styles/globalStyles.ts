import { createTheme } from '@mui/material/styles'

export const lightMuiTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#000',
            secondary: '#6c757d',
        },
        primary: {
            main: '#007bff',
        },
        secondary: {
            main: '#6c757d',
        },
        border: {
            default: '#ddd',
        },
    },
})

export const darkMuiTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#bb86fc',
        },
        primary: {
            main: '#bb86fc',
        },
        secondary: {
            main: '#03dac6',
        },
        border: {
            default: '#333',
        },
    },
})
