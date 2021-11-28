import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_API;


const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/ukmcdc8y5re9',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

export type MetaData = {
  sys?: {
    firstPublishedAt: Date
  }
  contentfulMetadata?: {
    tags: [{name: string}]
  }
}

export const MetaDataQuery = `
  sys{
    firstPublishedAt,
    
  },
  contentfulMetadata {tags {name}}
`

export type BlogPostCollectionResponse<T> = {
  "blogPostCollection"?: {
    items: [T & MetaData]
  }
}