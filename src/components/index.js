import React from "react";
import { hydrate } from "react-dom";
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

hydrate(<Main />, document.getElementById("reactele"));
