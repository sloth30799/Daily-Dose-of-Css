import { fetchOneBlock } from "@/services/actions"
import CustomEditor from "@/components/editor/CustomEditor"

const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const block = await fetchOneBlock(id)

    const files = {
        '/index.html': JSON.parse(block.html),
        '/styles.css': JSON.parse(block.css)
    }

    return <div>
        <CustomEditor files={files} />
        <h1>test</h1>
    </div>
}

export default Page
