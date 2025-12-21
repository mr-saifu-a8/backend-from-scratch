const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')

const { userRegister, userUpdate, deleteUser, userLogin } = require('../controllers/auth.controller')

router.post('/register', userRegister)
router.post('/login', userLogin)

router.patch('/update/:id', authMiddleware, userUpdate)
router.delete('/delete/:id', authMiddleware, deleteUser)

module.exports = router