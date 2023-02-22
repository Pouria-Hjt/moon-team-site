import express from "express";

import routes from "../routes/index.js";

export function createApp() {
  // Creating The App
  const app = express();

  // Enabling Parsing for Requests
  app.use(express.json());

  // Enabling Routes With "/api" Prefix
  app.use("/api", routes);

  return app;
}
