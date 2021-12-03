import { Container, Text, Link } from "@chakra-ui/layout"

const Impressum = () => {
  return (

    <Container maxW={{base: 'container.sm', xl: 'container.md'}}>
      <br />
      <Text>Daniel Fenz</Text>
      {
        //<Text>Getreidegasse 14, 2824 Schiltern, Austria</Text>
      }
      <Text>Software Dienstleistungen</Text>
      <Text><Link href="mailto:daniel@fenz.io">daniel@fenz.io</Link></Text>
      <Text>UID-Nr: </Text>
      <Text>Mitglied der WKÖ, WKNÖ</Text>
      <Text>Berufsrecht: Freies Gewerbe (Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik)</Text>
      <Text>Bezirkshauptmannschaft Neunkirchen</Text>
      <Text>
        Verbraucher haben die Möglichkeit,
        Beschwerden an die Online Streitbeilegungsplattform der EU zu richten:
        <Link href="http://ec.europa.eu/odr" target="_blank"> http://ec.europa.eu/odr</Link>.
        Sie können allfällige Beschwerde auch an die
        oben angegebene E-Mail-Adresse richten.
      </Text>
    </Container>
  )
}

export default Impressum;