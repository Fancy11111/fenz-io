import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledDiv = styled(motion.div)<{ transition }>``

type SectionProps = {
  children: any
  delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <StyledDiv
      className="mb-6"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={`duration: 0.8, delay: ${delay}`}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
