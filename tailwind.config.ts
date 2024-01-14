import type { Config } from "tailwindcss"
import daisyui from "daisyui"
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#283D3B",
                    secondary: "#197278",
                    accent: "#c44536",
                    neutral: "#edddd4",
                    "base-100": "#0d0d0d",
                    info: "#0099f7",
                    success: "#4acc5e",
                    warning: "#ffa600",
                    error: "#ff0057",
                },
            },
        ],
    },
}
export default config
