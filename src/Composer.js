import React from 'react';
import { Box, Button, Text, Flex, Image, Link } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, 
  Paragraph, Container, Section, Strong, Footer, SiteHeader,
  StyledLink
} from "./Components";

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
                With the launch of <StyledLink href="/spaces">Spaces</StyledLink> and a new engagement strategy, it was becoming evident that 
                our historical focus on Q&A and long-form content was limiting our growth. 
                At Quora, content types are very difficult to change because of all the ranking 
                and engineering infrastructure that are built into them. Instead of reusing what exists, 
                it is easier to create new ones – this created an explosion of content
                types that made it difficult for users to understand for us to maintain.
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
                The original motivation for working on the composer was to make content creation more lightweight. 
                Lightweight, meaning easier to add shorter posts and image-based content. In the current world, 
                adding an image required 3 clicks and every post required a title and a body. 
                <br /><br />
                However, it is not immediately clear how to make image adding easier. What was the existing state of content types? 
                <ol>
                  <li><Strong>Confusing content types</Strong>
                    <br />
                    Each content type has its own rules and they are not mutually exclusive. For example, you can add a link to a post
                    or add a link by itself. They have different rules, render differently, and it was not clear to users when to use each type. 
                  </li>
                  <li><Strong>Too many types constantly slowed us down</Strong>
                    <br />
                      When I started this project, there were four distinct content types. Whenever we wanted to change or add something,
                      we had to design it, build it, and rank it four times.
                  </li>
                  <li><Strong>Bias towards formal, long-form content</Strong>
                    <br />
                    Quora's emphasis has always been on long-form content, questions, and answers. However, with higher context of people
                    contributing within Spaces – we should allow shorter, easier to produce content to thrive. 
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
              The Solution: Leveraging Posts
            </Heading3>
            <Box>
              <Paragraph>
                  
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            <Image src="/images/composer-final.png" />
            <Footer>
              From L to R: how to open the composer, start creating, and switch types if needed
            </Footer>
          </Box>
          <Box width={["100%", "85%"]} mx="auto">
            <Paragraph>
              <Strong>Consolidating posts and links</Strong>
            </Paragraph>
            <Paragraph>
              <Strong>De-emphasizing formatting</Strong>
            </Paragraph>
            <Paragraph>
              <Strong>Allowing posts without titles</Strong>
            </Paragraph>
            <Paragraph>
              <Strong>Easier image adding</Strong>
            </Paragraph>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Other Explorations
            </Heading3>
            <Box>
              <Paragraph>
                  
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large" mx="auto" width="75%">
            <Image src="/images/option-select-composer.png" />
            <Footer>
              Above: Consolidating entrypoints and allowing user to choose a type <br />
              However, this does not scale to more types and creates friction
              in figuring out which one to add.
            </Footer>
          </Box>
          <Box mt="huge">
            <Image src="/images/composer-single-entrypoint.png" />
            <Footer>
              Above: Tap-to-start-typing reduces cognition overload from having to choosing a type. <br />
              However, forcing everything to be oriented around a title creates confusion on what is a title vs body
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Future Work: Bringing Q&A-like Dynamics to Posts
            </Heading3>
            <Box>
              <Paragraph>
                  
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Composer;
