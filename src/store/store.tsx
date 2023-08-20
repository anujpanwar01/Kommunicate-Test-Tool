import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Login.Slice';
import EnvReducer from './Env.Slice';
// import ThemeReducer from './Theme.Slice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    env: EnvReducer,
    // theme: ThemeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
