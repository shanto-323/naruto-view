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
    tokyoNight: {
      // Backgrounds — deeper, cooler-dark with a hint of purple-black
      bg:       "#13111a",   // was #1a1b26 → richer near-black with purple undertone
      bgDark:   "#0f0d14",   // was #16161e → deeper void
      bgLight:  "#1e1a2e",   // was #24283b → dark plum instead of blue-gray
      bgPopup:  "#251f35",   // was #292e42 → warm plum popup

      // Text — cooled slightly, less blue-tinted
      text:        "#c9b8d8",  // was #c0caf5 → soft lavender-white
      textMuted:   "#9d8fb0",  // was #a9b1d6 → muted mauve
      textBright:  "#e2d4f0",  // was #d5d6db → bright lavender-white
      textComment: "#5a4a6e",  // was #565f89 → dusty purple

      // UI
      border:      "#3d2f52",  // was #414868 → deep violet border
      borderLight: "#5c4478",  // was #565f89 → medium violet
      selection:   "#6b2d5e",  // was #364a82 → deep rose-magenta selection

      // Accent colors — shifted from blue-dominant to pink-dominant
      pink:     "#f7599e",   // NEW primary — hot rose pink (replaces blue as hero)
      rose:     "#e06c8a",   // NEW — softer dusty rose
      magenta:  "#c678b0",   // was #bb9af7 → warmer pink-magenta
      purple:   "#a67fcc",   // was #9d7cd8 → kept, slightly warmer
      cyan:     "#70c9c2",   // was #7dcfff → desaturated teal (accent only)
      green:    "#9ece6a",   // unchanged
      orange:   "#ff9e64",   // unchanged
      red:      "#f7768e",   // unchanged
      yellow:   "#e0af68",   // unchanged

      // blue is demoted — kept for rare utility use
      blue:     "#7b8fc7",   // was #7aa2f7 → desaturated, no longer dominant
    },
    brand: {
      400: "#f7599e",   // pink
      500: "#c678b0",   // magenta
    },
  },
  semanticTokens: {
    colors: {
      // Global
      'chakra-body-bg':   { default: 'white', _dark: 'tokyoNight.bg' },
      'chakra-body-text': { default: 'gray.800', _dark: 'tokyoNight.text' },

      // App colors
      'app.bg':    { default: 'white',    _dark: 'tokyoNight.bg' },
      'app.text':  { default: 'gray.800', _dark: 'tokyoNight.text' },
      'app.muted': { default: 'gray.600', _dark: 'tokyoNight.textMuted' },
      'app.hover': { default: 'pink.600', _dark: 'tokyoNight.pink' },  // pink hover

      // Hero
      'app.heroBg':      { default: 'gray.50',  _dark: 'tokyoNight.bgLight' },
      'app.heroBorder':  { default: 'gray.200', _dark: 'tokyoNight.border' },
      'app.heroHeading': { default: 'gray.900', _dark: 'tokyoNight.textBright' },
      'app.heroText':    { default: 'gray.700', _dark: 'tokyoNight.text' },

      // Social icons
      'app.socialBg':    { default: 'gray.100', _dark: 'tokyoNight.bgPopup' },
      'app.socialHover': { default: 'gray.200', _dark: 'tokyoNight.selection' },
    }
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        bg:         props.colorMode === 'dark' ? 'tokyoNight.bg' : 'white',
        color:      props.colorMode === 'dark' ? 'tokyoNight.text' : 'gray.800',
        fontFamily: `"JetBrains Mono", monospace`,
        minHeight:  '100vh',
        transition: 'background-color 0.3s, color 0.3s',
      },
      '::selection': {
        bg:    props.colorMode === 'dark' ? 'tokyoNight.selection' : 'pink.100',
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
          // pink on dark, rose on light
          color: props.colorMode === 'dark' ? 'tokyoNight.pink' : 'pink.600',
        }
      })
    },
    Heading: {
      baseStyle: (props: any) => ({
        color:      props.colorMode === 'dark' ? 'tokyoNight.textBright' : 'gray.900',
        fontFamily: `"Inter", system-ui, sans-serif`,
      })
    },
    Text: {
      baseStyle: (props: any) => ({
        color:      props.colorMode === 'dark' ? 'tokyoNight.text' : 'gray.700',
        fontFamily: `"JetBrains Mono", monospace`,
      })
    },
  },
  gradients: {
    primary:    'linear-gradient(135deg, #f7599e 0%, #a67fcc 100%)',  // pink → purple
    secondary:  'linear-gradient(135deg, #e06c8a 0%, #c678b0 100%)', // rose → magenta
    bluePurple: 'linear-gradient(to right, #7b8fc7, #a67fcc)',        // muted blue → purple
    sunset:     'linear-gradient(to right, #ff9e64, #f7599e)',        // orange → pink
    ocean:      'linear-gradient(to right, #70c9c2, #c678b0)',        // teal → magenta
  },
  radii: {
    xl:  "1rem",
    "2xl": "1.25rem",
  },
});