"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bookClient = prisma.book;
// getAllBooks
const getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookClient.findMany();
        res.status(200).json({ data: allBooks });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getAllBooks = getAllBooks;
// getBookById
const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookClient.findUnique({
            where: { id: bookId },
        });
        res.status(200).json({ data: book });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getBookById = getBookById;
// createBook
const createBook = async (req, res) => {
    try {
        const { title, authorId, imageUrl } = req.body;
        const book = await bookClient.create({
            data: {
                title,
                imageUrl,
                author: {
                    connect: { id: authorId },
                },
            },
        });
        res.status(201).json({ data: book });
    }
    catch (e) {
        console.log(e);
    }
};
exports.createBook = createBook;
// updateBook
const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { title, authorId, imageUrl } = req.body;
        const book = await bookClient.update({
            where: { id: bookId },
            data: {
                title,
                imageUrl,
                author: {
                    connect: { id: authorId },
                },
            },
        });
        res.status(200).json({ data: book });
    }
    catch (e) {
        console.log(e);
    }
};
exports.updateBook = updateBook;
// deleteBook
const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookClient.delete({
            where: { id: bookId },
        });
        res.status(200).json({ data: book });
    }
    catch (e) {
        console.log(e);
    }
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=book.controller.js.map