import dbConnect from "@/lib/dbConnect"
import CodeBlock from "@/models/CodeBlock"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await dbConnect()

        const allBlocks = await CodeBlock.find({ approved: false })

        return NextResponse.json(allBlocks)
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}
