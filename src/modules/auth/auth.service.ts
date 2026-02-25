import AppError from "../../app/errorsHelpers/AppError";
import { IUser } from "../Users/user.interface";
import { User } from "../Users/user.model";
import httpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";

const creadentialsLoging = async (payload: Partial<IUser>) => {
  const { email, password } = payload;
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email Does not match!!");
  }
  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    isUserExist.password as string,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Password");
  }
  return {
    email: isUserExist.email,
  };
};

export const AuthServices = {
  creadentialsLoging,
};
