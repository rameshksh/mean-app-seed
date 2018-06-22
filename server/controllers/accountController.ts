import path = require('path');

import { Express, Request, Response } from "express";
import { IBaseController, BaseController } from './baseController';
import { IAccountService, AccountService } from '../services/accountService';
import { Post } from '../models/post';
import { Result } from '../models/result';
import { Register } from '../models/account';
import { Login } from '../models/account';

export interface IAccountController {
    verify(req: Request, res: Response)
    register(req: Request, res: Response);
    getUserInfo(req: Request, res: Response);
    changePassword(req: Request, res: Response);
    forgotPassword(req: Request, res: Response);
    login(req: Request, res: Response);
    logout(req: Request, res: Response);
}

var self;
export class AccountController implements IAccountController {

    constructor(public accountService: IAccountService) {

    }

    register(req: Request, res: Response) {
        var registerModel = <Register>req.body;

        this.accountService.register(registerModel, (result) => {
            return res.json(result);
        });
    }

    verify(req: Request, res: Response) {
        var token = req.params.token;

         this.accountService.verify(token, (result) => {
             if(result && result.Success){
                 return res.sendFile(path.join(__dirname + '/../views/confirmation.html'));
             }else{
                 return res.sendFile(path.join(__dirname + '/../views/failure.html'));
             }
        });
    }

    getUserInfo(req: Request, res: Response) { }
    changePassword(req: Request, res: Response) { }
    forgotPassword(req: Request, res: Response) { }

    login(req: Request, res: Response) { 
        var loginModel = <Login>req.body;

        this.accountService.authenticate(loginModel , (result) => {
            return res.json(result);
        });
    }
    logout(req: Request, res: Response) { }

}
