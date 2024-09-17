import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
    current: 'light' | 'dark'
}

const initialState: ThemeState = {
    current: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.current = state.current === 'light' ? 'dark' : 'light'
        },
    },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
