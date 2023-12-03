"use server"

import { CodeBlock } from "@/types"
import { apiCaller } from "@/utils"

// GET
export const fetchIdPool = async () => {
    const fetchData = {
        link: `pool`,
        method: "GET" as const,
    }

    const data = await apiCaller(fetchData)

    return data.pools
}

export const fetchOneBlock = async (id: string) => {
    const fetchData = {
        link: `block/${id}`,
        method: "GET" as const,
    }

    return await apiCaller(fetchData)
}

// POST
export const postBlock = async (blockData: CodeBlock) => {
    const postData = {
        link: `block`,
        method: "POST" as const,
        body: JSON.stringify(blockData),
    }

    return await apiCaller(postData)
}
