import React from 'react';
import { Button, Text, Image, Link } from "rebass";
import { Flex, Box } from "reflexbox"
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, 
  Section, Footer } from "./Components";

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
    desc: "Creating and growing Quora's communities product",
    color: "white",
    image: "images/guitar-space.png",
    url: "/spaces",
    subheading: "2018 – 2019 · Quora",

  },
  {
    name: "Adventures in Making",
    desc: "Sewing clothes, making zines, and attempting pottery",
    color: "#82B3A4",
    image: "images/making.png",
    subheading: "2018 – present · Misc",
    subheading_color: "teal",    

  },
  // {
  //   name: "Dogfooding",
  //   desc: "Changes in process to elevate product quality",
  //   color: "#82B3A4",
  //   subheading: "2019 · Quora",
  //   subheading_color: "teal",
  //   url: "/dogfooding",
  //   image: "/images/dogfood-poster.png",
  // },
];

function Home() {
  return (
    <>
      <Section>
        <Container pt="40vh">
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
              },
              "cursor": !project.url && "not-allowed"
            }}>
              <Container>
                <Flex flexDirection={ index % 2 === 0 && "row-reverse"} flexWrap="wrap">
                  <Box mt="auto" px="small" width={[1, 0.6]}>
                    <Subheading color={project.subheading_color}>
                      {project.subheading}
                    </Subheading>
                    <Heading2>{project.name}</Heading2>
                    <Heading3>{project.desc}</Heading3>
                  </Box>
                  <Box mx="auto" px="small" width={[1, 0.4]}>
                    <Image src={project.image} />
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Link>
        </Section>)
      )}
      <Box py="xlarge">
        <Footer>made by elaine · 2020 </Footer>
      </Box>
    </>
  );
}

export default Home;
