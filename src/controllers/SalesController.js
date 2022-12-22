import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SalesController {

    async create (req, res) {
        try {
            const {date, userId, bookId} = req.body;
            const book = await prisma.book.findUnique({
                where: {
                    id: bookId
                }
            });

            if(book) {
                if(book.quantity > 0) {
                    await prisma.book.update({
                        where: {
                            id: bookId
                        },
                        data: {
                            quantity: --book.quantity
                        }
                    });
                    const sale = await prisma.sale.create({
                        data: {
                            value: book.value,
                            date: new Date(date),
                            userId,
                            bookId
                        }
                    });
                    return res.status(201).json({message: "Sale created!", sale: sale});
                } else {
                    return res.status(400).json({message: "Insufficient quantity of books!"});
                }
            } else {
                return res.status(404).json({message: "Book not found!"});
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async update (req, res) {
        try {
            const saleId = parseInt(req.params.id);
            const {name, email, password, phone, address, role} = req.body;
            
            const sale = await prisma.sale.findUnique({
                where: {
                    id: saleId
                }
            });

            if(!sale) {
                return res.status(404).json("Sale not found!");
            }

            await prisma.sale.update({
                where: {
                    id: saleId
                },
                data: {
                    name,
                    email,
                    password,
                    phone,
                    address,
                    role
                }
            });
            return res.status(204).json({message: "Sale updated!"});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async delete(req, res) {
        try {
            const saleId = parseInt(req.params.id);
            const sale =  await prisma.sale.findUnique({
                where: {
                    id: saleId
                }
            });
            if(sale) {
                await prisma.sale.delete({
                    where: {
                        id: saleId
                    }
                });
                return res.status(200).json({message: `Sale deleted id: ${saleId}`});
            } else {
                return res.status(404).json({message: "Sale not found!"})
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getAll(req, res) {
        try {
            const sales = await prisma.sale.findMany();
            sales.map((sale) => {
                delete sale.password;
            });
            return res.status(200).json({sales});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getOne(req, res) {
        try {
            const saleId = parseInt(req.params.id);
            const sale =  await prisma.sale.findUnique({
                where: {
                    id: saleId
                }
            });
            if(sale) {
                delete sale.password;
                return res.status(200).json({sale});
            } else {
                return res.status(404).json({message: "Sale not found!"})
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new SalesController();
