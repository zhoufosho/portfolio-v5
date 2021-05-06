import React from 'react';
import { Box } from "rebass";
import { Heading2, Paragraph, Container, Section, SiteHeader } from "./Components";

function Dogfooding() {
  return (
    <>
      <SiteHeader />
      <Section>
        <Container>
          <Box mt="40vh">
            <Heading2>
              Dogfooding
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

export default Dogfooding;
