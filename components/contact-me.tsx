import { StackDivider, Link, IconButton, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaSpotify, FaTwitch, FaTwitter } from 'react-icons/fa';

type ContactBoxProps = {
  href: string;
  icon: JSX.Element
}

const ContactBox = ({href, icon}: ContactBoxProps) => {
  return (
    <Link href={href} hrefPass target="_blank"><IconButton icon={icon} aria-label="social media link"></IconButton></Link>
  )
}

const ContactMe = () => {
  return (
    <HStack 
      divider={<StackDivider borderColor={useColorModeValue('black', 'whiteAlpha900')} />} 
      align="center" 
      justify="space-between"
    >
      <ContactBox href="mailTo:daniel@fenz.io" icon={<FaEnvelope />} />
      <ContactBox href="https://www.instagram.com/dafenz/" icon={<FaInstagram />} />
      <ContactBox href="https://twitter.com/FancyFenzi" icon={<FaTwitter />} />
      <ContactBox href="https://www.twitch.tv/dann_y" icon={<FaTwitch />} />
      <ContactBox href="https://www.linkedin.com/in/daniel-fenz-2b462b15a/" icon={<FaLinkedin />} />
      <ContactBox href="https://open.spotify.com/user/dann_yy?si=osRSn3HUSVKrXW0SQpDjfA&nd=1" icon={<FaSpotify />} />
    </HStack>
  )
};

export default ContactMe;