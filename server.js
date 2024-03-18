import express from "express";
import { createRequestHandler } from "@remix-run/express";

// notice that the result of `remix vite:build` is "just a module"
import * as build from "./build/server/index.js";

const app = express();

app.use(express.static("build/cient"));

// all your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});
