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
        'glass-inset': 'inset 5px 8px 18px 0px rgba(183, 110, 121, .35)',
        'glass-sm': '5px 5px 15px 5px rgba(183, 110, 121, 1)'
      },
      backgroundImage:{
        'particle-radial': "radial-gradient(50% 50% at 50% 50% rgba(120, 81, 169, .5)0%, rgba(255, 255, 244, 1)100%"
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
