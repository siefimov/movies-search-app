/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar'),
        require('prettier-plugin-tailwindcss')
    ],
};
