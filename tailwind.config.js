/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-gradient-right": "#496DC7",
        "linear-gradient-left": "#6C99F1",
        "introduction-box-bg-color": "#B37AED",
        "react-color": " #61DBFB",
        "typescript-color": " #3178C6",
        "github-color": "#333",
        "nodejs-color": "#3c873A",
      },
      backgroundImage: {
        "my-gradient": "linear-gradient(to right, #496DC7, #6C99F1)",
        "middle-gradient":
          "linear-gradient(to right, #5c6bc0, #42a5f5,  #5c6bc0)",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
