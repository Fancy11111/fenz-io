const Impressum = () => {
  return (
    <div className="container-sm xl:container-md">
      <br />
      <p>Daniel Fenz</p>
      {
        //<p>Getreidegasse 14, 2824 Schiltern, Austria</p>
      }
      <p>Software Dienstleistungen</p>
      <p>
        <a href="mailto:daniel@fenz.io">daniel@fenz.io</a>
      </p>
      <p>UID-Nr: </p>
      <p>Mitglied der WKÖ, WKNÖ</p>
      <p>
        Berufsrecht: Freies Gewerbe (Dienstleistungen in der automatischen
        Datenverarbeitung und Informationstechnik)
      </p>
      <p>Bezirkshauptmannschaft Neunkirchen</p>
      <p>
        Verbraucher haben die Möglichkeit, Beschwerden an die Online
        Streitbeilegungsplattform der EU zu richten:
        <a href="http://ec.europa.eu/odr" target="_blank" rel="noreferrer">
          {' '}
          http://ec.europa.eu/odr
        </a>
        . Sie können allfällige Beschwerde auch an die oben angegebene
        E-Mail-Adresse richten.
      </p>
    </div>
  )
}

export default Impressum
