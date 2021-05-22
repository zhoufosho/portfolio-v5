import React from 'react';
import { Image, Link } from "rebass";
import { Box } from "reflexbox"
import { Heading1, Subheading, Heading2, Paragraph,
  Container, Section, Footer } from "./Components";

const Projects = [
  {
    name: "Simplifying content creation",
    desc: "Reducing complexity and enabling lightweight content",
    color: "#E8EAFF",
    image: "images/composer-preview.png",
    url: "/composer",
    subheading: "2020 · Quora",
    subheading_color: "purple",
  },
  {
    name: "Launching and scaling Spaces",
    desc: "Creating an engagement-driven product loop",
    color: "#FFECE5",
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
            <Paragraph mt="medium">
              I love working in complex problem spaces to create simple solutions. 
              I enjoy making diagrams and collaborating with others to drive insights.
              You’ll often find me talking with my hands. 
            </Paragraph>
            <Paragraph mt="medium">
              Currently: Freelancing<br />
              Previously: Design Lead & Manager at Quora
            </Paragraph>
          </Box>
          <Paragraph>

          </Paragraph>
        </Container>
      </Section>
      
      {Projects.map((project, index) => 
        (<Section>
          <Link href={project.url}>
            <Box 
            className="hoverBox"
            sx={{
              ":hover": {
                transform: "translate(-2px, -2px)"
              },
              "cursor": !project.url && "not-allowed"
            }}>
              <Container>
                <Box mx="auto" mb="small">
                  <Box mb="large"> 
                    <Image src={project.image} />
                  </Box>
                  <Heading2>{project.name}</Heading2>
                  <Box 
                    className="hoverBoxColorStrip"
                    marginTop="n_large"
                    marginLeft="n_tiny"
                    height="10px"
                    display="none"
                    style={{
                      position: "absolute",
                      zIndex: "-1",
                      backgroundColor: project.color,
                      width: "70%",
                      maxWidth: "360px",
                    }}
                  /> 
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
        <Footer>made by elaine · 2021 </Footer>
      </Box>
    </>
  );
}

export default Home;
