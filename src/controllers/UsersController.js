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

    async update (req, res) {
        try {
            const userId = parseInt(req.params.id);
            const {name, email, password, phone, address, role} = req.body;
            
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            });

            if(!user) {
                return res.status(404).json("User not found!");
            }

            await prisma.user.update({
                where: {
                    id: userId
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
            return res.status(204).json({message: "User updated!"});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async delete(req, res) {
        try {
            const userId = parseInt(req.params.id);
            await prisma.user.delete({
                where: {
                    id: userId
                }
            });
            return res.status(200).json({message: `User deleted id: ${userId}`});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getAll(req, res) {
        try {
            const users = await prisma.user.findMany();
            users.map((user) => {
                delete user.password;
            });
            return res.status(200).json({users});
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }

    async getOne(req, res) {
        try {
            const userId = parseInt(req.params.id);
            const user =  await prisma.user.findUnique({
                where: {
                    id: userId
                }
            });
            if(user) {
                delete user.password;
                return res.status(200).json({user});
            } else {
                return res.status(404).json({message: "User not found!"})
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}

export default new UsersController();
