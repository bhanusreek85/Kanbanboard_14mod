import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      console.log("Login failed");
      res.status(404).json({ message: "login failed, please try again" });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(404).json({ message: "login failed, please try again" });
      return;
    }
    const secretKey = process.env.JWT_SECRET_KEY || "389847lskjdfl92347lkaj";
    const token = jwt.sign({ userData }, secretKey, { expiresIn: "10m" });
    console.log("generated token:", token);
    return res.status(202).json({ token });
  } catch (err) {
    console.log("Error logging ", err);
    return res.status(500).json(err);
  }
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
