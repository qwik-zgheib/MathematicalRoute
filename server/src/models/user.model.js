import mongoose from 'mongoose';

/**
 * name
 * username
 * email
 * password
 * profile_picture
 * role: ['none', 'basic', 'pro']
 */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_picture: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
