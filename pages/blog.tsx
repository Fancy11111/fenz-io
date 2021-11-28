import { useState } from 'react';
import BlogPreview from '../components/blog/blog-preview';
import { Container, Flex, Stack, Radio, Select, RadioGroup } from '@chakra-ui/react';

import { client } from '../libs/blog/contentful';
import { AMOUNT_OF_POSTS } from '../libs/blog/posts';

const Blog = ({amount}) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(1);
  const handleLimitChange = (e) => {
    e.preventDefault();
    setLimit(Number.parseInt(e.target.value));
    setOffset(1);
  };

  const handleOffsetChange = (e) => {
    e.preventDefault();
    setOffset(Number.parseInt(e.target.value));
    
  };
  const pageAmount = amount % limit == 0 ? amount / limit : Math.ceil(amount / limit);
  const pages = [];
  for(let i = 1; i < pageAmount+1; i++) {
    pages.push(i);
  }
  
  
  return ( 
    <Container>
      <Flex>
        <Select maxW="5em" defaultValue={limit} onChange={handleLimitChange}>
          <option value={1} >1</option>
          <option value={10} >10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </Select>
      </Flex>
      <BlogPreview limit={limit} skip={(offset-1)*limit} />
      <RadioGroup value={offset}>
        <Stack spacing={4} direction='row'>
          {pages.map((v) => (<Radio onChange={handleOffsetChange} key={v} value={v}>{v}</Radio>))}
        </Stack>
      </RadioGroup>
    </Container>
  )
}

export async function getStaticProps(_) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query({query: AMOUNT_OF_POSTS});
  
  return {props: {amount: res.data.blogPostCollection.total} };
}

export default Blog;