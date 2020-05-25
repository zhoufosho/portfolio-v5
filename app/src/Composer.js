import React from 'react';
import { Box, Button, Text, Flex, Image } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section, Strong, Footer } from "./Components";

function Composer() {
  return (
    <>
      <Section>
        <Container>
          <Box mt="40vh">
            <Heading2>
              Composer
            </Heading2>
            <Box width="60%">
              <Paragraph>
                Quora's mission is to share and grow the world's knowledge. For nearly the first 
                decade on the platform, all of the knowledge existed in the form of questions 
                and answers. 
                <br /><br />
                With the launch of Spaces and a new engagement strategy, it was becoming evident that 
                our historical focus on Q&A and long-form content was limiting our growth. At Quora, 
                content types are very difficult to change because of all the ranking 
                and engineering infrastructure that are built into them. Instead of reusing what exists, 
                it is easier to create new ones.
                <br /><br />
                In this project, I focused on creating a composer that <Strong>enables lightweight content creation</Strong>;
                in the process we <Strong>simplified existing content types</Strong>.
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width="75%" mx="auto">
            <Subheading size="small">
              Context
            </Subheading>
            <Heading3>
              Why design a new composer? 
            </Heading3>
            <Box>
              <Paragraph>
                The composer is usually a reflection of company priorities and its quirks are often symptomatic of deep-seeded design decisions.
                What was the existing state? 
                <ol>
                  <li><Strong>Too many types constantly slowed us down</Strong>
                    <br />
                      When I started this project, there were 5 distinct content types. Whenever we wanted to change or add something,
                      we had to design it for five distinct cases, and build it in those five places.
                  </li>
                  <li><Strong>Formal, long-form content increases barrier to contribute</Strong>
                    <br />
                    Asking and answering questions on Quora is already relatively intimidating – 
                    now there is added complexity with users needing to understand the difference between a question, a post, 
                    a link, a share, and an answer, and the rules for each of them.
                  </li>
                </ol>
              </Paragraph>
            </Box>
          </Box>
          <Box>
            <Image src="/images/composer-state.png" />
            <Footer>
              Above: How to add three of the five possible content types from the composer. Each has a different visual style
              and mechanics
            </Footer>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Composer;
