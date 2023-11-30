import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import CodeBlock from "@/models/CodeBlock"

export async function GET() {
    try {
        await dbConnect()

        const allBlocks = await CodeBlock.find({})

        return NextResponse.json(allBlocks)
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect()

        const body = await req.json()
        const block = new CodeBlock(body)
        const savedBlock = await block.save()

        return NextResponse.json(
            {
                block: savedBlock,
            },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}
