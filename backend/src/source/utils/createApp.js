  import express from "express";
import cors from "cors"
import routes from "../routes/index.js";

export function createApp() {
  // Creating The App
  const app = express();
  app.use(cors())
  // Enabling Parsing for Requests
  app.use(express.json());

  // Enabling Routes With "/api" Prefix
  app.use("/api", routes);

  return app;
}
