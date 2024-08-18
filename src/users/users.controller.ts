import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import "reflect-metadata";

import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import { IUserController } from "./users.controller.interface";

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);

    this.bindRoutes([
      {
        path: "/login",
        func: this.login,
        method: "post",
      },
      {
        path: "/register",
        func: this.register,
        method: "post",
      },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, "login");
    next(new HTTPError(401, "Error auth", "login"));
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "register");
  }
}
