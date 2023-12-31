const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user routes
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user.
 *     description: Register a new user with the provided email and name.
 *     requestBody:
 *       description: User details for registration.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               name: John Doe
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               email: user@example.com
 *               name: John Doe
 */
router.post('/register', userController.registerUser);

module.exports = router;