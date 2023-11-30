import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    useSandpack,
} from "@codesandbox/sandpack-react"
import { nightOwl } from "@codesandbox/sandpack-themes"
import { useEffect } from "react"

type PropsType = {
    updateCodes: (html: string, css: string) => void
}

const CustomPreview = ({ updateCodes }: PropsType) => {
    const { sandpack } = useSandpack()
    const { files } = sandpack

    useEffect(() => {
        const html = files["/index.html"].code
        const css = files["/styles.css"].code

        updateCodes(html, css)
    }, [files])

    return <SandpackPreview style={{ height: "500px" }} />
}

const CustomEditor = ({ updateCodes }: PropsType) => {
    return (
        <SandpackProvider
            theme={nightOwl}
            template="static"
            options={{
                visibleFiles: ["/index.html", "/styles.css"],
            }}
        >
            <SandpackLayout>
                <SandpackCodeEditor
                    style={{ height: "500px" }}
                    showInlineErrors
                    showTabs
                    showRunButton
                    wrapContent
                />
                <CustomPreview updateCodes={updateCodes} />
            </SandpackLayout>
        </SandpackProvider>
    )
}

export default CustomEditor
