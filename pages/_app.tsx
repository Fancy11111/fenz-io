import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import Layout from '../components/layouts/main'
import { client } from '../libs/blog/contentful'
import { ThemeProvider } from '../libs/theme/theme'

const App = ({ Component, pageProps, router }) => {
  const initTheme = 'dark'
  return (
    <ApolloProvider client={client}>
      <ThemeProvider initValue={initTheme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
