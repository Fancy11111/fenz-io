import ContactMe from './contact-me'
import Section from './section'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <div className="mt-10">
      <Section>
        <div className="flex flex-col align-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">Contact me</h3>
          <ContactMe />
        </div>
      </Section>
      <Section>
        <div className="flex flex-row align-center justify-center">
          <NextLink passHref href="/impressum">
            Impressum
          </NextLink>
          <NextLink passHref href="/datenschutz">
            Datenschutz
          </NextLink>
        </div>
      </Section>
    </div>
  )
}

export default Footer
