import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from 'app/redux/features/counter/counterSlice';
import taskReducer from 'app/redux/features/tasks/taskSlice';
import dataFormReducer from 'app/redux/features/dataForm/dataSlice';
import userReducer from 'app/redux/features/user/userSlice';
import postSlice from './features/posts/postSlice';
import type { PreloadedState } from '@reduxjs/toolkit'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
  dataForm: dataFormReducer,
  users: userReducer,
  posts: postSlice
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

