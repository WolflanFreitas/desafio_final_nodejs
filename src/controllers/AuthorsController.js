import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AuthorsController {

    async create (req, res) {
        try {
            const {name, email, phone} = req.body;
            const author = await prisma.author.create({
                data: {
                    name,
                    email,
                    phone
                }
            });
            return res.status(201).json({message: "Author created!", author: author});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async update (req, res) {
        try {
            const authorId = parseInt(req.params.id);
            const {name, email, password, phone, address, role} = req.body;
            
            const author = await prisma.author.findUnique({
                where: {
                    id: authorId
                }
            });

            if(!author) {
                return res.status(404).json("Author not found!");
            }

            await prisma.author.update({
                where: {
                    id: authorId
                },
                data: {
                    name,
                    email,
                    phone
                }
            });
            return res.status(204).json({message: "Author updated!"});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async delete(req, res) {
        try {
            const authorId = parseInt(req.params.id);
            const author =  await prisma.author.findUnique({
                where: {
                    id: authorId
                }
            });
            if(author) {
                await prisma.author.delete({
                    where: {
                        id: authorId
                    }
                });
                return res.status(200).json({message: `Author deleted id: ${authorId}`});
            } else {
                return res.status(404).json({message: "Author not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getAll(req, res) {
        try {
            const authors = await prisma.author.findMany();
            authors.map((author) => {
                delete author.password;
            });
            return res.status(200).json({authors});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getOne(req, res) {
        try {
            const authorId = parseInt(req.params.id);
            const author =  await prisma.author.findUnique({
                where: {
                    id: authorId
                }
            });
            if(author) {
                return res.status(200).json({author});
            } else {
                return res.status(404).json({message: "Author not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new AuthorsController();
