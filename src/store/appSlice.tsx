import { createSlice } from '@reduxjs/toolkit';
import { Color } from '../ColorWheel';

interface AppState {
    selectedColor: Color;
}

const initialState: AppState = {
    selectedColor: {
        id: 1,
        name: 'Amazonite',
        hex: '#9c4037',
        sec: '#ff7c35',
        locked: false
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedColor(state, action) {
            state.selectedColor = action.payload;
        },
    },
});

export const { setSelectedColor } = appSlice.actions;

export default appSlice.reducer;
