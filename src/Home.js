import React from 'react';
import { Box, Button, Text, Flex, Image, Link } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section, Footer } from "./Components";

const Projects = [
  {
    name: "Simplifying Content Creation",
    desc: "Reducing complexity and enabling lightweight content",
    color: "accent",
    image: "/images/rounded-composer.png",
    url: "/composer",
    subheading: "2020 – present · Quora",
    subheading_color: "purple",
  },
  {
    name: "Launching & Scaling Spaces",
    desc: "Enabling context as content scales",
    color: "white",
    image: "images/round-launched-spaces.gif",
    url: "/spaces",
    subheading: "2018 – 2019 · Quora",

  },
  {
    name: "Dogfooding",
    desc: "Changes in process to elevate product quality",
    color: "#82B3A4",
    subheading: "2019 · Quora",
    subheading_color: "teal",
    url: "/dogfooding",
    image: "/images/dogfood-poster.png",
  },
];

function Home() {
  return (
    <>
      <Section pt="40vh">
        <Container>
          <Heading1>i like humans & <br /> solving their problems</Heading1>
          <Heading3 color="muted">elaine zhou · product design lead @quora </Heading3>
        </Container>
      </Section>
      
      {Projects.map((project, index) => 
        (<Section bg={project.color}>
          <Link href={project.url}>
            <Box sx={{
              ":hover": {
                transform: "translate(-2px, -2px)"
              }
            }}>
              <Container>
                <Flex flexDirection={ index % 2 === 0 && "row-reverse"}>
                  <Box mt="auto" mx="small" flexBasis="110%">
                    <Subheading color={project.subheading_color}>
                      {project.subheading}
                    </Subheading>
                    <Heading2>{project.name}</Heading2>
                    <Heading3>{project.desc}</Heading3>
                  </Box>
                  <Box mx="auto" mx="small" flexBasis="80%">
                    <Image src={project.image} />
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Link>
        </Section>)
      )}
      <Section py="xlarge">
        <Footer>made by elaine · 2020 </Footer>
      </Section>
    </>
  );
}

export default Home;
