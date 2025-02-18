module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                multicontroller: ['multicontroller', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}