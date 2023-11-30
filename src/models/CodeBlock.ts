import mongoose, { ObjectId } from "mongoose"

export interface CodeBlocks extends mongoose.Document {
    name: string
    blockType: string
    html: string
    css: string
    approved: boolean
    user: ObjectId
}

const CodeBlockSchema = new mongoose.Schema<CodeBlocks>({
    name: {
        type: String,
        required: [true, "Please provide a name for this pool."],
    },
    blockType: {
        type: String,
    },
    html: {
        type: String,
    },
    css: {
        type: String,
    },
    approved: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

export default mongoose.models.CodeBlock ||
    mongoose.model<CodeBlocks>("CodeBlock", CodeBlockSchema)
