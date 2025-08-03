const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../modals/user-modal');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create a new user
      
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

          const newUser = new UserModel({
            name,
            email,
            hashedPassword, // Password will be hashed before saving
        });

        await newUser.save();

        // Generate JWT token
        const token = jsonwebtoken.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await UserModel.find({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jsonwebtoken.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }   
  }

  module.exports = {
    registerUser,
    loginUser
  };
