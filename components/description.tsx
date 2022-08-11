import { Disclosure, Transition } from '@headlessui/react'
import { ArrowRightFill } from './icons'

const Description = ({ short, long }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2">
            <span className="flex flex-row items-center">
              <ArrowRightFill
                className={`${open ? 'transform rotate-90' : ''}`}
              />
              {short}
            </span>
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="text-gray-700 dark:text-gray-200 p-4 rounded-lg bg-emerald-200 dark:bg-emerald-700">
              {long}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Description
