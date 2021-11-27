import NextLink from 'next/link';
import { Box, Breadcrumb, useColorModeValue, Link, BreadcrumbItem, BreadcrumbLink  } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const BreadcrumbBar = props => {
  const { path } = props;
  const paths: string[] = path.split('/');
  let aggregatedPaths: string[] = [];
  let aggregate: string = '';
  paths.forEach((el) => {
    aggregate += el !== '' ? '/' + el : '';
    aggregatedPaths.push(aggregate);
  });
  const bgVal = useColorModeValue('#f0f0f080', '#35353580');
  return (
    path !== '' && path !== '/' ? 
    (<Box position="fixed" w="100%" bg={bgVal} style={{backdropFilter:'blur(10px)'}} zIndex={10} {...props}>
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
        {
          aggregatedPaths.map((p,i) => (
            <NextLink href={p} key={p}> 
              <BreadcrumbItem ><BreadcrumbLink as={Link}>{i == 0 ? 'Home' : paths[i]}</BreadcrumbLink></BreadcrumbItem> 
            </NextLink>
          ))
        }
        
      </Breadcrumb>
    </Box>)
    : <></>
  )
}

export default BreadcrumbBar