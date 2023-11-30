import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            text: "#ecfefe",
            background: "#021818",
            primary: "#80ffff",
            secondary: "#043e3e",
            accent: "#1ef1f1",
        },
    },
    plugins: [],
}
export default config
