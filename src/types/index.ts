import { ObjectId } from "mongoose"

export interface CodeBlock {
    name: string
    blockType: string
    html: string
    css: string
    approved?: boolean
    user?: ObjectId
}

export type IdPool = string[]
