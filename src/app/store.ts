import { configureStore } from "@reduxjs/toolkit";

// Removed the `counterReducer` function, `CounterState` type, and `Action` import

import postsReducer from "@/features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;
