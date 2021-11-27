import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

type SectionProps = {
  children: any,
  delay?: number
}

const Section = ({children, delay = 0}: SectionProps) => {
  return (
    <StyledDiv 
      initial={{y: 10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={`duration: 0.8, delay: ${delay}`}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section;