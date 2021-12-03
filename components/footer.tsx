import ContactMe from "./contact-me"
import { Container, Heading, Flex, Link, Stack, StackDivider} from "@chakra-ui/react"
import Section from "./section";
import NextLink from 'next/link';

const Footer = () => {
  return (
  <Container mt={10}>
    <Section>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h3" variant="section-title">
          Contact me
        </Heading> 
        <ContactMe />
      </Flex>
    </Section>
    <Section>
      <Stack direction="row" align="center" justify="center" divider={<StackDivider borderColor="#00000000" />}>
        <NextLink passHref href="/impressum">
          <Link>
            Impressum
          </Link>
        </NextLink>
        <NextLink passHref href="/datenschutz">
          <Link>
            Datenschutz
          </Link>
        </NextLink>
      </Stack>
    </Section>
  </Container>
  )
}

export default Footer;