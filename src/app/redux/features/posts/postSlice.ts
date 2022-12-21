import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/redux/store';
import { Posts } from 'model/Posts';

export const initialState: Posts[]  = [
                                {
                                    id: "",
                                    number: "",
                                    title: "",
                                    text: ""
                                }
                            ];
                        

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state, action) => {
            return action.payload;
        },
        listPost: (state, action) => {
            return state;
        },
        deletePost: (state, action) => {
            const post = state.find(item => item.id === action.payload);
            if(post){
                return state.filter(item => item.id !== action.payload);
            }
           return state;
        },
    }
});

export const { createPost, listPost, deletePost } = postSlice.actions

export const getPosts = (state: RootState) => state.posts;

export default postSlice.reducer;