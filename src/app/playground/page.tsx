"use client"

import { useState } from "react"
import CustomEditor from "@/components/editor/CustomEditor"
import { titleFont } from "@/utils"
import { BxBadgeCheck } from "@/components/icons/BxBadgeCheck"

const Page = () => {
    const [htmlCode, setHtmlCode] = useState("")
    const [cssCode, setCssCode] = useState("")

    const updateCodes = (html: string, css: string) => {
        setHtmlCode(html)
        setCssCode(css)
    }

    const saveCode = () => {}

    return (
        <main className="w-screen h-screen py-6 bg-background">
            <h1
                className={`text-text text-center text-xl mb-3 cursor-default  ${titleFont.className}`}
            >
                PlayGround
            </h1>
            <section className="container m-auto">
                <div className="grid items-center grid-flow-row grid-cols-3 mb-6 text-sm text-text">
                    <div className="flex items-center gap-2">
                        Name
                        <input className="input-box" type="text" name="name" />
                    </div>

                    <div className="flex items-center gap-2 justify-self-center">
                        Type
                        <select name="" id="test" className="select-box">
                            <option value="">Other</option>
                            <option value="">Other</option>
                            <option value="">Other</option>
                        </select>
                    </div>

                    <button
                        className="primary-btn justify-self-end w-[80px]"
                        onClick={saveCode}
                    >
                        <BxBadgeCheck />
                        Save
                    </button>
                </div>
                <CustomEditor updateCodes={updateCodes} />
            </section>
        </main>
    )
}

export default Page
