import { Container, Text, Heading, Divider } from "@chakra-ui/layout"
import Section from "../components/section";

const Datenschutz = () => {
 return ( 
    <Container maxW={{base: 'container.sm', xl: 'container.md'}}>
      <br />
      <Heading as="h1">Datenschutzerklärung</Heading>
      <Heading as="h3">Datenschutz</Heading>
      <Text>
        Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. 
        Aus diesem Grund möchten wir Sie über den Umgang mit Ihren Daten informieren. 
        Die Datenschutzerklärung gilt für diese Website und die damit zusammenhängenden Unterseiten, 
        nicht jedoch für Websites, die von Dritten kontrolliert oder betrieben werden.
      </Text>
      <Divider/>
      <Section>
        <Heading as="h3">Cookies</Heading>
        <Text>Auf dieser Website werden keine Cookies abgespeichert.</Text>
      </Section>
    </Container>
  )
}

export default Datenschutz;