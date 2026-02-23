/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AppError from "../../app/errorsHelpers/AppError";
import { IAuthUser, IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User already exist in this website",
    );
  }

  const authProvider: IAuthUser = {
    provider: "creadtials",
    providerId: email!,
  };
  const hashPassword = await bcryptjs.hash(password as string, 10);

  // console.log("This is a isMatchPassword", isMatchPassword);

  const users = await User.create({
    email,
    password: hashPassword,
    auths: [authProvider],
    ...rest,
  });
  // const totalUser = await User.countDocuments();
  return users;
};

const getAllUsers = async () => {
  const allUsers = await User.find({});
  const totalUser = await User.countDocuments();
  return {
    data: allUsers,
    meta: {
      total: totalUser,
    },
  };
};

export const UserServices = {
  createUser,
  getAllUsers,
};
