"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import CustomEditor from "@/components/editor/CustomEditor"
import { BxBadgeCheck } from "@/icons/BxBadgeCheck"
import { titleFont } from "@/utils"

import { postBlock } from "@/services/actions"
import { CodeBlock } from "@/types"

const Page = () => {
    const { push } = useRouter()
    const [htmlCode, setHtmlCode] = useState("")
    const [cssCode, setCssCode] = useState("")
    const [name, setName] = useState("")
    const [blockType, setBlockType] = useState("other")

    const updateCodes = (html: string, css: string) => {
        setHtmlCode(html)
        setCssCode(css)
    }

    const saveCode = async () => {
        const body: CodeBlock = {
            name,
            blockType: blockType,
            html: JSON.stringify(htmlCode),
            css: JSON.stringify(cssCode),
        }

        const codeBlock = await postBlock(body)

        push(`/${codeBlock._id}`)
    }

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
                        <input
                            className="input-box"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 justify-self-center">
                        Type
                        <select
                            value={blockType}
                            onChange={(e) => setBlockType(e.target.value)}
                            className="select-box"
                        >
                            <option value="Button">Button</option>
                            <option value="Animation">Animation</option>
                            <option value="other">Other</option>
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
