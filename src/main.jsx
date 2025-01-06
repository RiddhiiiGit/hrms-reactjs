import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "./store/store.js";
import SnackbarComponent from "./Utills/Snackbar.jsx";
import { SidebarProvider } from "./contexts/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SidebarProvider>
      <StrictMode>
        <App />
        <ToastContainer />
        <SnackbarComponent />
      </StrictMode>
    </SidebarProvider>
  </Provider>
);
