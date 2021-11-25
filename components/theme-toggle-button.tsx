import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton 
      aria-label="Toggle theme" 
      colorSchme={useColorModeValue} 
      icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleButton