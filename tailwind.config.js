/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/public/images/Service_Page_Images/service_page_images.png')",
        "card-img1": "url('./src/assets/images/homepage/Maskgroup2.png')",
        "carve-img":
          "url('./src/assets/images/homepage/photo-handsome-male-student-his-female-groupmate-demonstrates-okay-gesture-agree-with-something_1-removebg-preview 1.png')",
        "card-img2": "url('./src/assets/images/homepage/Rectangle1355.png')",
      },
    },
  },
  plugins: [],
};

