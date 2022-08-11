import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitch,
  FaTwitter
} from 'react-icons/fa'

type ContactBoxProps = {
  href: string
  icon: JSX.Element
}

const ContactBox = ({ href, icon }: ContactBoxProps) => {
  // ;<IconButton
  //   icon={icon}
  //   aria-label="social media link"
  //   color={useColorModeValue('primaryDark', 'primaryLight')}
  // ></IconButton>
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="p-3 text-emerald-800 dark:text-emerald-200 rounded-lg bg-opacity-40 dark:bg-opacity-30 hover:dark:bg-opacity-30 bg-gray-300 hover:bg-gray-400 dark:bg-gray-300 hover:dark:bg-gray-100 transition-colors">
        <i>{icon}</i>
      </div>
    </a>
  )
}

const ContactMe = () => {
  //  divider={
  //       <StackDivider
  //         borderColor={useColorModeValue('secondary', 'secondaryLight')}
  //       />
  //     }
  const hspace = (
    <div className="w-0 mx-4 border border-black dark:border-white"></div>
  )
  return (
    <div className="flex flex-row align-center justify-center">
      <ContactBox href="mailTo:daniel@fenz.io" icon={<FaEnvelope />} />
      {hspace}
      <ContactBox
        href="https://www.instagram.com/dafenz/"
        icon={<FaInstagram />}
      />
      {hspace}
      <ContactBox href="https://twitter.com/FancyFenzi" icon={<FaTwitter />} />
      {hspace}
      <ContactBox href="https://www.twitch.tv/dann_y" icon={<FaTwitch />} />
      {hspace}
      <ContactBox
        href="https://www.linkedin.com/in/daniel-fenz-2b462b15a/"
        icon={<FaLinkedin />}
      />
      {hspace}
      <ContactBox
        href="https://open.spotify.com/user/dann_yy?si=osRSn3HUSVKrXW0SQpDjfA&nd=1"
        icon={<FaSpotify />}
      />
    </div>
  )
}

export default ContactMe
