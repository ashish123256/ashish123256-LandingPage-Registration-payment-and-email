import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentuser: null,
    error:null,
    loading:false
};


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        registerInStart:(state)=>{
            state.loading = true
        },
        registerInSuccess : (state, action)=>{
            state.currentuser= action.payload;
            state.loading = false;
            state.error = null;
        },
        registerInFailure:(state, action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
})


export const {registerInStart,registerInSuccess,registerInFailure} =userSlice.actions;

export default userSlice.reducer;