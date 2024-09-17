import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../features/theme/themeSlice'
import { RootState } from '../../redux/rootReducer'
import {Button} from "@mui/material"

const ThemeSwitcher: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.current)

    return (
        <Button onClick={() => dispatch(toggleTheme())}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </Button>
    )
}

export default ThemeSwitcher
