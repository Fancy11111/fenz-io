import Logo from "./logo";
import NextLink from 'next/link';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({href, path, children}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
  const activeColor = useColorModeValue('primaryDark', 'primaryLight');
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'lightTeal' : undefined} color={active ? activeColor : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

type MobileNavLink = {
  path: string,
  text: string,
  children?: any
}

const MobileNavLink = ({path,text, children}: MobileNavLink) => {
  return (
    <NextLink href={path} passHref>
      <MenuItem as={Link}>
        {text}
        {children}
      </MenuItem>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props;
  return (
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#f0f0f080', '#35353580')} style={{backdropFilter:'blur(10px)'}} zIndex={10} {...props}>  
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5} >
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo/>
          </Heading>
        </Flex>
        <Stack 
          display={{base:'none', md:'flex'}} 
          direction={{base:'column', md:'row'}} 
          width={{base:'full', md:'auto'}} 
          alignItems="center" 
          flexGrow={1} mt={{base:4, nmd:0}}
        >
          <LinkItem href="/education" path={path}>Education</LinkItem>
          <LinkItem href="/work" path={path}>Work</LinkItem>
          <LinkItem href="/projects" path={path}>Projects</LinkItem>
          <LinkItem href="/blog" path={path}>Blog</LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{base: 'inline-block', md:'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="menu"/>
              <MenuList>
                <MobileNavLink text="Home" path="/"></MobileNavLink>
                <MobileNavLink text="Education" path="/education"></MobileNavLink>
                <MobileNavLink text="Work" path="/work"></MobileNavLink>
                <MobileNavLink text="Projects" path="/projects"></MobileNavLink>
                <MobileNavLink text="Blog" path="/blog"></MobileNavLink>
                <MenuItem as={Link} href="https://github.com/Fancy11111/fenz-io" target="_blank">SourceCode</MenuItem>
                
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;