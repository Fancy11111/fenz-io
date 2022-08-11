import Section from '../components/section'

const Datenschutz = () => {
  return (
    <div className="container-sm xl:container-md">
      <br />
      <h1>Datenschutzerklärung</h1>
      <h3>Datenschutz</h3>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. Aus
        diesem Grund möchten wir Sie über den Umgang mit Ihren Daten
        informieren. Die Datenschutzerklärung gilt für diese Website und die
        damit zusammenhängenden Unterseiten, nicht jedoch für Websites, die von
        Dritten kontrolliert oder betrieben werden.
      </p>
      <hr />
      <Section>
        <h3>Cookies</h3>
        <p>Auf dieser Website werden keine Cookies abgespeichert.</p>
      </Section>
    </div>
  )
}

export default Datenschutz
