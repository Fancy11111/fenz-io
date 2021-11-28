// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0f0f0', '#151515')(props)
    }
  })
}

const components = {
  Heading: {
    variant: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 5,
        textDecorationColor: '#555555',
        marginTop: 3,
        marginBottom: 3
      }
    }
  },  
  Text: {
    variant: {
      'under-image': props => ({
        textDecoration: 'none',
        fontSize: 10,
        marginTop: 3,
        color: mode('#888888', '#888888')(props),
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#4080f0', '#ff60c0')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Abel'
}

const colors = {
  primary: '#4db6ac',
  primaryLight: '#82e9de',
  primaryDark: '#00867d',
  secondary: '#b54b56',
  secondaryLight: '#eb7a82',
  secondaryAccent: '#b54b5625',
  secondaryAccentDark: '#811a2d40',
  secondaryDark: '#811a2d'

}

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config, styles, colors, components, fonts })

export default theme