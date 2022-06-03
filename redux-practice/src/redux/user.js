import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name : '', age: '', email: ''};

let user = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login(state, action){
            state.value = action.payload
        },
        logout(state){
            state.value = initialStateValue
        },
    },
})
export let { login, logout } = user.actions

export default user.reducer;