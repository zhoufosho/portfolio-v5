import React from 'react';
import { Box, Button, Text, Flex } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section } from "./Components";

const Projects = [
  {
    name: "Composer",
    desc: "Simplifying content types to increase content-gen",
    color: "accent",
  },
  {
    name: "Quora Spaces",
    desc: "Enabling context as content scales",
    color: "white",

  },
  {
    name: "Dogfooding",
    desc: "Changes in process to elevate product quality",
    color: "#82B3A4"
  },
];

function Home() {
  return (
    <>
      <Section pt="giant">
        <Container>
          <Subheading color="primary">HELLO!</Subheading>
          <Heading1>i like humans & <br /> solving their problems</Heading1>
          <Paragraph color="muted">(well, trying!)</Paragraph>
          <Heading3 color="muted">elaine zhou · product designer @quora </Heading3>
        </Container>
      </Section>
      
      {Projects.map((project, index) => 
        (<Section bg={project.color}>
          <Container>
            <Flex flexDirection={ index % 2 === 0 && "row-reverse"}>
              <Box>
                <Heading2>{project.name}</Heading2>
                <Heading3>{project.desc}</Heading3>
              </Box>
            </Flex>
          </Container>
        </Section>)
      )}

      <Container pt="huge">
        <Heading1>This is a Title</Heading1>
        <Subheading>Subtitle</Subheading>
        <Paragraph>lorem ipsum lorem ipsum lorem ipsum </Paragraph>
        <Heading2>This is a smaller title</Heading2>
        <Paragraph>lorem ipsum lorem ipsum lorem ipsum </Paragraph>
        <Button>Beep</Button>
      </Container>
    </>
  );
}

export default Home;
