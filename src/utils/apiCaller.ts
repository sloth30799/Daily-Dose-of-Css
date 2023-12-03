const dev = "http://localhost:3000"

type apiCallerProps = {
    link: string
    method: "GET" | "POST" | "PUT" | "DELETE"
    body?: string
}

export const apiCaller = async ({ link, method, body }: apiCallerProps) => {
    const response = await fetch(`${dev}/api/${link}`, {
        method: method,
        body: body,
    })

    const data = await response.json()

    return data
}
