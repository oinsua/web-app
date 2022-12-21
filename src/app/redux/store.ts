import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from 'app/redux/features/counter/counterSlice';
import taskReducer from 'app/redux/features/tasks/taskSlice';
import dataFormReducer from 'app/redux/features/dataForm/dataSlice';
import userReducer from 'app/redux/features/user/userSlice';
import postSlice from './features/posts/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    dataForm: dataFormReducer,
    users: userReducer,
    posts: postSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
