import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      variants:{
        span:["hover"]
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(255, 255, 244, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(255, 255, 244, 1)'
      },
      keyframes:{
        'spin-reverse':{
          "0%":{transform: "rotate(0deg)"},
          "100%":{transform: "rotate(-360deg)"}
        }
      },
      animation:{
        "spin-slow": 'spin 40s linear infinite',
        "spin-slow-reverse": 'spin-reverse 40s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
