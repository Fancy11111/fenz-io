import { useState } from 'react';
import BlogPreview from '../components/blog/blog-preview';
import { Container, Select, Box, FormControl, FormLabel } from '@chakra-ui/react';

import { client } from '../libs/blog/contentful';
import { AMOUNT_OF_POSTS } from '../libs/blog/posts';
import { MyRadioGroup } from '../components/my-radio';

const Blog = ({amount}) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(1);
  const handleLimitChange = (e) => {
    e.preventDefault();
    setLimit(Number.parseInt(e.target.value));
    setOffset(1);
  };

  const handleOffsetChange = (e) => {
    console.log(e);
    
    setOffset(Number.parseInt(e));
    
  };
  const pageAmount = amount % limit == 0 ? amount / limit : Math.ceil(amount / limit);
  const pages = [];
  for(let i = 1; i < pageAmount+1; i++) {
    pages.push(i);
  }
  
  
  return ( 
    <Container maxW="container.lg" mt={5}>
      <Container>
        <FormControl id='limit'>
          <FormLabel>Results per page</FormLabel>
          <Select maxW="5em" defaultValue={limit} onChange={handleLimitChange}>
            <option value={1} >1</option>
            <option value={10} >10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </Select>
        </FormControl>
      </Container>
      <Box as="div" minH="60vh" mt={10}>
        <BlogPreview limit={limit} skip={(offset-1)*limit} />
      </Box>
      <Container mt={5}>
        <FormControl id='page'>
          <FormLabel>Page</FormLabel>
          <MyRadioGroup onChange={handleOffsetChange} options={pages} defaultValue={1} name='pages'></MyRadioGroup>
        </FormControl>
      </Container>
    </Container>
  )
}

export async function getStaticProps(_) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query({query: AMOUNT_OF_POSTS});
  
  return {props: {amount: res.data.blogPostCollection.total} };
}

export default Blog;