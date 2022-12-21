import { PrismaClient } from "@prisma/client";
import BookInfo from "../models/BookInfo";

const prisma = new PrismaClient();

class BooksController {

    async create (req, res) {
        try {
            const {name, value, quantity, authorId} = req.body;
            const book = await prisma.book.create({
                data: {
                    name,
                    value,
                    quantity: parseInt(quantity),
                    authorId
                }
            });
            return res.status(201).json({message: "Book created!", book: book});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async update (req, res) {
        try {
            const bookId = parseInt(req.params.id);
            const {name, value, quantity, authorId} = req.body;
            
            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(!book) {
                return res.status(404).json("Book not found!");
            }

            await prisma.book.update({
                where: {
                    id: bookId
                },
                data: {
                    name,
                    value,
                    quantity: parseInt(quantity),
                    authorId
                }
            });
            return res.status(204).json({message: "Book updated!"});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async delete(req, res) {
        try {
            const bookId = parseInt(req.params.id);
            const book =  await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });
            if(book) {
                await prisma.book.delete({
                    where: {
                        id: bookId
                    }
                });
                return res.status(200).json({message: `Book deleted id: ${bookId}`});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getAll(req, res) {
        try {
            const authorId = parseInt(req.query.authorId);
            let books;
            if(authorId) {
                books = await prisma.book.findMany({
                    where: {
                        authorId
                    }
                })
            } else {
                books = await prisma.book.findMany();
            }
            return res.status(200).json({books});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getOne(req, res) {
        try {
            const bookId = parseInt(req.params.id);
            let book =  await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });
            if(book) {
                const info = await BookInfo.findOne({
                    bookId
                });
                book = {...book, info}
                return res.status(200).json({book});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async createBookInfo(req, res) {
        try {
            const {bookId, description, countPages, publishingCompany, comments} = req.body;
            
            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(book) {
                const hasBookInfo = await BookInfo.findOne({bookId});
                if(hasBookInfo) {
                    return res.status(500).json({message: "Book already has bookInfo!"});
                }
                await BookInfo.create({
                    bookId,
                    description,
                    countPages,
                    publishingCompany,
                    comments
                });
                return res.status(201).json({message: "BookInfo created!"});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async updateBookInfo(req, res) {
        try {
            const bookId = parseInt(req.params.id);
            const {description, countPages, publishingCompany, comments} = req.body;
            
            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(book) {
                const hasBookInfo = await BookInfo.findOne({bookId});
                if(hasBookInfo) {
                    await BookInfo.updateOne({bookId},{
                        description,
                        countPages,
                        publishingCompany,
                        comments
                    });
                    return res.status(200).json({message: "BookInfo updated!"});
                }
                return res.status(404).json({message: "No bookInfo founded!"});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async deleteBookInfo(req, res) {
        try {
            const bookId = parseInt(req.params.id);

            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(book) {
                const hasBookInfo = await BookInfo.findOne({bookId});
                if(hasBookInfo) {
                    await BookInfo.deleteOne({bookId});
                    return res.status(200).json({message: "BookInfo deleted!"});
                }
                return res.status(404).json({message: "No bookInfo founded!"});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async createBookInfoComment(req, res) {
        try {
            const bookId = parseInt(req.params.id);
            const {name, score, comment} = req.body;
            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(book) {
                const bookInfo = await BookInfo.findOne({bookId});
                if(bookInfo) {
                    bookInfo.comments.push({
                        name,
                        score,
                        comment
                    });

                    bookInfo.save();

                    return res.status(200).json({message: "Comment created!"});
                }
                return res.status(404).json({message: "No bookInfo founded!"});
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new BooksController();
