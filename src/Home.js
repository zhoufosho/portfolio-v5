import React from 'react';
import { Image, Link } from "rebass";
import { Box } from "reflexbox"
import { Heading1, Subheading, Heading2, Paragraph,
  Container, Section, Footer } from "./Components";

const Projects = [
  {
    name: "Simplifying content creation",
    desc: "Reducing complexity and enabling lightweight content",
    color: "accent",
    image: "images/composer-preview.png",
    url: "/composer",
    subheading: "2020 · Quora",
    subheading_color: "purple",
  },
  {
    name: "Launching and scaling Spaces",
    desc: "Creating an engagement-driven product loop",
    color: "white",
    image: "images/spaces-preview.png",
    url: "/spaces",
    subheading: "2018 – 2020 · Quora",

  }
];

function Home() {
  return (
    <>
      <Section>
        <Container pt="25vh">
          <Heading1>i'm elaine</Heading1>
          <Box width="70%">
            <Paragraph>
              I love working in complex problem spaces to create simple solutions. 
              I enjoy making diagrams and collaborating with others to drive insights.
              You’ll often find me talking with my hands. 
              <br /><br />
              
              Currently: freelancing<br />
              Previously: Design Lead & Manager at Quora. 
              
            </Paragraph>
          </Box>
          <Paragraph>

          </Paragraph>
        </Container>
      </Section>
      
      {Projects.map((project, index) => 
        (<Section>
          <Link href={project.url}>
            <Box sx={{
              ":hover": {
                transform: "translate(-4px, -4px)"
              },
              "cursor": !project.url && "not-allowed"
            }}>
              <Container>
                <Box mx="auto" mb="small">
                  <Box mb="large"> 
                    <Image src={project.image} />
                  </Box>
                  <Heading2>{project.name}</Heading2>
                  <Paragraph>{project.desc}</Paragraph>                  
                  <Subheading>
                    {project.subheading}
                  </Subheading>
                </Box>
              </Container>
            </Box>
          </Link>
        </Section>)
      )}
      <Box py="xlarge">
        <Footer>made by elaine </Footer>
      </Box>
    </>
  );
}

export default Home;
