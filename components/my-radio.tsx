import { useRadio, useRadioGroup } from "@chakra-ui/radio";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { start } from "repl";

export const  RadioCard = (props) => {
  const { getInputProps, getCheckboxProps, state } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps();
  

  
  

  return (
    <Box as='label'>
      <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'primary',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const MyRadioGroup = ({onChange, options, name, defaultValue}) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      <Spacer />
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
      <Spacer />
    </HStack>
  )
}