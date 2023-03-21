import dotenv from "dotenv";
import express, { Express } from "express";

import homeRouter from "./routes/home";
import playlistsRouter from "./routes/playlists";
import { HOME, PLAYLISTS } from "./routes/routeMap";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(HOME, homeRouter);
app.use(PLAYLISTS, playlistsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
