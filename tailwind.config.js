/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mandy: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#ea546c',
          600: '#d5294d',
          700: '#b31d3f',
          800: '#961b3c',
          900: '#811a39',
          950: '#48091a',
        },
        'purple-heart': {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d5',
          900: '#4b05ad',
          950: '#2c0076',
        },
        'green-haze': {
          50: '#f0fdf5',
          100: '#dcfceb',
          200: '#bbf7d7',
          300: '#86efb8',
          400: '#49df91',
          500: '#21c671',
          600: '#149954',
          700: '#158049',
          800: '#16653d',
          900: '#145334',
          950: '#052e1b',
        },
        'ebony-clay': {
          50: '#f1f6fd',
          100: '#e0ebf9',
          200: '#c8ddf5',
          300: '#a2c7ee',
          400: '#76a8e4',
          500: '#568adb',
          600: '#4170cf',
          700: '#385dbd',
          800: '#334c9a',
          900: '#2d427b',
          950: '#182039',
        },
        'waikawa-gray': {
          50: '#f2f7fb',
          100: '#e7f0f8',
          200: '#d3e2f2',
          300: '#b9cfe8',
          400: '#9cb6dd',
          500: '#839dd1',
          600: '#6a7fc1',
          700: '#6374ae',
          800: '#4a5989',
          900: '#414e6e',
          950: '#262c40',
        },
        'blue-chill': {
          50: '#f2f9f9',
          100: '#ddeff0',
          200: '#bfe0e2',
          300: '#92cace',
          400: '#5faab1',
          500: '#438e96',
          600: '#3b757f',
          700: '#356169',
          800: '#325158',
          900: '#2d464c',
          950: '#1a2c32',
        },
        lotus: {
          50: '#fbf5f5',
          100: '#f8e8e8',
          200: '#f3d5d5',
          300: '#e9b8b8',
          400: '#db8e8e',
          500: '#ca6969',
          600: '#b54d4d',
          700: '#973e3e',
          800: '#843939',
          900: '#6a3232',
          950: '#381717',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
