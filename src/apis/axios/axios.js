import axios from "axios";
import config from "../../config";
import { triggerSnackbar } from "../../Utills/snackbar";

const axiosClient = axios.create({
  baseURL: `${config.apiBaseURL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const responseErrorHandler = (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem("serviceToken");
    triggerSnackbar("You are not authorized. Please log in again.", "error");
  }
  if (
    error.response &&
    (error.response.status === 403 ||
      error.response.status === 400 ||
      error.response.status === 408)
  ) {
    // errorSnackBar(error.response);
  }
  return Promise.reject(
    (error.response && error.response?.data) || "Wrong Services"
  );
};

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.status === false) {
      // errorSnackBar(response);
    }
    // store.dispatch({
    //   type: HIDE_LOADER,
    //   isLoading: false,
    // });
    return response;
  },

  (error) => responseErrorHandler(error)
);

export default axiosClient;
