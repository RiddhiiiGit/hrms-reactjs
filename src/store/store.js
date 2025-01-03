import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";
import themeReducer from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    theme: themeReducer,
  },
});

export default store;
