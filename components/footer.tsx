import ContactMe from './contact-me'
import Section from './section'
import NextLink from 'next/link'
import { HSpacer } from './spacer'

const Footer = () => {
  return (
    <div className="mt-10">
      <Section>
        <div className="flex flex-col align-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-200">
            Contact me
          </h3>
          <ContactMe />
        </div>
      </Section>
      <hr className="my-2" />
      <Section>
        <div className="flex flex-row w-full align-center justify-center text-lg font-medium text-gray-700 dark:text-gray-200">
          <NextLink passHref href="/impressum">
            Impressum
          </NextLink>
          <HSpacer />
          <NextLink passHref href="/datenschutz">
            Datenschutz
          </NextLink>
        </div>
      </Section>
    </div>
  )
}

export default Footer
