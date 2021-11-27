import { Box, Image, AspectRatio } from '@chakra-ui/react';

type CardProps = {
  title?: string,
  text?: string,
  imageUrl?: string,
  imageAlt?: string
}

const Card = ({title, text, imageUrl, imageAlt}: CardProps) => {
  return (
    <Box flexShrink={1} w={'16rem'} h={'16rem'} borderWidth="1px" borderRadius="lg" overflow="hidden" justify="content" align="center">
      <AspectRatio ratio={1/1} w={'8rem'}> 
        <Image src={imageUrl} alt={imageAlt} borderRadius="lg" objectFit="cover" p={5} />
      </AspectRatio>
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