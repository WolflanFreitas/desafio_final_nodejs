
import { PrismaClient } from "@prisma/client";
import basicAuth from "express-basic-auth";

const prisma = new PrismaClient();

class Authentication {

    create() {
        return basicAuth({
            authorizer: this.myAsyncAuthorizer,
            authorizeAsync: true,
            unauthorizedResponse: this.getUnauthorizedResponse
        });
    }

    async myAsyncAuthorizer(username, password, cb) {
        const user = await prisma.user.findFirst({
            where: {
                email: username,
                password: password
            }
        });
        if (user) {
            return cb(null, true);
        } else {
            return cb(null, false);
        }
    }

    getUnauthorizedResponse(req) {
        return req.auth
            ? ("Credentials " + req.auth.user + ":" + req.auth.password + " rejected")
            : "No credentials provided";
    }
}

export default new Authentication();