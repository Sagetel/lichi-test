import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
// eslint-disable-next-line
import postsReducer from './postsSlice.tsx';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
