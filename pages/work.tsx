import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import tgi from '../public/tgi-pages.png';
import rmood from '../public/rmlogo.svg';

const Work = () => {
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h1" fontSize={20} mb={4}>
        Employments
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="moonsoft" title="Moonsoft">
            A complete HR solution, including time management, organigrams, payroll calculation and more.
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={tgi}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
      <Divider mb={4}/>
      <Heading as="h1" fontSize={20} mb={4}>
        Freelancing
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="robin-mood" title="robin mood" thumbnail={rmood}>
            An employee satisfaction survey tool
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Divider mb={4}/>
      <Heading as="h1" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="tgi-pages" title="TGI-Pages" thumbnail={tgi}>
            A collection of tools to help students through the course 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
    </Container>
  </Layout>
  )
}

export default Work;