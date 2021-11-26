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
  VStack,
  StackDivider,
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const title = `${time} | ${description}`;
  return (
    <Box mt={{base:3, md: 5}}>
      <Button onClick={onOpen}>{title}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
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

type TimelineProps = {
  children: Array<ReactElement<ITimelineItem>>
}

export const Timeline = ({children}: TimelineProps) => {
  return (
    <VStack
      divider={<StackDivider borderColor={useColorModeValue('black', 'whiteAlpha900')} orientation="vertical"/>}
    >
      {children}
    </VStack>
  )
}