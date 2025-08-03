const { registerUser, loginUser } = require('../controllers/auth-controller');
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth-middleware');
const UserModel = require('../modals/user-modal');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Protected route: Get logged-in user's data
router.get('/me', authenticateUser, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
