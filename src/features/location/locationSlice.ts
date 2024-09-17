import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getUserLocation as getUserLocationService } from '../../services/locationService'

interface LocationState {
    city: string | null
    status: 'idle' | 'loading' | 'failed'
    error: string | null
}

const initialState: LocationState = {
    city: null,
    status: 'idle',
    error: null,
}

export const getUserLocation = createAsyncThunk(
    'location/getUserLocation',
    async (_, { rejectWithValue }) => {
        try {
            const location = await getUserLocationService()
            return location
        } catch (error: any) {
            return rejectWithValue(error)
        }
    }
)

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserLocation.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getUserLocation.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = 'idle'
                state.city = action.payload
            })
            .addCase(getUserLocation.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
    },
})

export const { setLocation } = locationSlice.actions
export default locationSlice.reducer
