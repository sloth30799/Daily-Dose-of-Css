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
                    primary: "#00b0ff",
                    secondary: "#00f36d",
                    accent: "#e80000",
                    neutral: "#112928",
                    "base-100": "#032728",
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
