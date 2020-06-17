import React from 'react';
import { Box, Button, Text, Flex, Image } from "rebass";
import { Heading1, Subheading, Heading2, Heading3, Paragraph, Container, Section, Strong, Footer, SiteHeader, Italic } from "./Components";

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
                <br /><br />
                Since this project has spanned multiple teams and quarters, below I will highlight 
                some of the key projects and product areas that I was most heavily involved in.
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
                hundreds of countries and dozens of languages, it has become harder to 
                understand the subtext and expectations behind a question. <br /><br />

                How might we <Strong>prevent context collapse</Strong> to more effectively share knowledge?<br /><br />
              </Paragraph>
            </Box>
          </Box>
          <Box mb="large">
            <Flex>
              <Box><Image src="/images/irrelevant-answers.png" /></Box>
              <Box><Image src="/images/question-context.png" /></Box>
            </Flex>
            <Footer>
              Left: As our userbase grows, the "best" answer is harder to define and is dependent on your tastes <br />
              Right: Askers specify context for their question (e.g. repeating the name of a video game)
            </Footer>
          </Box>
          <Box mb="huge" width={["100%", "85%"]} mx="auto">
            <Box><Image src="/images/math-topic-page-2.png" /></Box>            
            <Footer>
              Above: Topic pages were becoming difficult to navigate – they had no visible goals
              <br /> and so many different contexts appearned on the same page
            </Footer>
          </Box>
          <Box width={["100%", "85%"]} mx="auto">
            <Paragraph>
              Context collapse affects the experience of many personas, which limits the success of the platform.
                <ul>
                  <li>
                    For askers, asking questions becomes more cumbersome and it is harder to good answers
                  </li>
                  <li>
                    For writers, your answer might not be relevant to the asker
                  </li>
                  <li>
                    For readers, it is more difficult to find content that is relevant to you
                  </li>
                  <li>
                    For the platform, it becomes harder for us to deliver on all sides of this promise
                  </li>
                </ul>
                Here are some other examples of hidden context that is difficult to detect –
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
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              The Solution: Spaces (aka User-Defined Channels and Communities)
            </Heading3>
            <Paragraph>
              Before deciding to build a new product, we started on an exploratory effort to understand and prototype a wide variety of
              of potential solutions. These ideas taught us a lot about the problem space and what solutions could and could not work.<br /><br />
              Some highlighted ideas include: 
              <ul>
                <li>Ranking-only solutions: Leverage machine learning to automatically assemble people who can answer it 
                (e.g. automatically group scientists so you can request answers from Scientists)</li>
                <li>Q&A-based Groups product: Use existing question and answer infrastructure and only certain people can ask or answer them</li>
                <li>Re-imagining existing "boundaries" (e.g. topic page): Re-use existing interest-based follow graphs to redraw and enforce shared norms </li>
              </ul> 
              Through these various prototypes and ideas, we determined the best way forward was none of these. Instead, we needed to create
              a product where users decide where the boundaries were. Hence, we ended up building Spaces.
              </Paragraph>
          </Box>
          <Box mb="huge" mt="large">
            <Box mb="medium"><Image src="/images/space-anatomy.png" /></Box>
            <Footer>
              Above: Anatomy of a space with general characteristics<br />
            </Footer>
          </Box>
          <Box width={["100%", "85%"]} mx="auto">
            <Paragraph>
              Although we initially imagined Spaces to be for an explicit groups/community use case, we realized that these same boundary problems
              existed for many other types of readers and writers (e.g. someone trying to start a brand, or curate existing content). 
              We found that some variation of Spaces could help them achieve their goals of sharing knowledge more effectively. <br /><br />
              Our goal is for Spaces to be flexible to a variety of use cases and scales. Here are some examples of Spaces that exist today –
            </Paragraph>
          </Box>
          <Box mb="huge">
            <Box mb="medium"><Image src="/images/space-sampling.png" /></Box>
            <Footer>
              Various spaces that exist in the product today. Use-cases range range from connecting over
              shared interests or identity, curating content, building up an audience, reaching experts, discussing 
              with like-minded folks, and more<br />
            </Footer>
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
                goal. These groups of people tend to coordinate better if there are clearly defined
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
            <Box width={["85%", "70%"]} mx="auto">
              <Image src="/images/cred-and-badges.png" />   
              <Footer>
                Left: Badges for admins and moderators give reputation to the author<br />
                Right: Customizable space credibility allows for more granular expression
              </Footer>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3>
              Enabling Posts: Moving beyond Q&A
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
              Space Questions: Bounding Context
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            <Flex alignSelf="center">
              <Box width="60%" mx="auto"><Image src="/images/questions-in-space.png" /></Box>
            </Flex>
            <Footer>
              Above: Now, the Space provides context – the questions are specific to the video game Red Dead Rodeo (and not, e.g. in real life)
            </Footer>
          </Box>
          <Box mt="large">
            <Flex alignSelf="center">
              <Box><Image src="/images/space-question-stories.png" /></Box>
              <Box><Image src="/images/space-question-page.png" /></Box>
            </Flex>
            <Footer>
              Left: How questions appear in home feed (left) and on the space page (right) <br />
              Right: Question followers only get answers written by space contributors or approved by space moderators
            </Footer>
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
                  Prior to Spaces, Quora users rarely received any notifications – 
                  most engagement came in the form of receiving and reading Digest emails.   
                  Outside of Spaces, only 6% of users receive on average more than one notif per week.
                  With Digest emails, we had to rank massive sets of answers related to topics that users 
                  were interested in to find a few that were relevant. This problem became harder
                  as our content scaled. 
                  <br /><br />
                  However, since Spaces allow users to define content boundaries, the likelihood of something
                  being more relevant is much higher. The speed of content through the system 
                  flows much faster, so we have to shift our mode of interaction from email -> to feed and notifications.
              </Paragraph>
            </Box>
          </Box>
          <Box mt="large">
            <Flex alignSelf="center">
              <Box><Image src="/images/notif-picker.png" /></Box>
              <Box><Image src="/images/feed-sort.png" /></Box>
            </Flex>
            <Footer>
              Left: By default, users receive highlight notifs trained by machine learning models. Users can change their notification frequency.<br />
              Right: By default, the Top sort surfaces the best content based on audience votes. Users can change their default to Recent for real-time updates
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3> 
              Submissions: Increasing Content and Potential Contributors  
            </Heading3>
            <Flex alignSelf="center">
              <Box width={["auto"]}>
                <Paragraph>
                  Unlike other groups products, Spaces has very strong in-/out- group dynamics. However, through 
                  user research, we found one of the biggest bottlenecks for growth is finding and vetting contributors. <br /><br />
                  We started with the question:  
                  how might we <Strong>enable more people to become contributors </Strong>to spaces?
                  <br /><br />
                  With Sumissions, we hoped to:
                  <ul>
                    <li>Increase content in the long-run by providing </li>
                    <li>Enable moderators and admins to find more engaged and qualified contributors </li>
                  </ul>
                </Paragraph>
                </Box>
                <Box ml="large"><Image src="/images/submissions.png" /></Box>
            </Flex>
            <Footer>
              Above: Followers can submit content to the space. Once the submission is approved, <br />this content 
              appears in the space and potentially in future notifications.
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3> 
              Suggestions: Augmenting with Content from Other Sources
            </Heading3>
            <Box>
              <Paragraph>
                One of the biggest painpoints we heard over and over was that it was difficult to 
                find quality content. We started with the question:  
                how might we <Strong>help admins source content </Strong>for their spaces?
                <br /><br />
                With Suggestions, we hoped to:
                <ul>
                  <li>Reduce friction of sharing content from off-Quora by integrating it into the product</li>
                  <li>Increase ease of curation by suggesting answers that our machine learning models think are share-worthy </li>
                </ul>
              </Paragraph>
            </Box>
          </Box>
          <Box>
            <Flex alignSelf="center">
              <Box><Image src="/images/suggestions-answer.png" /></Box>
              <Box><Image src="/images/suggestions-link.png" /></Box>
            </Flex>
            <Footer>
              Left: With answer suggestions, users can find existing content on Quora to share to their space<br />
              Right: With link suggestions, users can connect RSS feeds to their space and share links
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="bg_alt">
        <Container>
          <Box width={["100%", "85%"]} mx="auto">
            <Heading3> 
              Measuring Success
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Spaces;
