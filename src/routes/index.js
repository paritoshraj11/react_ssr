import express from "express";
import App from "../components/app";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default (req, res) => {
  const sheets = new ServerStyleSheets();
  const theHtml = `
  <html>
  <head><title>Paritosh</title>
  <style id="jss-server-side">{{{css}}}</style>
  </head>

  <body>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  );
  const css = sheets.toString();
  const htmlToSend = hbsTemplate({ reactele: reactComp, css });
  res.send(htmlToSend);
};
