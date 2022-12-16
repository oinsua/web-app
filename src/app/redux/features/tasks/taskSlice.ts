import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/redux/store';
import { Tasks } from 'model/Task';

export const initialState: Tasks[]  = [
                                {
                                    id: "",
                                    name: "",
                                    status: "TODO",
                                    time: 0
                                }
                            ];
                        

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            return [...state, action.payload];
        },
        listTask: (state, action) => {
            return action.payload;
        },
        deleteTask: (state, action) => {
            const task = state.find(item => item.id === action.payload);
            if(task){
                return state.filter(item => item.id !== action.payload);
            }
           return state;
        },
    }
});

export const { createTask, listTask, deleteTask } = taskSlice.actions

export const getTask = (state: RootState) => state.tasks;

export default taskSlice.reducer;