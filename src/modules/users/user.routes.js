import {Router} from 'express';
import validate from 'express-validation';
import * as userController from "./user.controllers";
import {authLocal} from "../../services/auth.services"

import userValidation from   './user.validations';

const router = new Router();

router.post('/signup',validate(userValidation.signup), userController.singUp);
router.post('/login',authLocal, userController.login);

export default router;