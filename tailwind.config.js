module.exports = {
    mode: 'jit',
    purge: [
        './templates/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                plex: "'IBM Plex Sans', sans-serif",
                rubik: "'Rubik', sans-serif",
                roboto: "'Roboto', sans-serif",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

