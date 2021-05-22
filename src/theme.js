// example theme.js
export default {
  fontSizes: {
    small: 13, 
    regular: 18, 
    large: 20,
    xlarge: 24, 
    xxlarge: 32, 
    giant: 70,
  },
  colors: {
    background: "white",
    bg_alt: "#f8f8f8",
    primary: "#333333",
    accent: "#F1CDC8",
    sage: "#84B7A7",
    teal: "#1E5466",
    purple: "#733F5D",
    secondary: "#666666",
    muted: "#999999",
    gray_ultradark: "#32323C",
    gray_dark: "#737680",
    gray_medium: "#B8BABF",
    gray_light: "#E2E5EA",
    gray_ultralight: "#F6F8FA",
  },
  space: {
    n_large: -20,
    n_medium: -15,
    n_small: -10,
    n_tiny: -5,
    tiny: 5, 
    small: 10,
    medium: 15,
    large: 20, 
    xlarge: 30,
    xxlarge: 50,
    huge: 100,
    giant: 200,
  },
  fonts: {
    body: "Karla-Regular, system-ui, sans-serif",
    heading: "Tiempos-Text-Semibold, system-ui, sans-serif",
    title: "Tiempos-Headline, system-ui, sans-serif",
    monospace: "PTMono-Regular, monospace"
  },
  fontWeight: {
    bold: "600",
  },
  lineHeights: {
    body: 1.7,
    small_heading: 1.5,
    heading: 1.2,
    huge_heading: 0.95,
  },
  breakpoints: ["40em", "52em", "64em"],
  borderRadius: {
    small: 4,
    medium: 10,
    circle: "100%",
  },
  borderColor: {
    muted: "muted",
    primary: "primary",
    accent: "accent",
  },
  text: {
    heading: {
      fontFamily: "title",
      color: "primary",
      fontSize: ["xlarge", "xxlarge", "giant"],
      mt: "medium",
      mb: "small",
      lineHeight: ["heading", "huge_heading"]
    },
    subheading: {
      fontFamily: "monospace",
      color: "muted",
      mb: "medium",
      lineHeight: "1.4",
    },
    heading2: {
      fontFamily: "heading",
      color: "primary",
      fontSize: ["large", "xlarge"],
      mb: "small",
    },
    heading3: {
      color: "primary",
      fontSize: ["large", "xlarge"],
      fontFamily: "body",
      mb: "medium",
    },
    heading4: {
      color: "gray_dark",
      fontSize: ["medium", "large"],
      fontFamily: "body",
      mb: "medium",
      lineHeight: "small_heading"
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: "regular",
      mb: "small",
    },
    subtext: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: "small",
      mb: "small",
      color: "muted",
    },
    footer: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: "small",
      mb: "tiny",
      color: "secondary",
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "accent"
    }
  },
};