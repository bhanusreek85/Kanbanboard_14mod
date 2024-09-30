import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  username: string;
}

// // Extend the Request interface to include the user property
// declare module 'express-serve-static-core' {
//   interface Request {
//     user?: JwtPayload;
//   }
// }


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const token = req.headers['authorization']?.split(' ')[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const secretKey = process.env.JWT_SECRET_KEY || '389847lskjdfl92347lkaj';
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    // Add user data to the request object
    req.user = decoded as JwtPayload;
    return next();
  });
  return;
};
