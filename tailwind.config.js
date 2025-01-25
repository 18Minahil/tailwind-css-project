/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./main.js'],
  theme: {
    screens:{
        sm:"340",
        md:"540",
        lg:"768",
        xl:"1180",
    },
    extend: {
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
      },
    },
  
    fontFamily:{
      Lobster:["Lobster", "serif"],
      Jost:["Jost", "serif"]
    },
      container:{
        center:true,
        padding:{
          DEFAULT:"12px",
          md:"32px"
        }
      
      }

    },
    plugins: [],
  }
 

