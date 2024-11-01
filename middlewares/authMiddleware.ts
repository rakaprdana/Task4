import { NextFunction, Request, Response } from "express";
import { Session } from "express-session";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
