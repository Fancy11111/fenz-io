import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext, useThemeMode } from '../libs/theme/theme'
import { IconButton } from './icon-button'
import { MoonFill, SunFill } from './icons'

const ThemeToggleButton = () => {
  const themeStore = useContext(ThemeContext)
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useThemeMode('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          icon={useThemeMode(<MoonFill></MoonFill>, <SunFill></SunFill>)}
          onClick={themeStore.toggleTheme}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
