import { AspectRatio, Container, Heading, Image } from "@chakra-ui/react";
import { client } from "../../libs/blog/contentful";
import { GET_POST, GET_POST_NAMES } from "../../libs/blog/posts";

const Post = ({title, headerImage}) => {
  return (
    <Container w="container.xl">
      <Heading as="h2">{title}</Heading>

      {headerImage ? <AspectRatio ratio={headerImage.width/headerImage.height}>
              <Image src={headerImage.url}  alt={headerImage.fileName}/>
            </AspectRatio> : <></>}
      
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