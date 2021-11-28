import { Box, Spacer,Link } from '@chakra-ui/react';
import NextLink from 'next/link';

type CardProps = {
  title?: string,
  text?: string,
  children?: any,
  link?: string
}

const Card = ({title, text, children, link}: CardProps) => {
  return (
    <Box flexShrink={1} w={'13rem'} h={'18rem'} borderWidth="1px" borderRadius="lg" overflow="hidden" justify="content" align="center" display="flex" flexDirection="column">
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
          {link ? <NextLink href={link}><Link>{title}</Link></NextLink> : <>{title}</>}
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