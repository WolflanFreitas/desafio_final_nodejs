import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsersController {
    async create (req, res) {
        try {

            return res.status(201).json({message: "User created!"});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new UsersController();
