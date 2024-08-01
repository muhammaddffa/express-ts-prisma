import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bookClient = prisma.book;

// getAllBooks
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookClient.findMany();
    res.status(200).json({ data: allBooks });
  } catch (e) {
    console.log(e);
  }
};

// getBookById
export const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.findUnique({
      where: { id: bookId },
    });
    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

// createBook
export const createBook = async (req, res) => {
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
  } catch (e) {
    console.log(e);
  }
};

// updateBook
export const updateBook = async (req, res) => {
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
  } catch (e) {
    console.log(e);
  }
};

// deleteBook
export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await bookClient.delete({
      where: { id: bookId },
    });

    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};
