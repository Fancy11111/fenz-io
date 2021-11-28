import ContactMe from "./contact-me"
import { Container, Heading, Flex} from "@chakra-ui/react"
import Section from "./section";

const Footer = () => {
  return (
  <Container mt={10}>
    <Heading as="h3" variant="section-title">
      Contact me
    </Heading> 
    <Section>
      <Flex direction="column" align="center" justify="center">
        <ContactMe />
      </Flex>
    </Section>
  </Container>
  )
}

export default Footer;