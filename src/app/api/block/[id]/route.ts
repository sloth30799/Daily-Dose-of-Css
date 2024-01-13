import dbConnect from "@/lib/dbConnect"
import CodeBlock from "@/models/CodeBlock"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect()

        const block = await CodeBlock.findById({ _id: params.id })

        return NextResponse.json(block)
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}
