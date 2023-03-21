import dotenv from "dotenv";
import express, { Express } from "express";

import homeRouter from "./routes/home";
import { HOME } from "./routes/routeMap";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(HOME, homeRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});