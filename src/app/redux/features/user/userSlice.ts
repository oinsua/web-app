import { createSlice } from "@reduxjs/toolkit";
import { User } from 'model/User'
import { RootState } from "app/redux/store";

export const initialState: User = {
    name: '',
    permission: [],
    rol: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            const { payload } = action;
            return {...state, ...payload};
        },
        updateUser: (state, action) => {
            console.log('update user:', action)
        },
        deleteUser: (state, action) => {
            console.log('delete user:', action)
        },
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export const getUser = (state: RootState) => state.users

export default userSlice.reducer;