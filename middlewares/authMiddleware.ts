import { NextFunction, Request } from "express";
import { Session } from "express-session";

const authMiddleware = (req: Request, res: any, next: NextFunction) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
