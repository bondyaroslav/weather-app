import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from './redux/rootReducer'
import WeatherCard from './components/weather/WeatherCard'
import ThemeSwitcher from './components/weather/ThemeSwitcher'
import {GlobalStyles, Paper, styled, ThemeProvider} from "@mui/material"
import {darkMuiTheme, lightMuiTheme} from "./styles/globalStyles.ts"
import {darkTheme, lightTheme} from "./styles/themes.ts"

const WeatherComponent = styled(Paper)({
    width: 700,
    margin: 'auto',
    padding: 20
})

const App: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.current)
    const muiTheme = theme === 'light' ? lightMuiTheme : darkMuiTheme
    const styledTheme = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={muiTheme}>
            <GlobalStyles theme={styledTheme} />
            <WeatherComponent>
                <ThemeSwitcher />
                <WeatherCard />
            </WeatherComponent>
        </ThemeProvider>
    )
}

export default App
