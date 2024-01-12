import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola, bienvenido a tu API Node.js con Express y MongoDB.');
});

export default router;
