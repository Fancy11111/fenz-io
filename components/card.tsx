import { Box, Image, Heading } from '@chakra-ui/react';

type CardProps = {
  title?: string,
  text?: string,
  imageUrl?: string,
  imageAlt?: string
}

const Card = ({title, text, imageUrl, imageAlt}: CardProps) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} borderRadius="md" maxH="200px"/>

      <Box p="6">

        {title !== undefined ? (<Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >{title}</Box>)
        : <></>}

        <Box>
          {text}
        </Box>
      </Box>
    </Box>

  )
}

export default Card;