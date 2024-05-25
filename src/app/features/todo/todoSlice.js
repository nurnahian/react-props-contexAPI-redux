import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password:'',
};

const todos = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    },
});


export const { setValue } = todos.actions;

export default todos.reducer;