import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const { email, name } = req.body;
    // const user = await User.create({
    //   name,
    //   email,
    // });
    // throw new Error("Fake Error for testing global error handler!!");
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      message: "User created succesfully",
      user,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log("Somthing wrong!!");
    // res.status(httpStatus.BAD_REQUEST).json({
    //   message: `Something wen wrong ${error.message}`,
    // });
    next(error);
  }
};

export const userControllers = {
  createUser,
};
