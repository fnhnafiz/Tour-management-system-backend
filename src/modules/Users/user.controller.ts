/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserServices.createUser(req.body);
    // res.status(httpStatus.CREATED).json({
    //   message: "User created succesfully",
    //   user,
    // });
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User created succesfully",
      data: users,
    });
  },
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();
    // res.status(httpStatus.OK).json({
    //   success: true,
    //   message: "All users retrieved successfully",
    //   data: user,
    // });
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All users retrieved successfully",
      data: result.data,
      meta: result.meta,
    });
  },
);

export const userControllers = {
  createUser,
  getAllUsers,
};
