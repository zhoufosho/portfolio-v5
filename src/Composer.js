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
              Simplifying Content Creation
            </Heading2>
            <Flex>
              <Box mr="large" width={["80%", "70%"]}>
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
              <Box ml="large" width={["100%", "30%"]}>
                <Text variant="subtext">
                  I led and executed product design on the composer (vision, UI design, aligning) for 
                  the first half of 2020. 
                  <br /><br />
                  I worked with 1 product engineer, 1 front-end engineer, and 1 iOS engineer. 
                  Here, I was responsible for coming up with the vision of the composer, facilitating 
                  cross-functional coordination to build a React prototype, presenting the vision to 
                  the executive team, and managing cross-functional coordination to (soon!) release 
                  the experience on iOS. 
                </Text>
              </Box>
            </Flex>
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
                What does it mean to be lightweight? Currently, adding an image requires 3 clicks 
                and every post requires both a title and a body. 
                In this vein, lightweight means making it easier to add short posts and image-based content.
                <br /><br />
                However, it is not clear how to add images and short posts. 
                What was the existing state of content types? 
                <ol>
                  <li><Strong>Confusing content types</Strong>
                    <br />
                    Each content type has its own rules and they are not mutually exclusive. For example, you can add a link to a post
                    or add a link by itself. They have different rules, render differently, and it was not clear to users when to use each type. 
                  </li>
                  <li><Strong>Too many types constantly slowed us down</Strong>
                    <br />
                      At the start of this project, there were four distinct content types. 
                      Whenever we wanted to change or add something,
                      we had to design it, build it, and figure out ML models four times.
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
                The final solution I show below 
                <br /><br />
                I oriented my solution towards: 
                <ul>
                  <li>Fewer, more flexible content types</li>
                  <li>Reducing requirements </li>
                  <li>Reducing friction: removing clicks to start creating, removing clicks to create what you want</li>
                </ul>
                  
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            <Image src="/images/composer-final.png" />
            <Footer>
              From L to R: how to open the composer, start creating, and switch types if needed
            </Footer>
          </Box>
        </Container>
      </Section>
      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto" mt="huge">
            <Heading3>
            Design Decisions & Details
            </Heading3>
            <Subheading mt="large">Consolidating posts and links</Subheading>
            <Paragraph>
              Previously, because you could add links to posts, it was very confusing to 
              users when to compose the Link type versus the Post type. There are some 
              engineering constraints where we still want to keep the technical infrastructure for 
              links. <br /><br />
              I designed the link adding experience of Posts to be similar to that of Links, essentially 
              keeping them to be one unified experience in the front-end, even if the backend is different.
              <br />
            </Paragraph>
          </Box>
          <Box mb="small">
            <Flex>
              <Box mr="large"><Image src="/images/post-and-link.png" /></Box>
              <Box ml="large"><Image src="/images/consolidated-post.png" /></Box>
            </Flex>
            <Footer>
              Left: You can create the same content in two different ways with different experiences <br />
              Right: Solution to consolidate Link and Post experiences
            </Footer>
          </Box>
          <Box width={["100%", "85%"]} mx="auto" mt="huge">
            <Subheading>
              De-emphasizing formatting
            </Subheading>
            <Paragraph>
              Because Quora centered on long-form content, there was often a need to add formatting 
              in order to break up text into more legible chunks. On desktop and mobile web (not pictured), 
              we show the formatting options by default! When creating shorter content, having these formatting options 
              may distract from writing or nudge people towards creating longer content that is necessary. 
              <br /><br />
              In my solution, I combined all formatting into one menu and behind a click, so the focus is on the 
              content itself.
              <br />
            </Paragraph>
          </Box>
          <Box>
            <Flex>
              <Box mr="small"><Image src="/images/original-toolbar.png" /></Box>
              <Box><Image src="/images/composer-toolbar.png" /></Box>
            </Flex>
            <Footer>
              Left: original editor toolbar with two different formatting menus<br />
              Right: solution to combine all formatting into one menu
            </Footer>
          </Box>
          <Box width={["100%", "85%"]} mx="auto" mt="huge">
            <Subheading>
              Default to adding posts without titles
            </Subheading>
            <Flex>
              <Box mr="large">
                <Paragraph>
                  Having a title makes content feel more formal and that friction may reduce content added. 
                  However, we don't want to remove titles in the product. For example, there are 
                  Spaces that are effectively used as blogs, for which it is important to allow adding a title. 
                  <br /><br />
                  Here, I tried de-emphasizing the importance of titles, but still providing a way to add titles 
                  when needed.
                </Paragraph>
              </Box>
              <Box width="95%" ml="large"><Image src="/images/title-adding.png" /></Box>
            </Flex>
          </Box>
          <Box width={["100%", "85%"]} mx="auto" mt="huge">
            <Subheading>
              Easier image handling
            </Subheading>
            <Paragraph>
              As part of improving the ability to add images, I also updated the interaction to remove images. 
              Previously, it took 3 clicks after opening the composer to add an image – crazily enough, we saw an increase 
              in spaces content that was purely image-based! Despite this friction, there was demand for easier image adding. 
              The old editor also used desktop-based metaphors like selecting and hitting delete to remove an image. 
              <br /><br />
              In my solution, I used a close button and added an image gallery to support add images with one-click.
            </Paragraph>
          </Box>
          <Box>
            <Flex>
              <Box mr="medium"><Image src="/images/old-image-adding.png" /></Box>
              <Box><Image src="/images/image-adding.png" /></Box>
            </Flex>
            <Footer mt="tiny">
              Left: Adding an image with 3 clicks after opening, hitting delete to remove an image <br />
              Right: Adding an image with 1 click, using mobile-friendly buttons to remove images
            </Footer>
          </Box>
            <Box mt="huge">
              <iframe frameBorder="0" style={{ 
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                  }}
              width="375" height="715" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Faw3MvuC2eNf2YQaIFKN1LQ%2FLWC-Composer-Q1-Q2-2020%3Fnode-id%3D155%253A3769%26viewport%3D-935%252C-469%252C0.2638188898563385%26scaling%3Dmin-zoom&chrome=DOCUMENTATION"
              allowfullscreen></iframe>
            </Box>
        </Container>
      </Section>
      <Section>
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
          <Box mt="huge">
            <Image src="/images/toggle-explorations.png" />
            <Footer>
              Above: Various explorations on how to toggle between posts and questions
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
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
