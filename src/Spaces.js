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
                As Quora as scaled, it became more difficult to ask questions 
                and get satisfactory answers. We believed this was due to 
                context collapse – lack of predictable audience expectations. 
                <br /><br />
                In early 2018, I focused on researching the problem and prototyping
                various product explorations that creates boundaries
                in order  to support more contextual interactions. Once we felt 
                confident in a product direction, we <Strong>launched a communities product </Strong>
                in late 2018. Since then, our team has been focusing on
                <Strong> scaling content generation</Strong>.
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>


      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Hidden Context 
            </Heading3>
            <Box>
              <Paragraph>
                Quora promises the "best answer to any question". As the 
                product has scaled to 300M+ monthly active uniques across 
                hundreds of countries and languages, it has become harder to 
                understand the subtext and expectations behind a question. 

                <ul>
                  <li>
                    As an asker, it becomes more difficult to get a good answer to your question.
                  </li>
                  <li>
                    As a writer, your answer might not be relevant to the asker
                  </li>
                  <li>
                    As a platform, it became harder for us to deliver on both sides of this promise.
                  </li>
                </ul>
                How might we create boundaries to more effectively share knowledge?
                <br /><br />
                Here are some examples of hidden context that is difficult to express –
                <br /><br />
                <Box width={["100%", "85%"]} mx="auto">
                  <Subheading mb={0}>(For someone that shares my taste in movies)</Subheading>
                  <Heading3>What are the best movies of 2018?</Heading3>

                  <Subheading mb={0}>(For someone who is a beginner)</Subheading>
                  <Heading3>What are the best chess openings? </Heading3>

                  <Subheading mb={0}>(For someone who thinks rationally like I do)</Subheading>
                  <Heading3>Does aloe vera help with sunburn?</Heading3>
                </Box>
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Spaces: User-Defined Channels and Communities  
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Roles & Permissions: Setting Group Expectations
            </Heading3>
            <Box>
              <Paragraph>
                Spaces intend to bring together a group of people towards a common 
                goal. Teams tend to function better if there are clearly defined
                roles, and we set out to create those in the product. 
                <ul>
                  <li><Strong>Owner</Strong> - can invite and remove all other roles (including admins), 
                  transfer ownership of the Space, change settings, delete the Space, 
                  everything else that an admin can do
                  </li>
                  <li><Strong>Admin</Strong> - can invite and remove moderators, contributors, and followers, 
                  can block users, change settings, manage submissions
                  </li>
                  <li><Strong>Moderator</Strong> – can invite and remove contributors and followers, can block, and manage submissions
                  </li>
                  <li><Strong>Contributor</Strong> - can post without approval
                  </li>
                </ul>
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Notifications & Feed: Emphasizing Real-Time Content
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3> 
              Submissions: accepting content from and engaging more people
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3> 
              Suggestions: augmenting from other content sources 
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>

      Roles
      - User research 
      - Visual and interaction design 
      - Front-end development 

      Timeline 
      Feb 2018 – present

      Team 
      Kelvin Ho (product manager)
      Alex Francis (product manager)
      Jessie Duan (engineering manager)
      Ioana Tamas (product engineer)
      Pam Anderson (product engineer)
      Howard Bai (product engineer)
      Raymond Yin (product engineer)  
      Diana Gerr (product designer)
      Abhinav Sharma (product designer)
      Yuanchen Jiang (brand designer)
      Yin-han Wang (user researcher)



      - User-defined boundaries 

      Roles & Permissions

      Admin Controls 

      Scoped to Space 


      - Flexible

      Design for supporting a range of scales and use-cases: single-author blogs, 
      multi-contributor forums, mini quoras centered around q&a, 
      collections of answers, and more. 

      Enabling various content types 
      Instead of supporting bespoke content types and building out, I optimized for 

      Granular Settings

      Easy Defaults 


      - Engaging 

      Notifications and feed

      The rest of Quora focuses on utilizing email and SEO as drivers, meaning


      Emojis, gifs, and more! 

      Distinct identity

      *** FEATURES ***

      - Roles & Permissions: 
        - Admins / Moderators
        - Space Credentials 

      - Notifications & Feed: prioritizing real-time content
        - Personalized notifications 
        - 
        - Clickthrough experience

      - Submissions: accepting content from more people 

      - Suggestions: sharing from other content sources 



      - Measuring Success 
    </>
  );
}

export default Spaces;
