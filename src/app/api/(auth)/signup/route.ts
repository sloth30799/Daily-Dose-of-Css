import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"
import dbConnect from "@/lib/dbConnect"
import User from "@/models/User"

export async function POST(req: NextRequest) {
    try {
        await dbConnect()

        const body = await req.json()

        const existingUser = await User.findOne({ email: body.email })

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A user with the provided email already exists.",
                },
                { status: 400 }
            )
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            email: body.email,
            password: passwordHash,
        })

        await user.save()

        return NextResponse.json(
            {
                success: true,
                message: "User successfully created.",
            },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(null, { status: 500 })
    }
}
