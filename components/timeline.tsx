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
  Box
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
    <>
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
    </>
  );
}

type TimelineProps = {
  children: Array<ReactElement<ITimelineItem>>
}

export const Timeline = ({children}: TimelineProps) => {
  return (
    <Box>
      {children}
    </Box>
  )
}