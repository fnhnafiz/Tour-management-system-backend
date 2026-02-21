import { NextFunction, Request, Response, Router } from "express";
import { userControllers } from "./user.controller";
import z from "zod";

const router = Router();
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const createUserZodSchema = z.object({
      name: z
        .string({ message: "Name must be string" })
        .min(2, { message: "Name too short" })
        .max(20, { message: "Name too long" }),
      email: z.string().email(),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter",
        })
        .regex(/\d/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, {
          message: "Password must contain at least one special character",
        }),
      phone: z
        .string()
        .regex(/^(?:\+8801|8801|01)[3-9]\d{8}$/, {
          message: "Phone number must be a valid Bangladeshi number",
        })
        .optional(),

      address: z
        .string()
        .min(5, { message: "Address must be at least 5 characters" })
        .max(200, { message: "Address is too long" })
        .optional(),
    });

    req.body = await createUserZodSchema.parseAsync(req.body);
    console.log("Validation successful, proceeding to controller...", req.body);
    next();
  },
  userControllers.createUser,
);
router.get("/all-users", userControllers.getAllUsers);

export const UserRoutes = router;
