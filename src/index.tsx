import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/screens/store";
import App from "./app/screens/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./app/context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
