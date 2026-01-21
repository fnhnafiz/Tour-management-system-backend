import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Tour Management Backend👌👌👌");
});
export default app;
