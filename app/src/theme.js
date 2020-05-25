// example theme.js
export default {
  fontSizes: {
    small: 12, 
    regular: 16, 
    large: 20,
    xlarge: 24, 
    xxlarge: 40, 
    giant: 70,
  },
  colors: {
    background: "white",
    bg_alt: "#f8f8f8",
    primary: "#333333",
    accent: "#F1CDC8",
    secondary: "#777777",
    muted: "#999999",
  },
  space: {
    tiny: 5, 
    small: 10,
    medium: 15,
    large: 20, 
    xlarge: 40,
    huge: 100,
    giant: 200,
  },
  fonts: {
    body: "Karla-Regular, system-ui, sans-serif",
    heading: "Karla-Bold",
    monospace: "PTMono-Regular, monospace"
  },
  fontWeight: {
    bold: "600",
  },
  lineHeights: {
    body: 1.8,
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
      fontFamily: "heading",
      color: "primary",
      fontSize: ["xlarge", "xxlarge", "giant"],
      mt: "medium",
      mb: "small",
      lineHeight: ["heading", "huge_heading"]
    },
    subheading: {
      fontFamily: "monospace",
      color: "muted",
      mb: "tiny",
    },
    heading2: {
      color: "primary",
      fontSize: ["large", "xlarge", "xxlarge"],
      fontFamily: "heading",
      mb: "medium",
    },
    heading3: {
      color: "primary",
      fontSize: ["medium", "large"],
      fontFamily: "body",
      mb: "medium",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: "regular",
      mb: "small",
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