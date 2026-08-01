module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend: {
            colors: {
                'dark': '#1D1F1F',
                'darker': '#0E0F0F',
                'danger': '#AE0A0A',
                'primary-dark': 'var(--color-primary-dark)',
                'custom-primary': '#6366f1',
                'custom-secondary': '#8b5cf6',
            },
            spacing: {
                '3.75': '15px',
                '7.5': '30px',
            },
            borderRadius: {
                'large': '22px',
                'big': '40px',
                'DEFAULT': '.75rem',
            },
            boxShadow: {
                'default': '5px 10px 30px #2B2D340D;',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [
        require('@salla.sa/twilight-tailwind-theme'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
