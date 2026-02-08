/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envSetupVars } from "../config/env";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500
    const message= `Something went wrong!! ${err.message} from global error`
 res.status(statusCode).json({
    success: false,
    message: message,
    err,
    stack: envSetupVars.NODE_ENV === "development" ? err.stack : null,
  });
}