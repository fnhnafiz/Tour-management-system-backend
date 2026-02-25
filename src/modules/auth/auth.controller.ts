/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.service";

const creadentialsLoging = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.creadentialsLoging(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "You are successfully logged In",
      data: loginInfo,
    });
  },
);

export const AuthControllers = {
  creadentialsLoging,
};
