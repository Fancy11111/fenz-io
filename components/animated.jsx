import { chakra, shouldForwardProp, Box } from "@chakra-ui/react"
import { motion, useTransform, useViewportScroll } from "framer-motion"

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition' ||prop === 'animation'
  }
}
)

const getSkews = () => {
  return {
    xSkew1: randVal(20),
    ySkew1: randVal(40),
    xSkew2: randVal(20),
    ySkew2: randVal(40)
  }
  
}

const randVal = (num) => {

  return Math.random() * (2*num) - num;
}

const Animated = () => {
  const { scrollYProgress } = useViewportScroll();
  const skews = getSkews();
  const xSkew1 = useTransform(scrollYProgress, [0,1], [skews.xSkew1/-2, skews.xSkew1/2]);
  const ySkew1 = useTransform(scrollYProgress, [0,1], [skews.ySkew1/-2, skews.ySkew1/2]);
  const xSkew2 = useTransform(scrollYProgress, [0,1], [skews.xSkew2/-2, skews.xSkew2/2]);
  const ySkew2 = useTransform(scrollYProgress, [0,1], [skews.ySkew2/-2, skews.ySkew2/2]);
  return <Box as="div" width="100vw" height="100vh" pos="fixed" zIndex={-1} left={0} top={0}>
    <StyledDiv
      width='min(60vw, 60vh)' height='min(55vw, 55vh)' position="fixed" left={{base: '10vw', md: '40vw'}} top='50vh' bgGradient={`linear(to-r, #4db6ac20, #b54b5610)`} borderRadius='50%'
      animate={{ skewY: [0,randVal(2),0,randVal(3), 0], skewX: [0,randVal(5),0, randVal(4), 0] }}
      style={{translateX: xSkew1, translateY: ySkew1}}
      transition={{ duration: 10, repeat: 2 }}
    />
    
    <StyledDiv
      width='min(65vw, 65vh)' height='min(75vw, 75vh)' position="fixed" left={{base: '10vw', md: '30vw'}} top='10vh' borderRadius='50%' bgGradient={`linear(to-tl, #b54b5610, #4db6ac20)`}
      animate={{ skewY: [0,randVal(5),0,randVal(5), 0], skewX: [0,randVal(3),0, randVal(5), 0], rotateY:[0,randVal(4),0] }}
      transition={{ duration: 15, repeat: 2 }}
      style={{translateX: xSkew2, translateY: ySkew2}}
    />
  </Box>
}

export default Animated;