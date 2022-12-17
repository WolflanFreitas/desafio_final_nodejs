import mongoose from "mongoose";

const bookInfoSchema = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    countPages: {
        type: Number,
        required: true
    },
    publishingCompany: {
        type: String,
        required: true
    },
    comments: [{
        name: String,
        score: Number,
        comment: String
    }]
});

export default mongoose.model('bookInfo', bookInfoSchema);