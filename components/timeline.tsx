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
  Stack,
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
  return (
    <Box>
      <Button bg={useColorModeValue('primaryLight', '#b54b5690')} onClick={onOpen}>{time}</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
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
    <Box as="div" h={5} mt={3} mb={3} borderLeftWidth={1} borderRightWidth={0} border="solid" w={1} borderColor={useColorModeValue('#0f0f0f90', '#f0f0f0c0')} />
  )
}

type TimelineProps = {
  children: Array<ReactElement<ITimelineItem>>
}

export const Timeline = ({children}: TimelineProps) => {
  return (
    <Container pt={2} pb={2} borderRadius="md">
      <Stack direction="column" align="center" justify="space-between" divider={<VertBar />}>
        {children}
        {/* {children.slice(0,1)}
        {children.slice(1).map((c) => (<><VertBar /> <>{c}</> </>))} */}
      </Stack>
    </Container>
  )
}