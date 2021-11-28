import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const accessToken = 'dUJXfwSYCJIquPJbog1zpY5xKNJSZIJGEiaWCCQQlBk';

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