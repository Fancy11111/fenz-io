import { AspectRatio, Container, Heading, Image, Divider, Code, Text } from "@chakra-ui/react";
import { client } from "../../libs/blog/contentful";
import { GET_POST, GET_POST_NAMES } from "../../libs/blog/posts";
import { MARKS, BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Paragraph from "../../components/paragraph";

let key = 1000;

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_, text) => <Heading as="h1" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_2]: (_, text) => <Heading as="h2" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_3]: (_, text) => <Heading as="h3" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HEADING_4]: (_, text) => <Heading as="h4" key={text+'-key'}>{text}</Heading>,
    [BLOCKS.HR]: () => <Divider mt={4} mb={4} orientation="horizontal" key={key++}/>,
  },
  renderMark: {
    [MARKS.CODE]: text => <Code key={text+'-key'}>{text}</Code>,
  },
}

const Post = ({title, headerImage, introText, paragraph}) => {
  console.log(paragraph);
  
  return (
    <Container w="container.xl">
      <Heading as="h1">{title}</Heading>
      {headerImage ? <AspectRatio ratio={headerImage.width/headerImage.height}>
              <Image src={headerImage.url}  alt={headerImage.fileName}/>
            </AspectRatio> : <></>}
      {introText}
      {documentToReactComponents(paragraph.json, options)}
      
    </Container>
  )
}

export default Post;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await client.query({query: GET_POST_NAMES});
  return {paths: res.data.blogPostCollection.items.map(p => `/posts/${p.name}`), fallback: false}
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query({query: GET_POST, variables: {search: params.id}});
  return {props: res.data.blogPostCollection.items[0] };
}