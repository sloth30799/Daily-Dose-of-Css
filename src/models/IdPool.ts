import mongoose from "mongoose"

export interface IdPools extends mongoose.Document {
    name: string
    pool: Array<String>
}

const IdPoolSchema = new mongoose.Schema<IdPools>({
    name: {
        type: String,
        required: [true, "Please provide a name for this pool."],
    },
    pool: {
        type: [String],
    },
})

export default mongoose.models.IdPool ||
    mongoose.model<IdPools>("IdPool", IdPoolSchema)
