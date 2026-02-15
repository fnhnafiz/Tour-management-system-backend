/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../app/utils/catchAsync";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     // const { email, name } = req.body;
//     // const user = await User.create({
//     //   name,
//     //   email,
//     // });
//     // throw new Error("Fake Error for testing global error handler!!");
//     // throw new AppError(httpStatus.BAD_REQUEST, "Fake error");
//     const user = await UserServices.createUser(req.body);
//     res.status(httpStatus.CREATED).json({
//       message: "User created succesfully",
//       user,
//     });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     // console.log("Somthing wrong!!");
//     // res.status(httpStatus.BAD_REQUEST).json({
//     //   message: `Something wen wrong ${error.message}`,
//     // });
//     next(error);
//   }
// };
const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      message: "User created succesfully",
      user,
    });
  },
);

// const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserServices.getAllUsers();
//     res.status(httpStatus.OK).json({
//       message: "All users retrieved successfully",
//       data: user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: "All users retrieved successfully",
      data: user,
    });
  },
);

export const userControllers = {
  createUser,
  getAllUsers,
};
