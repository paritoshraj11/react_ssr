import express from "express";
import compression from "compression";
import mainRequestHandler from "./routes";

const app = express();

app.use(compression());
app.use(express.static("public"));

app.get("/", mainRequestHandler);

app.get("/data", (req, res, next) => {
  res.status(200).json({
    title: "hello to the data api!!!!"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
