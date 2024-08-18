import { NextFunction, Request, Response } from "express";

import { BaseController } from "../common/base.controller";

export interface IUserController {
  login: (req: Request, res: Response, next: NextFunction) => void;
  register: (req: Request, res: Response, next: NextFunction) => void;
}
