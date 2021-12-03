import { Box, Spacer,Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

type CardProps = {
  title?: string,
  text?: string,
  children?: any,
  link?: string
}

const Card = ({title, text, children, link}: CardProps) => {
  const linkColor = useColorModeValue('gray200', 'whiteAlpha900');
  return (
    <Box 
      flexShrink={1} 
      w={'13rem'} 
      h={'18rem'} 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      justify="content" 
      align="center" 
      display="flex" 
      flexDirection="column" 
      bg={useColorModeValue('#f0f0f040', '#00000040')}>
      <Spacer/>
      {children}
      <Spacer/>
      <Box p="6">

        {title !== undefined ? (<Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {link ? <NextLink href={link}><Link color={linkColor}>{title}</Link></NextLink> : <>{title}</>}
        </Box>)
        : <></>}

        <Box>
          {text}
        </Box>
      </Box>
    </Box>

  )
}

export default Card;