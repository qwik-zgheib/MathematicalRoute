import express from 'express';
import { fn_get_all_users, fn_get_user_by_id, fn_post_user } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get(`/`, fn_get_all_users);
userRouter.get(`/:id`, fn_get_user_by_id);
userRouter.post(`/`, fn_post_user);

export default userRouter;
