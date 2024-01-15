import express from 'express';
import userRouter from './user.routes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola, bienvenido a tu API Node.js con Express y MongoDB.');
});

router.use('/user', userRouter);

export default router;
