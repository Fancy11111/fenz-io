import { AspectRatio, Container, Heading, Image, Divider, Code, OrderedList, ListItem, Link, Box, useColorModeValue } from "@chakra-ui/react";
import { client, MetaData } from "../../../libs/blog/contentful";
import { GET_POST, GET_POST_NAMES, Post, PostResponse } from "../../../libs/blog/posts";
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

let key = 1000;

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_, text) => <Heading as="h1" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_2]: (_, text) => <Heading as="h2" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_3]: (_, text) => <Heading as="h3" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_4]: (_, text) => <Heading as="h4" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.OL_LIST]: (children, text) => (
    <OrderedList key={text+'-key'}>
      {children.content.map((v) => 
      <ListItem key={v.content[0].content[0].value}>
        {v.content[0].content[0].value}
      </ListItem>)}
    </OrderedList>),
    [INLINES.HYPERLINK]: (c, text) => {
      return (
        <Link key={text+'-key'} href={c.data.uri} target="_blank">
          {text}
        </Link>
      )
    },
    [BLOCKS.HR]: () => <Divider mt={4} mb={4} orientation="horizontal" key={key++}/>,
  },
  renderMark: {
    [MARKS.CODE]: text => <Code key={text+'-key'}>{text}</Code>,
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },

}

const Post = ({title, headerImage, introText, paragraph}: Post & MetaData) => {
  
  return (
    <Container w="container.xl">
      <Box as="div" borderColor={useColorModeValue('primaryLight', 'primaryDark')} border={`1px solid`}>
        <Heading as="h1">{title}</Heading>
        {headerImage ? <AspectRatio ratio={headerImage.width/headerImage.height}>
                <Image src={headerImage.url}  alt={headerImage.description}/>
              </AspectRatio> : <></>}
        {introText}
      </Box>
      {documentToReactComponents(paragraph.json, options)}
      
    </Container>
  )
}

export default Post;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await client.query({query: GET_POST_NAMES});
  return {paths: res.data.blogPostCollection.items.map(p => `/blog/posts/${p.name}`), fallback: false}
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query<PostResponse>({query: GET_POST, variables: {search: params.id}});
  return {props: res.data.blogPostCollection.items[0] };
}