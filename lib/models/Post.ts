import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    postPhoto: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    liked: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;