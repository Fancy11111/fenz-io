import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';

const Main = ({children,router}) => {
  const img = `/logo-dark.png`
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Daniel Fenz</title>
        <meta charSet="utf-8"/>
        <link rel="icon" href={img}/>
        <meta name="description" content="Daniel Fenz. Programmer, Web-Developer, Music Enthusiast. My personal webpage"/>
        <meta name="author" content="Daniel Fenz" />
        <meta name="keywords" content="Daniel Fenz, Fenz, fenz.io, developer"/>
        <meta name="googlebot" content="index, follow"/>
        <meta name="robots" content="index, follow"/>
        <meta name="revisit-after" content="3 days"/>
        <meta name="news_keywords" content="Daniel Fenz"/>
        <meta name="og:title" property="og:title" content="Daniel Fenz"/>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main;