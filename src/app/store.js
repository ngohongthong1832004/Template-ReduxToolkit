import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { countSLice } from '../features/fakeApis/countSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    count : countSLice.reducer
  },
});
