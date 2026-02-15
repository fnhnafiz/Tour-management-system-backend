import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { email, name } = payload;
  const users = await User.create({
    name,
    email,
  });
  const totalUser = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUser,
    },
  };
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
