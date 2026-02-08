/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from "express";

import cors from "cors";
import { router } from "./Routes";
import { envSetupVars } from "./app/config/env";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Tour Management Backend👌👌👌");
});

// Global Error handleer!!

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(globalErrorHandler);
export default app;
