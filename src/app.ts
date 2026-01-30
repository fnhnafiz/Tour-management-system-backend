import express, { Request, Response } from "express";


import cors from "cors";
import { router } from "./Routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Tour Management Backend👌👌👌");
});
export default app;
