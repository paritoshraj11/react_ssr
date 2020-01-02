import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

hydrate(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("reactele")
);
