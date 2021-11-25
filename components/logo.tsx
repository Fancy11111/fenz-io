import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  & img {
    transition: transform 0.5s ease-in-out
  }

  &:hover img {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  const img = `/logo${useColorModeValue('','-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={img} width={20} height={20} alt="logo"/>
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='Roboto' fontWeight='bold' ml={3}>
            Daniel Fenz
          </Text>
        </LogoBox>

      </a>
    </Link>
  );
}

export default Logo;