import store from "../store/store";
import { showSnackbar } from "../features/snackbar/snackbarSlice";

export const triggerSnackbar = (message, severity = "info") => {
  store.dispatch(
    showSnackbar({
      message,
      severity,
    })
  );
};
