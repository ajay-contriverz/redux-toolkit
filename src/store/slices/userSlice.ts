import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: <any> [],
    count: <any> 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction) => {
            state.value.push(action.payload);
            state.count = state.value.length;
        },
        removeUser: (state, action: PayloadAction) => {
            state.value.splice(action.payload, 1);
            state.count = state.value.length;
        },
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;