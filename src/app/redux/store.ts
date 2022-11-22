import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import taskReducer from '../../features/tasks/taskSlice';
import dataFormReducer from '../../features/dataForm/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    dataForm: dataFormReducer
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
