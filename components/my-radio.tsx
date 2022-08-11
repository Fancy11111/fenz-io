import { useState } from 'react'

import { RadioGroup } from '@headlessui/react'

type RadioGroupProps = {
  options: { label: string; value?: any }[]
  defaultVal: any
  name: string
}

export const MyRadioGroup = ({
  options,
  defaultVal,
  name
}: RadioGroupProps) => {
  let [selected, setSelected] = useState(defaultVal)

  return (
    <RadioGroup value={selected} onChange={setSelected} name={name}>
      {/* This Label is for the root `RadioGroup`.  */}
      <RadioGroup.Label className="sr-only">{name}</RadioGroup.Label>

      <div className="rounded-md bg-white">
        {options.map(({ label, value }, i) => (
          <RadioGroup.Option
            key={`radio-${name}-${i}`}
            value={value}
            className={({ checked }) => `
                ${
                  checked ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'
                }
                relative flex border p-4
              `}
          >
            {({ checked }) => (
              <div className="flex flex-col">
                {/* This Label is for the `RadioGroup.Option`.  */}
                <RadioGroup.Label
                  as="span"
                  className={`
                      ${
                        checked ? 'text-indigo-900' : 'text-gray-900'
                      } block text-sm font-medium`}
                >
                  {label}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
