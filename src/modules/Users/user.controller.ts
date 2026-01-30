import { Request, Response } from "express";
import { User } from "./user.model";
import httpStatus from "http-status-codes";

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await User.create({
      name,
      email,
    });
    res.status(httpStatus.CREATED).json({
      user,
      message: "User created succesfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log("Somthing wrong!!");
    res.status(httpStatus.BAD_REQUEST).json({
      message: `Something wen wrong ${error.message}`,
    });
  }
};

export const userControllers = {
  createUser,
};
