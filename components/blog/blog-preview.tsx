import { useQuery } from '@apollo/client/react';
import { GET_POST_PREVIEWS, PostPreview, PostPreviewResponse } from '../../libs/blog/posts';
import { Box, Image, AspectRatio, CircularProgress, Text, Stack, Badge, Heading, Spacer } from '@chakra-ui/react';
import { MetaData } from '../../libs/blog/contentful';
import NextLink from 'next/link';


const BlogPreviewItem = ({name, title, introText, contentfulMetadata, sys, headerImage}: PostPreview & MetaData) => {
  const link = `/blog/posts/${name}`;
  
  return (
    <NextLink href={link}>
    <Box display="flex" flexDirection="column" alignContent="center" justifyContent="center" flexShrink={1} borderWidth="1px" borderRadius="lg" maxW="15rem" h="15rem" overflow="hidden" justify="content" align="center">
        {headerImage ? 
          <AspectRatio ratio={headerImage.width/headerImage.height} maxH={100}>
            <Image src={headerImage.url}  alt={headerImage.description}/>
          </AspectRatio> : <></>
        }
        <Spacer />
        <Box
          mt="1"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated
        >
          {<Heading as="h2">{title}</Heading>}
        </Box>
        <Box>
        {contentfulMetadata?.tags ? (
          <Stack direction="row" justify="center">
            {contentfulMetadata.tags.map(t => <Badge key={t.name}>{t.name}</Badge>)}
          </Stack>
        )
        : <></>}
        {sys ? (
          <>
          {`Published: ${new Date(sys.firstPublishedAt).toLocaleDateString()}`}
          </>
        )
        : <></>}
        
        </Box>

        <Box>
          {introText}
        </Box>
        <Spacer/>
      </Box>
      </NextLink>
    )
}

const BlogPreview = ({limit, skip}) => {
  const { loading, data, error } = useQuery<PostPreviewResponse>(GET_POST_PREVIEWS, {variables: {limit, skip}});

  return (
    <>
    {loading ? (<CircularProgress isIndeterminate color="green.300" />) : 
      (error ? <Box><Text>Could not load Blog preview</Text></Box> : (
        data.blogPostCollection.items.map(e => 
          <BlogPreviewItem 
            title={e.title} 
            introText={e.introText} 
            name={e.name} 
            key={e.name} 
            sys={e.sys} 
            contentfulMetadata={e.contentfulMetadata}
            headerImage={e.headerImage}
          ></BlogPreviewItem>
        )
      ))
    }
    </>
  )
}

export default BlogPreview;