import { Container, Box } from '@chakra-ui/react';

const Page = () => {
  const introText = 'Hi, I\'m Daniel, a software engineer(ing student) from Austria'
  return (
    <Container>
      <Box borderRadius="lg" bg="primary" p={3} mb={6} align="center">
        {introText}
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <p>Software Engineer (Frontend, Backend) and Music Enthusiast</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page;