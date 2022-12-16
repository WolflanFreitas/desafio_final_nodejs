import mongoose from "mongoose";
import config from "../config/mongo";

class Database {
    constructor() {
        this.connection = mongoose.connect(config.url);
    }
}

export default new Database();