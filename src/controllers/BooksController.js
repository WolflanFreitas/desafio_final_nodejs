import { PrismaClient } from "@prisma/client";

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
            const books = await prisma.book.findMany();
            return res.status(200).json({books});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getOne(req, res) {
        try {
            const bookId = parseInt(req.params.id);
            const book =  await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });
            if(book) {
                return res.status(200).json({book});
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
