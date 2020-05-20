// example theme.js
export default {
  fontSizes: {
    small: 12, 
    regular: 15, 
    large: 20,
    xlarge: 28, 
    xxlarge: 40, 
    giant: 60,
  },
  colors: {
    background: "white",
    bg_alt: "#f8f8f8",
    primary: "#333333",
    accent: "#F1CDC8",
    muted: "#999999",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "Karla-Regular, system-ui, sans-serif",
    heading: "Karla-Bold",
    monospace: "PTMono, monospace"
  },
  lineHeights: {
    body: 1.8,
    heading: 1.25
  },
  text: {
    heading: {
      fontFamily: "heading",
      color: "primary",
      fontSize: "xxlarge",
      mt: 4,
      mb: 2
    },
    subheading: {
      fontFamily: "monospace",
      color: "muted",
      fontSize: "large",
    },
    heading2: {
      color: "primary",
      fontSize: "xlarge",
      fontFamily: "heading",
    },
    heading3: {
      color: "primary",
      fontSize: "large",
      fontFamily: "heading",
    },
    body: {
      fontFamily: "body",
      color: "body",
      lineHeight: "body",
      fontSize: "regular",
      mb: 3
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "accent"
    }
  }
};