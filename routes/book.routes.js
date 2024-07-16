const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getSingleBookDetails, updateBook, deleteBook } = require('../controller/book.controller');

/**
 * @swagger
 * /api/books/create:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 publishedYear:
 *                   type: integer
 */
router.route("/create").post(createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Returns the list of all books
 *     responses:
 *       200:
 *         description: The list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   publishedYear:
 *                     type: integer
 */
router.route("/").get(getAllBooks);

/**
 * @swagger
 * /api/books/single/{id}:
 *   get:
 *     summary: Get a book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */
router.route("/single/:id").get(getSingleBookDetails);

/**
 * @swagger
 * /api/books/update/{id}:
 *   put:
 *     summary: Update a book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */
router.route("/update/:id").put(updateBook);
/**
 * @swagger
 * /api/books/delete/{id}:
 *   delete:
 *     summary: Delete a book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
router.route("/delete/:id").delete(deleteBook);

module.exports = router;
