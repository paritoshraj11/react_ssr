// import express from "express";
import App from "../components/app";
import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import routes from "../shared/routes";
import fetchData from "../fetchData";

export default (req, res) => {
  console.log(">>>>> url", req.url);
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
  const activeRoute = routes.find(route => matchPath(url, route));
  const promise = activeRoute.fetchData
    ? activeRoute.fetchData(url)
    : fetchData();
  promise
    .then(data => {
      const hbsTemplate = hbs.compile(theHtml);
      const reactComp = renderToString(
        <StaticRouter location={url} context={{}}>
          {sheets.collect(
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          )}
        </StaticRouter>
      );
      const css = sheets.toString();
      const htmlToSend = hbsTemplate({ reactele: reactComp, css });
      res.send(htmlToSend);
    })
    .catch(err => {
      console.log(">>> error in main route", err);
    });
};
