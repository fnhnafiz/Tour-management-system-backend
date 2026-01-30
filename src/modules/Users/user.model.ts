import { model, Schema } from "mongoose";
import { IAuthUser, IsActive, IUser, ROLE } from "./user.interface";

const authPrviderSchema = new Schema<IAuthUser>(
  {
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
  },
  {
    versionKey: false,
    _id: false,
  },
);

const uesrSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: Object.values(ROLE),
      default: ROLE.USER,
    },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: {
      type: String,
      enum: Object.values(IsActive),
      default: IsActive.ACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    auths: [authPrviderSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("User", uesrSchema)