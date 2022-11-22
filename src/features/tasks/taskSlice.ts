import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/redux/store';
import { Tasks } from '../../model/Task';

const initialState: Tasks[]  = [
                                {
                                    id: "1",
                                    name: "Javascript",
                                    status: "TODO",
                                    time: 10
                                },
                                {
                                    id: "2",
                                    name: "Html",
                                    status: "TODO",
                                    time: 30
                                },
                                {
                                    id: "3",
                                    name: "Css",
                                    status: "TODO",
                                    time: 15
                                }
                            ];
                        

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            return [...state, action.payload];
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

export const { createTask, deleteTask } = taskSlice.actions

export const getTask = (state: RootState) => state.tasks;

export default taskSlice.reducer;