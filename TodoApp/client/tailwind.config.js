/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('../Auth.jpg')",
        notFound: "url('../not-found.svg')",
        geo3d: "url('../3dgeo.svg')",
      },
    },
  },
  plugins: [],
};
