import dbConnect from "@/lib/dbConnect"
import CodeBlock from "@/models/CodeBlock"
import IdPool from "@/models/IdPool"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        await dbConnect()

        const pools = await IdPool.findOne({ _id: process.env.POOL })
        return NextResponse.json({ pools })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect()

        const { name } = await req.json()
        const newIdPool = new IdPool({
            name,
            pool: [],
        })

        const savedIdPool = await newIdPool.save()
        return NextResponse.json({ savedIdPool })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

export async function PUT() {
    try {
        await dbConnect()

        const allIds = await CodeBlock.find({ approved: true }, "_id")
        const result = allIds.map((item) => item._id.toString())

        const updatedPool = await IdPool.findByIdAndUpdate(
            process.env.POOL,
            {
                pool: result,
            },
            {
                new: true,
            }
        )

        return NextResponse.json(updatedPool)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
