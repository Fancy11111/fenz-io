import { ChakraProvider } from '@chakra-ui/react';
import {  ApolloProvider } from "@apollo/client";
import Fonts from '../components/fonts';
import Layout from '../components/layouts/main';
import theme from '../libs/theme/theme';
import { client } from '../libs/blog/contentful';

const App = ({Component, pageProps, router}) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App;