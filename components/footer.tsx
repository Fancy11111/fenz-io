import ContactMe from "./contact-me"
import { Container, Heading, Flex} from "@chakra-ui/react"
import Section from "./section";

const Footer = () => {
  return (
  <Container display="flex" p={2} maxW="container.md" wrap="wrap" alignItems="center" justifyContent="center">
    <Section>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h3" variant="section-title">
          Contact me
        </Heading> 
        <ContactMe />
      </Flex>
    </Section>
  </Container>
  )
}

export default Footer;