import mongoose from 'mongoose';

export const connectToMongoDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
  }
};
