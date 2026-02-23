import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequest =
  (zodSchema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log("Before zode scemah",req.body)
      req.body = await zodSchema.parseAsync(req.body);
      // console.log("Validation successful, proceeding to controller...", req.body);
      next();
    } catch (error) {
      next(error);
    }
  };