import dbConnect from "@/lib/dbConnect"
import CodeBlock from "@/models/CodeBlock"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest) {
    try {
        await dbConnect()

        const body = await req.json()

        const updatedBlock = await CodeBlock.findByIdAndUpdate(
            body._id,
            { approved: true },
            {
                new: true,
            }
        )

        return NextResponse.json(updatedBlock)
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}
