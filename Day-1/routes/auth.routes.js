const express = require('express')
const router = express.Router();

const { userRegister, userUpdate, deleteUser } = require('../controllers/auth.controller')

router.post('/register', userRegister)
router.patch('/update/:id', userUpdate)
router.delete('/delete/:id', deleteUser)

module.exports = router