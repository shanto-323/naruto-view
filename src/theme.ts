import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,

    fonts: {
        heading: `"Inter", system-ui, sans-serif`,
        body: `"JetBrains Mono", monospace`,
    },

    colors: {
        // Remove nested "colors" object
        tokyoNight: {
            // Backgrounds
            bg: "#1a1b26",
            bgDark: "#16161e",
            bgLight: "#24283b",
            bgPopup: "#292e42",

            // Text
            text: "#c0caf5",
            textMuted: "#a9b1d6",
            textBright: "#d5d6db",
            textComment: "#565f89",

            // UI
            border: "#414868",
            borderLight: "#565f89",
            selection: "#364a82",

            // Accent colors
            blue: "#7aa2f7",
            cyan: "#7dcfff",
            green: "#9ece6a",
            magenta: "#bb9af7",
            orange: "#ff9e64",
            red: "#f7768e",
            yellow: "#e0af68",
            purple: "#9d7cd8",
        },
        brand: {
            400: "#63b3ed",
            500: "#4299e1",
        },
    },

    semanticTokens: {
        colors: {
            // Global
            'chakra-body-bg': { default: 'white', _dark: 'tokyoNight.bg' },
            'chakra-body-text': { default: 'gray.800', _dark: 'tokyoNight.text' },

            // App colors - Light/Dark versions
            'app.bg': { default: 'white', _dark: 'tokyoNight.bg' },
            'app.text': { default: 'gray.800', _dark: 'tokyoNight.text' },
            'app.muted': { default: 'gray.600', _dark: 'tokyoNight.textMuted' },
            'app.hover': { default: 'blue.600', _dark: 'tokyoNight.blue' },

            // Hero
            'app.heroBg': { default: 'gray.50', _dark: 'tokyoNight.bgLight' },
            'app.heroBorder': { default: 'gray.200', _dark: 'tokyoNight.border' },
            'app.heroHeading': { default: 'gray.900', _dark: 'tokyoNight.textBright' },
            'app.heroText': { default: 'gray.700', _dark: 'tokyoNight.text' },

            // Social icons
            'app.socialBg': { default: 'gray.100', _dark: 'tokyoNight.bgPopup' },
            'app.socialHover': { default: 'gray.200', _dark: 'tokyoNight.selection' },
        }
    },

    styles: {
        global: (props: any) => ({
            'html, body': {
                bg: props.colorMode === 'dark' ? 'tokyoNight.bg' : 'white',
                color: props.colorMode === 'dark' ? 'tokyoNight.text' : 'gray.800',
                fontFamily: `"JetBrains Mono", monospace`,
                minHeight: '100vh',
                transition: 'background-color 0.3s, color 0.3s',
            },
            '::selection': {
                bg: props.colorMode === 'dark' ? 'tokyoNight.selection' : 'blue.100',
                color: props.colorMode === 'dark' ? 'tokyoNight.textBright' : 'gray.900',
            },
        })
    },

    components: {
        Container: {
            baseStyle: {
                maxW: 'container.xl',
                px: { base: 4, md: 6, lg: 8 },
            }
        },
        Link: {
            baseStyle: (props: any) => ({
                _hover: {
                    textDecoration: 'none',
                    color: props.colorMode === 'dark' ? 'tokyoNight.blue' : 'blue.600',
                }
            })
        },
        Heading: {
            baseStyle: (props: any) => ({
                color: props.colorMode === 'dark' ? 'tokyoNight.textBright' : 'gray.900',
                fontFamily: `"Inter", system-ui, sans-serif`,
            })
        },
        Text: {
            baseStyle: (props: any) => ({
                color: props.colorMode === 'dark' ? 'tokyoNight.text' : 'gray.700',
                fontFamily: `"JetBrains Mono", monospace`,
            })
        },
    },

    gradients: {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        bluePurple: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        sunset: 'linear-gradient(to right, #f59e0b, #ec4899)',
        ocean: 'linear-gradient(to right, #06b6d4, #3b82f6)',
    },

    radii: {
        xl: "1rem",
        "2xl": "1.25rem",
    },
});