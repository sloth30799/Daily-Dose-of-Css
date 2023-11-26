import dbConnect from "@/lib/dbConnect"
import IdPool from "@/models/IdPool"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await dbConnect()

        const pools = await IdPool.find({})
        return NextResponse.json({ pools })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
