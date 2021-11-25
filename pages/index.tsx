import { Container, Box, Image, Heading, Link } from '@chakra-ui/react';
import Section from '../components/section';
import { TimelineItem, Timeline } from '../components/timeline';

const Page = () => {
  const introText = 'Hi, I\'m Daniel, a software engineer(ing student) from Austria'
  return (
    <Container>
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
        <TimelineItem time="2014-2019" description="HTBLuVA Wr. Neustadt">
          <p>
            From 2014 to 2019 I visited HTBLuVA Wr.Neustadt. 
            It is a vocational high school with focus on Informatics.
            I was taught Python, Java, C#, C++, Javascript, SQL Server, Oracle Server, SQL Server and basics of project management.
          </p>
        </TimelineItem>
        <TimelineItem time="2020-" description="Bsc. Software & Information Engineering @ TU Wien">
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
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Education
        </Heading> 
        <Timeline>
          <TimelineItem time="2019-09 - 2019-12" description="moonsoft HR solutions">Lorem</TimelineItem>
          <TimelineItem time="2020-01 - 2020-06" description="Austria Military Service">Lorem</TimelineItem>
        </Timeline>
      </Section>
    </Container>
  )
}

export default Page;