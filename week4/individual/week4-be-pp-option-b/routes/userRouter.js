const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userControllers');

const createUser = (req, res) => {
   const {
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
   } = req.body;

   const newUser = User.addOne(
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status
   );

   if (!newUser) {
      return res.status(500).json({ message: 'Fail to create user' });
   }

   res.json(newUser);
};

router.get('/', getAllUsers);

router.post('/', createUser);

module.exports = router;