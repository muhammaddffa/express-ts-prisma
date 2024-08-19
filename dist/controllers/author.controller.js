"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const client_1 = require("@prisma/client");
const authorClient = new client_1.PrismaClient().author;
// getAllAuthors
const getAllAuthors = async (req, res) => {
    try {
        const allAuthors = await authorClient.findMany({
            include: {
                books: true
            }
        });
        res.status(200).send({ data: allAuthors });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getAllAuthors = getAllAuthors;
// getAuthorById
const getAuthorById = async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await authorClient.findUnique({
            where: {
                id: authorId
            },
            include: {
                books: true
            }
        });
        res.status(200).send({ data: author });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getAuthorById = getAuthorById;
// createAuthor
const createAuthor = async (req, res) => {
    try {
        const authorData = req.body;
        const author = await authorClient.create({
            data: authorData
        });
        res.status(201).json({ data: author });
    }
    catch (e) {
        console.log(e);
    }
};
exports.createAuthor = createAuthor;
// updateAuthor
const updateAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        const authorData = req.body;
        const author = await authorClient.update({
            where: {
                id: authorId
            },
            data: authorData
        });
        res.status(200).json({ data: author });
    }
    catch (e) {
        console.log(e);
    }
};
exports.updateAuthor = updateAuthor;
// deleteAuthor
const deleteAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await authorClient.delete({
            where: {
                id: authorId,
            },
        });
        res.status(201).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
};
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=author.controller.js.map