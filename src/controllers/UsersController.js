import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsersController {
    async create (req, res) {
        try {
            const {name, email, password, phone, address, role} = req.body;
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                    phone,
                    address,
                    role
                }
            });
            return res.status(201).json({message: "User created!", user: user});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new UsersController();
