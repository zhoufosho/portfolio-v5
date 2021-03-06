import React from 'react';
import { Text, Image } from "rebass";
import { Flex, Box } from "reflexbox"
import { Subheading, Heading2, Heading3, 
  Paragraph, Container, Section, Strong, Footer, SiteHeader,
  StyledLink, MainAndSecondaryGrid, RegularWidth
} from "./Components";

function Spaces() {
  return (
    <>
      <SiteHeader />
      <Section>
        <Container>
          <Box mt="30vh">
            <Heading2 mb="large">
              Launching & Scaling Spaces
            </Heading2>
            <MainAndSecondaryGrid
              main={
                <Paragraph>
                  As Quora has scaled, it became more difficult to ask questions 
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
                  <br /><br /><br />
                  <Strong>Impact: </Strong>
                  Since launching a small alpha in late 2018, content generation has grown <Strong>50X</Strong>. 
                  The largest space has <Strong>>1M followers</Strong> (by comparison, the most followed user has ~500K followers). 
                  Users click on ~2M notifications about Spaces each week.
                </Paragraph>
              }
              mainWidth={0.75}
              secondary={
                <Text variant="subtext">
                  I’ve been leading product design (vision, design, aligning, scoping, writing code) on Spaces since 2018, 
                  with projects in between. <br /><br />
                  In 2018, we started with a 5-person team (2 engineers, 2 designers, 1 PM, 
                  1 data scientist). I was responsible for some facets of problem exploration. After 
                  deciding on a direction, I helped guide prioritization of our prototype,  
                  designing and coding the final prototype that we launched, managing design 
                  work, and cross-functional coordination and alignment. 
                  <br /><br />
                  Post launch in late 2018, Spaces has been integrated into the Core product team, where I have been working 
                  with a larger team of 5-8 engineers, 2-3 designers, 1-2 PMs, and 3 data scientists. I have been  
                  responsible for identifying opportunities for design impact, 
                  maintaining cross-functional coordination and alignment, and some IC work.
                </Text>
              }
            />
          </Box>
        </Container>
      </Section>


      <Section backgroundColor="bg_alt">
        <Container>
          <RegularWidth>
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
          </RegularWidth>
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
          <RegularWidth>
            <Box><Image src="/images/math-topic-page-2.png" /></Box>            
            <Footer>
              Above: Topic pages were becoming difficult to navigate – they had no visible goals
              <br /> and so many different contexts appearned on the same page
            </Footer>
          </RegularWidth>
          <RegularWidth>
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
            </RegularWidth>
        </Container>
      </Section>

      <Section>
        <Container>
          <RegularWidth>
            <Heading3>
              The Solution: Spaces (aka User-Defined Channels and Communities)
            </Heading3>
            <Paragraph>
              Before deciding to build a new product, our team began as an exploratory effort to understand and prototype a wide variety of
              of potential solutions. These ideas taught us a lot about the problem space and what solutions could and could not work. 
              Some highlighted ideas include: 
              <ul>
                <li><Strong>Ranking-only solutions</Strong>: Leverage machine learning to automatically assemble people who can answer it 
                (e.g. automatically group scientists so you can request answers from Scientists)</li>
                <li><Strong>Q&A-only groups product</Strong>: Use existing question and answer infrastructure and only certain people can ask or answer them</li>
                <li><Strong>Re-imagining existing topic boundaries</Strong>: Redraw and enforce shared norms for topic pages, a loosely boundaried product</li>
              </ul> 
              I led design work on exploring topic boundaries, and actively used and participated in discussions on the Q&A-only groups product and ranking solutions. 
              As we slowly started to understand that we were trying to build a communities product, I worked with user research to understand 
              what communities existed on Quora despite our lack of investment in them.
              <br /><br />
              Through user research insights and learnings from these various prototypes and ideas, 
              we determined the best way forward was none of these. Instead, we needed to create
              something where <Strong>users define the boundaries</Strong>. Hence, we ended up building Spaces.
              </Paragraph>
          </RegularWidth>
          <Box mb="huge" mt="large">
            <Box mb="medium"><Image src="/images/space-anatomy.png" /></Box>
            <Footer>
              Above: Anatomy of a space with general characteristics<br />
            </Footer>
          </Box>
          <RegularWidth width={["100%", "85%"]} mx="auto">
            <Paragraph>
              Although we initially imagined Spaces to be for an explicit groups/community use case, we realized that these same boundary problems
              existed for many other types of readers and writers (e.g. someone trying to start a brand, or curate existing content). 
              We found that some variation of Spaces could help them achieve their goals of sharing knowledge more effectively. <br /><br />
              Our goal is for Spaces to be flexible to a variety of use cases and scales. Here are some examples of Spaces that exist today –
            </Paragraph>
          </RegularWidth>
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

      <Section backgroundColor="bg_alt" id="roles">
        <Container>
          <RegularWidth>
            <Heading3>
              Roles & Permissions: Setting Group Expectations 
            </Heading3>
            <Box>
              <Paragraph>
                Since Spaces are user-defined boundaries, we needed to set up a way for users to 
                define the context and norms of the Space. 
                When we first launched, it was important that there were trusted contributors 
                such that the content produced in Spaces would be high quality and they were not overwhelmed 
                with people jumping into without context. 
                We started with three roles – 
                <ul>
                  <li><Strong>Admin</Strong> (only one) - can invite all other roles, block users, 
                  change settings, remove content from the Space</li>
                  <li><Strong>Contributors</Strong> - can add content</li>
                  <li><Strong>Followers</Strong> - can consume and interact with content (e.g. comment, upvote)
                  </li>
                </ul>
                <br />
                After launching <StyledLink href="#submissions">Submissions</StyledLink>, it was clear that 
                admins needed more help running a Space – the single admin model was failing as Spaces started 
                to scale. <br /><br />
                In late 2018, I led a small team of myself and 1 engineer to rethink these roles and permissions, 
                trying to tackle how to <Strong>support people running a space</Strong>. 
                We introduced a new role, added an admin log, and added badges to recognize the status of these 
                people running a Space. In this project, we added and expanded on: 
                <ul>
                  <li><Strong>Admins</Strong> - can invite and remove all other roles, 
                  change settings, delete the Space, and everything else moderators can do
                  </li>
                  <li><Strong>Moderators</Strong> – can invite and remove contributors and followers, can block 
                  people from the space, manage submissions, and remove content from the Space</li>
                  <li><Strong>Contributors</Strong> - can post without permission</li>
                </ul>
              </Paragraph>           
            </Box>
            <Box>
              <Flex>
                <Box><Image src="/images/cred-and-badges.png" /></Box>
                <Box><Image src="/images/admin-log.png" /></Box>
              </Flex>
              <Footer>
                Left: Badges make admins and moderators more easily recognizable and increases their perceived reputation<br />
                Right: All actions taken in the Space are recorded in the admin log to increase accountability and awareness 
                amongst various people managing the Space
              </Footer>
            </Box>
          </RegularWidth>
        </Container>
      </Section>

      <Section>
        <Container>
          <RegularWidth>
            <Heading3>
              Leveraging Posts: Moving beyond Q&A
            </Heading3>
            <Box>
              <Paragraph>
                One learning I took away from the early prototypes was that Quora questions are extremely extremely complicated. 
                More importantly – from a user perspective, questions and answers may be too restrictive in the types of content you can create. For example, 
                users may need time to discuss, debate, and figure out what their norms and practices are, and it feels too awkward and formal to ask a question like 
                "What are our norms?". 
                <br /><br />
                In our first build of Spaces, I proposed our team to focus exclusively on freeform posts and to ignore questions entirely. 
                The team had already built out some version of question integration, but I pushed to remove all question features and restart from scratch.  
                This allowed us to focus our time developing <StyledLink href="#roles">roles</StyledLink>, building out invite mechanics, 
                and exploring models for <StyledLink href="#notifs">notifications & feed</StyledLink>.
                Before launch, we followed up on integrating questions and links; 
                however, starting with posts made a lot of the initial assumptions much easier. 
                (Spoiler: In 2020, I consolidated links and posts while working on the <StyledLink href="/composer">composer</StyledLink>)
                <br /><br />
                <Strong>Impact</Strong>: Before we started investing in other content types in 2019,
                posts and links respectively made up <Strong>60%</Strong> and <Strong>12%</Strong> of content added to Spaces. <br /><br />
              </Paragraph>
            </Box>
          </RegularWidth>
          <Box>
            <Box><Image src="/images/content-types.png" /></Box>
            <Footer>
              Above: Non-Spaces Quora allows content in the form of Q&A and links. In Spaces, you can add freeform posts.
            </Footer>
          </Box>
        </Container>
      </Section>

      
      <Section backgroundColor="bg_alt" id="notifs">
        <Container>
          <RegularWidth>
            <Heading3>
              Notifications & Feed: Surfacing the Best Content, in Real-Time
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
                  <br /><br />
                  In 2019, I led a project with 1 engineer and 1 data scientist to run an experiment introducing a content sorting to 
                  enable larger spaces to surface the best content to the top. My main role was aligning stakeholders on what the 
                  heuristics should be used in the sort. In 2019, I also designed and implemented an experiment 
                  to test an optimized notification landing experience.  
                  <br /><br />
                  <Strong>Impact</Strong>: The notification experiment increased active minutes on the Space page by ~90%. 
                  Sorting the space page increased space content added by ~25%.
              </Paragraph>
            </Box>
          </RegularWidth>
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
          <Box mx="auto" width={0.7} pt="large">
            <Box><Image src="/images/notif-injection.png" /></Box>
            <Footer>
              Above: By injecting the notification at the top of the Space page after clicking through, Space page active minutes increased ~90%.
            </Footer>
          </Box>
        </Container>
      </Section>


      <Section>
        <Container>
          <RegularWidth>
            <Heading3>
              Space Questions: Bounding Context
            </Heading3>
            <Box>
              <Paragraph>
                
              </Paragraph>
            </Box>
          </RegularWidth>
          <Box mt="large">
            <Flex flexWrap="wrap">
              <Box width={[2/3]}><Image src="/images/questions-in-space.png" /></Box>
              <Box width={[1/3]}><Image src="/images/space-question-page.png" /></Box>
            </Flex>
            <Footer>
              Left: Now the Space provides context – the questions are specific to the video game Red Dead Rodeo (and not hunting in real life)<br />
              Right: Question followers only get answers written by space contributors or approved by space moderators
            </Footer>
          </Box>
        </Container>
      </Section>

      <Section id="submissions" backgroundColor="bg_alt">
        <Container>
          <RegularWidth>
            <Heading3> 
              Submissions: Increasing Content and Potential Contributors  
            </Heading3>
            <MainAndSecondaryGrid
              main={
                <Paragraph>
                  Unlike most groups products, Spaces has very strong in-/out- group dynamics. 
                  After launching, I realized the restriction on content contribution was one of the 
                  biggest bottlenecks for growth.
                  <br /><br />
                  I identified the opportunity to tackle the question:
                  how might we <Strong>enable more people to contribute</Strong> while maintaining 
                  boundaries and trust of the Space community? 
                  <br /><br />
                  In early 2019, I led a small team of 1 other designer and 2 engineers to launch 
                  Submissions for Spaces. With submissions, anyone can submit content to the space. 
                  Once the submission is approved, this content appears in the space and is eligible to be sent 
                  in notifications. 
                  <br /><br />
                  By launching of Submissions, our goals were: 
                  <ul>
                    <li>Increase content added to Spaces </li>
                    <li>Enable more people to contribute to Spaces </li>
                    <li>Long term, increase number of regular contributors to Spaces </li>
                    <li>Enable moderators and admins to find more engaged and qualified contributors </li>
                  </ul>
                  <br />
                  <Strong>Impact</Strong>: ~25% of spaces content today comes from Submissions
                </Paragraph>
              }
              mainWidth={0.65}
              secondary={
                <Box alignSelf="center">
                  <Box><Image src="/images/submissions.png" /></Box>
                  <Footer>
                    Above: admin/moderator view for handling submissioins
                  </Footer>
                </Box>
              }
            />
          </RegularWidth>
        </Container>
      </Section>

      <Section>
        <Container>
          <RegularWidth>
            <Heading3> 
              Suggestions: Augmenting with Content from Other Sources
            </Heading3>
            <Box>
              <Paragraph>
                One of the biggest painpoints we heard over and over was that it was difficult to 
                find quality content. We started asking: how might we 
                <Strong> help source content </Strong>for Spaces?
                <br /><br />
                In early 2019, we had a unique opportunity working with many digital publishers. Some were looking to  
                increase their clicks and views in an easy, set-it-and-forget-it way, whereas 
                others wanted to take this as an opportunity to try building their audience on Quora. 
                Using RSS feeds as a generalizable framework that publishers are familiar with, 
                we wanted to build integrations to support both types of clients. 

                <br /><br />
                For RSS links on Spaces, I led the product vision, did IC design work, and wrote front-end code to 
                launch RSS link suggestions. I worked with 1 engineer and 2 members from our writer-relations 
                team to launch Spaces with publishing partners in the US and India, almost all of which 
                are still on Quora today.
                <br /><br />
                <Strong>Impact</Strong>: Two months after launch, ~43% of spaces content came from 
                publisher spaces.

                <br /><br />
              </Paragraph>
              <Box>
                <Box><Image src="/images/rss-publisher-spaces.png" /></Box>
                <Footer>
                  Left: With answer suggestions, users can find existing content on Quora to share to their space<br />
                  Right: With link suggestions, users can connect RSS feeds to their space and share links
                </Footer>
              </Box>
              <Paragraph>
                <br /><br />
                An ongoing challenge for Spaces was: how might we <Strong>help contributors find content 
                to add to Spaces</Strong> without having to hunt across the internet? 
                <br /><br />
                In mid/late 2019, we decided to leverage the giant repository of answers on Quora, 
                and provide our users with a list of suggested answers to share. To implement this quickly, 
                we realized the RSS feature could be expanded to include answer sharing. 
                I guided product direction using the framework and principles I had previously established 
                to help the team of 1 PM and 1 engineer launch answer suggestions.
                <br /><br />
                Our goals with Suggestions were:
                <ul>
                  <li>Reduce friction of sharing content from on- and off-Quora by integrating it into the product</li>
                  <li>Increase ease of curation by suggesting answers that our machine learning models think are share-worthy </li>
                </ul>
                <Strong>Impact</Strong>: ~19% of spaces content today comes from Suggestions
                <br /><br />
              </Paragraph>
            </Box>
          </RegularWidth>
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
    </>
  );
}

export default Spaces;
