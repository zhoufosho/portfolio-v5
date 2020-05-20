import React from 'react';
import logo from './logo.svg';
import { Box, Button, Text } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph } from "./Components";
import './App.css';

function App() {
  return (
    <Box>
      <Heading1>This is a Title</Heading1>
      <Subheading>Subtitle</Subheading>
      <Paragraph>lorem ipsum lorem ipsum lorem ipsum </Paragraph>
      <Heading2>This is a smaller title</Heading2>
      <Paragraph>lorem ipsum lorem ipsum lorem ipsum </Paragraph>
      <Button>Beep</Button>
    </Box>
  );
}

export default App;
