import React from 'react';
import { Box, Button, Text, Flex, Image } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section, Strong, Footer, SiteHeader } from "./Components";

function Spaces() {
  return (
    <>
      <SiteHeader />
      <Section>
        <Container>
          <Box mt="40vh">
            <Heading2>
              Launching & Scaling Spaces
            </Heading2>
            <Box width={["80%", "70%"]}>
              <Paragraph>
                Coming Soon
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Spaces;
