// import express from "express";
import App from "../components/app";
import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import routes from "../shared/routes";

export default (req, res) => {
  const sheets = new ServerStyleSheets();
  const url = req.url;
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
  const activeRoute = routes.find(route => matchPath(req.url, route));
  console.log(">>> active route", activeRoute, req.url);
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(
    sheets.collect(
      <StaticRouter location={url} context={{}}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
  );
  const css = sheets.toString();
  const htmlToSend = hbsTemplate({ reactele: reactComp, css });
  res.send(htmlToSend);
};
