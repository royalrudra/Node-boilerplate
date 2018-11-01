import {Router} from 'express';
import validate from 'express-validation';
import * as userController from "./user.controllers";


import userValidation from   './user.validations';

const router = new Router();

router.post('/signup',validate(userValidation.signup), userController.singUp);

export default router;