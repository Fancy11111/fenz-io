
import { Container, Box, Image, Heading, Link, Flex, AspectRatio, Text } from '@chakra-ui/react';
import Card from '../components/card';
import Section from '../components/section';
import BlogPreview from '../components/blog/blog-preview';
import { TimelineItem, Timeline } from '../components/timeline';
import NextLink from 'next/link';

const Page = () => {
  const introText = 'Hi, I\'m Daniel, a software engineer(ing student) from Austria'
  return (
    <Container w="container.xl">
      <Box borderRadius="lg" bg="primary" p={3} mb={6} align="center">
        {introText}
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2">Daniel Fenz</Heading>
          <p>Software Engineer (Frontend, Backend) and Music Enthusiast</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
          <Image 
            borderWidth={2} 
            borderStyle="none" 
            display="inline-block" 
            maxW="100px" 
            borderRadius="full" 
            src="/me.png"
            alt="Image of myself"
          />
        </Box>
      </Box>
      <Section>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Timeline>

          <TimelineItem time="2014-2019" description="HTBLuVA Wr. Neustadt">
            <p>
              From 2014 to 2019 I visited HTBLuVA Wr.Neustadt. 
              It is a vocational high school with focus on Informatics.
              I was taught Python, Java, C#, C++, Javascript, SQL Server, Oracle Server, SQL Server and basics of project management.
            </p>
          </TimelineItem>
          <TimelineItem time="2020-now" description="TU Wien">
            <p>
              In September of 2020 I started my Bachelor in <Link 
                href="https://www.tuwien.at/en/studies/studies/bachelor-programmes/computer-science-and-business-informatics#c290809" 
                target="_blank" 
                hrefPass
              > Software & Information Engineering </Link> 
              at <Link href="https://www.tuwien.at/en/tu-wien" hrefPass>TU Wien</Link>
              The course of study provides education in the basics of 
              Software Engineering, 
              Databases, 
              Operating System, 
              Algorithms and Datastructures, 
              programming paradigms (procedural, functional, object oriented and declarative), 
              Distributed Systems and
              Security and Project Management.
            </p>
          </TimelineItem>
        </Timeline>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Work
        </Heading> 
        <Timeline>
          <TimelineItem time="2019-09 - 2019-12" description="moonsoft HR Solutions">
            Working as a backend developer at <Link href="http://www.moonsoft.at/" hrefPass target="_blank">moonsoft HR Solutions</Link>.
            Tech Stack: C#, Oracle SQL and SQL Developer, a lot of proprietary build tools and a custom ORM.
            Tasks included things like 
            building an employee questioning system, 
            creating a system to create rules to update collective agreement contracts based on customizable rulesets,
            improving an existing job system.
          </TimelineItem>
          <TimelineItem time="2020-01 - 2020-06" description="Austria Military Service">
            Doing my mandatory military service at the Austrian Military Service
          </TimelineItem>
          <TimelineItem time="2020-07 - 2021-12" description="moonsoft HR Solutions">
            Working as a backend developer at <Link href="http://www.moonsoft.at/" hrefPass target="_blank">moonsoft HR Solutions</Link>.
            Tech Stack: C#, Oracle SQL and SQL Developer, a lot of proprietary build tools and a custom ORM.
            Tasks included things like 
            building an employee questioning system, 
            creating a system to create rules to update collective agreement contracts based on customizable rulesets,
            improving an existing job system.
          </TimelineItem>
          <TimelineItem time="2022-01 - future" description="Freelance">
            Working for Friendly Captcha
          </TimelineItem>
        </Timeline>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading> 
        <Flex direction={{base:'column', md:'row'}} wrap="wrap" justify="space-between" align="center">
          <Card title="Me" text="Yep, that's me. You probably wondered how I ended up here"> 
            <AspectRatio ratio={16/9}>
              <Image src="/me.png"  alt="Image of me"/>
            </AspectRatio>
          </Card>
          <Card title="Robin Mood" text="An assortment of little tools to help students through introductory IT lectures"> 
            <AspectRatio ratio={5.8/1}>
              <Image src="/rmlogo.svg"  alt="Robin Mood logo"/>
            </AspectRatio>
          </Card>
          <Card title="TGI Pages" text="An assortment of tools to help students in introductory IT lectures"> 
            <AspectRatio ratio={16/9}>
              <Image src="/tgi-pages.png"  alt="TGI Pages Logo"/>
            </AspectRatio>
          </Card>
        </Flex>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Blog
        </Heading> 
        <Section><Text>See my latest Blog Post down below or click <NextLink href="/blog">here</NextLink> to search through them</Text></Section>
        <BlogPreview limit={1} skip={0} />
      </Section>
      {/*  */}
    </Container>
  )
}

export default Page;