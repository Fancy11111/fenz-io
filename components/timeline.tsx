import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Container,
  Flex,
  useColorModeValue
} from "@chakra-ui/react"
import { ReactElement } from "react";

type TimelineItemProps = {
  time: string,
  description: string,
  children: any
}

interface ITimelineItem {
  time: string,
  description: string,
  children: any
}

export const TimelineItem: React.FunctionComponent<ITimelineItem> = ({time, description, children}: TimelineItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const title = `${time} | ${description}`;
  return (
    <Box>
      <Button onClick={onOpen}>{title}</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay w={{base: '150vw', md: '100vw'}} h={{base: '150vh', md: '100vh'}}/>
        <ModalContent>
          <ModalHeader>{description}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const VertBar = () => {
  return (
    <Box as="div" h={6} mt={4} mb={4} borderLeftWidth={1} borderRightWidth={0} border="solid" w={1} borderColor={useColorModeValue('#0f0f0f90', '#f0f0f0c0')} />
  )
}

type TimelineProps = {
  children: Array<ReactElement<ITimelineItem>>
}

export const Timeline = ({children}: TimelineProps) => {
  return (
    <Container pt={2} pb={2} borderRadius="md" bg={'secondaryAccent'}>
      <Flex direction="column" align="center" justify="space-between">
        {children.slice(0,1)}
        {children.slice(1).map(c => (<> <VertBar/> {c} </>))}
      </Flex>
    </Container>
  )
}