import { Request, Response, Router } from "express";

import { HOME } from "./routeMap";

const router = Router();

router.get(HOME, (req: Request, res: Response) => {
  res.send("Hi");
});

export default router;
