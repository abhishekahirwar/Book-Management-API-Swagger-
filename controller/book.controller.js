const Book = require('../model/book.model');

// Create Book Controller
exports.createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;

        const book = await Book.create({
            title,
            author,
            publishedYear,
        });

        return res.status(201).json({
            success: true,
            book,
            message: "Book created successfully.",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Books Controller
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        return res.status(200).json({
            success: true,
            books,
            message: "All books retrieved successfully.",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// Get Anyone Specific Book Controller
exports.getSingleBookDetails = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found.",
            });
        }

        return res.status(200).json({
            success: true,
            book,
            message: "Book's detail retrieved successfully.",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// Update Books Detail Controller
exports.updateBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;

        if (!title || !author || !publishedYear) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields.",
            });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                title,
                author,
                publishedYear,
            },
            { new: true, runValidator: true },
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found.",
            });
        }

        return res.status(200).json({
            success: true,
            updatedBook,
            message: "Book updated successfully.",
        });

    } catch {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Book Controller
exports.deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id);

        if (!deleteBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book deleted successfully.",
        });
    } catch {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

