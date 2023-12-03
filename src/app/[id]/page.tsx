import { fetchOneBlock } from "@/services/actions"

const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await fetchOneBlock(id)
    console.log("🚀 ~ file: page.tsx:5 ~ Page ~ data:", data)

    return <div>Page</div>
}

export default Page
