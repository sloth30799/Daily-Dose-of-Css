"use client"

import GetCssBtn from "@/components/GetCssBtn"
import { useState } from "react"

type ClickFnType = (xNum: number, yNum: number) => void

export default function Home() {
    const [fullscreenX, setFullscreenX] = useState(0)
    const [fullscreenY, setFullscreenY] = useState(0)

    const makeFullscreen: ClickFnType = (xNum, yNum) => {
        setFullscreenX(xNum)
        setFullscreenY(yNum)
        console.log(fullscreenX, fullscreenY)
    }

    return (
        <div className="container h-screen mx-auto">
            {/* <GetCssBtn /> */}
            <div className="h-[3px] w-screen bg-primary spread-bg-primary"></div>
           
        </div>
    )
}
