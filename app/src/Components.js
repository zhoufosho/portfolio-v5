import React from "react";
import { Box, Flex, Heading, Text, Image } from "rebass";

export const Heading1 = props => {
  return <Text variant="heading" {...props} />;
};

export const Subheading = props => {
  return <Text variant="subheading" {...props} />;
};

export const Heading2 = props => {
  return <Text variant="heading2" {...props} />;
};

export const Heading3 = props => {
  return (
    <Text variant="heading3" {...props} />
  );
};

export const Paragraph = ({ children }) => {
  return (
    <Text
      variant="body"
      color={"muted"}
      sx={{ "-webkit-font-smoothing": "antialiased" }}
    >
      {children}
    </Text>
  );
};