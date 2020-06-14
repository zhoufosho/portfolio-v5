import React from 'react';
import { Box, Button, Text, Flex, Image } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section, Strong, Footer, SiteHeader } from "./Components";

function Composer() {
  return (
    <>
      <SiteHeader />
      <Section>
        <Container>
          <Box mt="40vh">
            <Heading2>
              Simplifying content creation
            </Heading2>
            <Box width={["80%", "70%"]}>
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
                In this project, I focused on creating a composer that <Strong>simplifies existing content types </Strong>
                and <Strong>enables lightweight content creation</Strong>.
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Why a new composer? 
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
              Above: How to add three of the five possible content types from the composer. <br />
              Each varies in visual style and mechanics, and each is owned by different teams.
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              The Solution: Posts and Questions 
            </Heading3>
            <Box>
              <Paragraph>
                  
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            <Image src="/images/composer-question-post.png" />
            <Footer>
              From L to R: how to open the composer, start creating, and switch types if needed
            </Footer>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Composer;
