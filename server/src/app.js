import dotenv from 'dotenv';
import { connectToMongoDB } from './config/mongo.js';
import app from './middlewares/middleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection
connectToMongoDB(MONGODB_URI);

// Routes
app.get('/', (req, res) => {
  res.send('Hola, bienvenido a tu API Node.js con Express y MongoDB.');
});

app.listen(PORT, () => {
  console.log(`Server runing in: http://localhost:${PORT}`);
});
