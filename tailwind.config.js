const _ = require("lodash");
const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors:{ 
                "bookmark-purple": "#5267DF",
                "bookmark-red": "#FA5959",
                "bookmark-blue": "#242A45",
                "bookmark-grey": "#9194A2",
                "bookmark-white": "#f7f7f7"},
            fontFamily: {
                Poppins: ["Poppins, sans-serif"],
              },
              container: {
                center: true,
                padding: "1rem",
                screens: {
                  lg: "1124px",
                  xl: "1124px",
                  "2xl": "1124px",
                }, 
              }
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        },
        
    },
    plugins: [
        tailpress.tailwind
    ],
    
};
