import { useQuery } from '@apollo/client/react';
import { GET_POST_PREVIEWS, PostPreview, PostPreviewResponse } from '../../libs/blog/posts';
import { Box, Image, AspectRatio, CircularProgress, Text, Stack, Tag, Link, Heading, Spacer, Container, Grid, useColorModeValue } from '@chakra-ui/react';
import { MetaData } from '../../libs/blog/contentful';
import NextLink from 'next/link';


const BlogPreviewItem = ({name, title, introText, contentfulMetadata, headerImage}: PostPreview & MetaData) => {
  const link = `/blog/posts/${name}`;
  const active = false;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
  const activeColor = useColorModeValue('primaryDark', 'primaryLight');
  return (
    <NextLink href={link}>
      <Link bg={active ? 'lightTeal' : undefined} color={active ? activeColor : inactiveColor}>
      <Box flexShrink={1} w={'13rem'} h={'18rem'} borderWidth="1px" borderRadius="lg" overflow="hidden" justify="content" align="center" display="flex" flexDirection="column">
          {headerImage ? 
            <AspectRatio ratio={headerImage.width/headerImage.height} maxH={100}>
              <Image src={headerImage.url}  alt={headerImage.description}/>
            </AspectRatio> : <Spacer/>
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
              {contentfulMetadata.tags.map(t => <Tag key={t.name}>{t.name}</Tag>)}
            </Stack>
          )
          : <></>}
          {/* {sys ? (
            <>
            {`Published: ${new Date(sys.firstPublishedAt).toLocaleDateString()}`}
            </>
          )
          : <></>} */}
          
          </Box>

          <Box>
            {introText}
          </Box>
          <Spacer/>
        </Box>
        </Link>
      </NextLink>
    )
}

const BlogPreview = ({limit, skip}) => {
  const { loading, data, error } = useQuery<PostPreviewResponse>(GET_POST_PREVIEWS, {variables: {limit, skip}});

  return (
    <Container maxW="container.xl" centerContent>
      
        {loading ? (<CircularProgress isIndeterminate color="green.300" />) : 
          (error ? 
            <Box><Text>Could not load Blog preview</Text></Box> : (
            <Grid templateColumns={`repeat(${Math.min(data.blogPostCollection.items.length, 5)}, 1fr)`} gap={6}>
              {data.blogPostCollection.items.map(e => 
                <BlogPreviewItem 
                  title={e.title} 
                  introText={e.introText} 
                  name={e.name} 
                  key={e.name} 
                  sys={e.sys} 
                  contentfulMetadata={e.contentfulMetadata}
                  headerImage={e.headerImage}
                ></BlogPreviewItem>
              )}
            </Grid>
          ))
        }
    </Container>
  )
}

export default BlogPreview;