const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Define car routes
/**
 * @swagger
 * /cars/{userId}:
 *   post:
 *     summary: Record a new car for a user.
 *     description: Record details of a new car for the specified user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to whom the car belongs.
 *     requestBody:
 *       description: Car details to be recorded.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               color:
 *                 type: string
 *             example:
 *               type: Sedan
 *               color: Blue
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               type: Sedan
 *               color: Blue
 */
router.post('/:userId', carController.recordCar);
/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get cars with filtering and sorting.
 *     description: Retrieve a list of cars based on provided filters and sorting parameters.
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter cars by type.
 *       - in: query
 *         name: color
 *         schema:
 *           type: string
 *         description: Filter cars by color.
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort cars by specified fields. Use comma-separated values for multiple fields.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 type: Sedan
 *                 color: Blue
 *               - id: 2
 *                 type: SUV
 *                 color: Red
 */
router.get('/', carController.queryCars);

module.exports = router;
