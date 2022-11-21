import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Tasks } from '../../model/Task';



export const initialState: Tasks = {
    id: '',
    name: '',
    status: 'TODO',
    time: 0
};

export const dataSlice = createSlice({
    name: "dataForm",
    initialState,
    reducers: {
        updateData: (state, action) => {
            console.log('action: ', action)
            return action.payload;
        },
        deleteData: (state, action) => {
            return initialState;
        }
    },
});

export const { updateData, deleteData } = dataSlice.actions;

export const getDataForm = (state: RootState) => state.dataForm;

export default dataSlice.reducer;