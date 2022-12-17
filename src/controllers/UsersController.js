import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsersController {
    async create (req, res) {
        try {
            
        } catch(error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new UsersController();
